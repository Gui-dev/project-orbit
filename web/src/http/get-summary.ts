type SummaryProps = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      createdAt: string
    }[]
  >
}

export const getSummary = async (): Promise<SummaryProps> => {
  const response = await fetch('http://localhost:3333/summary')
  const data = await response.json()

  return data.summary
}
