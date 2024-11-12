type PedingGoalsResponse = {
  id: string
  title: string
  desireWeeklyFrequency: number
  completionCount: number
}[]

export const getPedingGoals = async (): Promise<PedingGoalsResponse> => {
  const response = await fetch('http://localhost:3333/pending-goals')
  const data = await response.json()

  return data.pendingGoals
}
