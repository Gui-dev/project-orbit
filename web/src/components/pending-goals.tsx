import { useQuery, useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { createGoalCompletion } from '../http/create-goal-completion'
import { getPedingGoals } from '../http/get-pending-goals'
import { OutlineButton } from './ui/outline-button'

export const PendingGoals = () => {
  const queryClient = useQueryClient()
  const { data } = useQuery({
    queryKey: ['peding-goals'],
    queryFn: getPedingGoals,
    staleTime: 1000 * 60, //60 seconds
  })

  if (!data) {
    return null
  }

  const handleCompletedGoal = async (goalId: string) => {
    await createGoalCompletion(goalId)
    queryClient.invalidateQueries({ queryKey: ['summary'] })
    queryClient.invalidateQueries({ queryKey: ['peding-goals'] })
  }

  return (
    <div className="flex flex-wrap gap-3">
      {data.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount >= goal.desireWeeklyFrequency}
            onClick={() => handleCompletedGoal(goal.id)}
          >
            <Plus className="size-4 text-zinc-600" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
