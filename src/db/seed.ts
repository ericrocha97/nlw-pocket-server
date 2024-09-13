import { client, db } from '.'
import { goalCompletions, goals } from './schema'
import dayjs from 'dayjs'

async function seed() {
  await db.delete(goalCompletions)
  await db.delete(goals)

  const result = await db
    .insert(goals)
    .values([
      { title: 'Acordar cedo', desiredWeeklyFrequency: 5 },
      { title: 'Me exercitar', desiredWeeklyFrequency: 3 },
      { title: 'Meditar', desiredWeeklyFrequency: 1 },
    ])
    .returning()

  const startOfWeek = dayjs().startOf('week')

  await db.insert(goalCompletions).values([
    {
      goalId: result[0].id,
      createdAt: startOfWeek.hour(14).minute(23).toDate(),
    },
    {
      goalId: result[1].id,
      createdAt: startOfWeek.hour(15).minute(47).add(1, 'day').toDate(),
    },
    {
      goalId: result[1].id,
      createdAt: startOfWeek.hour(18).minute(2).add(2, 'day').toDate(),
    },
  ])
}

seed().finally(() => {
  client.end()
})
