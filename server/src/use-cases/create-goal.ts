import { db } from '../db'
import { goals } from '../db/schema'

interface ICreateGoalRequest {
  title: string
  desireWeeklyFrequency: number
}

export const createGoal = async ({
  title,
  desireWeeklyFrequency,
}: ICreateGoalRequest) => {
  const goalsResult = await db
    .insert(goals)
    .values({
      title,
      desireWeeklyFrequency,
    })
    .returning()
  const goal = goalsResult[0]

  return { goal }
}
