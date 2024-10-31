import dayjs from 'dayjs'
import { db } from '.'
import { goalCompletions, goals } from './schema'

export const seed = async () => {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const goalsResult = await db
    .insert(goals)
    .values([
      { title: 'Acordar cedo', desireWeeklyFrequency: 5 },
      { title: 'Me exercitar', desireWeeklyFrequency: 5 },
      { title: 'Meditar', desireWeeklyFrequency: 1 },
    ])
    .returning()

  const startOfWeek = dayjs().startOf('week')

  await db.insert(goalCompletions).values([
    { goalId: goalsResult[0].id, createdAt: startOfWeek.toDate() },
    {
      goalId: goalsResult[1].id,
      createdAt: startOfWeek.add(1, 'day').toDate(),
    },
  ])
}

seed()
