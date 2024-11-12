interface ICreateGoalProps {
  title: string
  desireWeeklyFrequency: number
}

export const createGoal = async ({
  title,
  desireWeeklyFrequency,
}: ICreateGoalProps): Promise<void> => {
  await fetch('http://localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      desireWeeklyFrequency,
    }),
  })
}
