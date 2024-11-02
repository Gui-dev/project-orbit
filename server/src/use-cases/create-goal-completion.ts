import dayjs from 'dayjs'
import { and, count, eq, gte, lte, sql } from 'drizzle-orm'
import { db } from '../db'
import { goalCompletions, goals } from '../db/schema'

interface ICreateGoalCompletion {
  goalId: string
}

export const createGoalCompletion = async ({
  goalId,
}: ICreateGoalCompletion) => {
  const firstDayOfWeek = dayjs().startOf('week').toDate()
  const lastDayOfWeek = dayjs().endOf('week').toDate()

  const goalCompletionCounts = db.$with('goal_completion_counts').as(
    db
      .select({
        goalId: goalCompletions.goalId,
        completionCount: count(goalCompletions.id).as('completionCount'),
      })
      .from(goalCompletions)
      .where(
        and(
          gte(goalCompletions.createdAt, firstDayOfWeek),
          lte(goalCompletions.createdAt, lastDayOfWeek),
          eq(goalCompletions.goalId, goalId),
        ),
      )
      .groupBy(goalCompletions.goalId),
  )

  const result = await db
    .with(goalCompletionCounts)
    .select({
      desireWeeklyFrequency: goals.desireWeeklyFrequency,
      completionCount: sql`
        COALESCE(${goalCompletionCounts.completionCount}, 0)
      `.mapWith(Number),
    })
    .from(goals)
    .leftJoin(goalCompletionCounts, eq(goalCompletionCounts.goalId, goals.id))
    .where(eq(goals.id, goalId))
    .limit(1)

  const { completionCount, desireWeeklyFrequency } = result[0]

  if (completionCount >= desireWeeklyFrequency) {
    throw new Error('Goal already completed this week')
  }

  const goalCompletionsResult = await db
    .insert(goalCompletions)
    .values({ goalId })
    .returning()
  const goalCompletion = goalCompletionsResult[0]

  return { goalCompletion }
}
