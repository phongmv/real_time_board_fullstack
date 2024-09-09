'use client'
import { cn } from '@/lib/utils'
import { Plus } from 'lucide-react'
import { api } from '@/convex/_generated/api'
import { useApiMutation } from '@/hooks/use-api-mutation'
import { toast } from 'sonner'

interface NewBoardButtonProps {
  orgId: string
  disabled?: boolean
}

const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutation(api.board.create)

  const onClick = () => {
    mutate({
      title: 'Untitled',
      orgId,
    })
      .then((id) => {
        toast.success('Created board!')
      })
      .catch(() => {
        toast.error('Failed to create board')
      })
  }

  return (
    <button
      className={cn(
        'col-span-1 aspect-[100/127] bg-blue-300 hover:bg-blue-600 rounded-2xl flex flex-col justify-center items-center py-6',
        (disabled || pending) && 'opacity-75 hover:bg-blue-600 cursor-not-allowed'
      )}
      disabled={disabled || pending}
      onClick={onClick}
    >
      <Plus className={cn('w-12 h-12 text-white stroke-1')} />
      <p className="text-sm text-white font-light">New board</p>
    </button>
  )
}

export default NewBoardButton