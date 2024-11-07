import { CheckCircle2, Plus } from 'lucide-react'
import { InOrbitIcon } from './orbit-icon'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import { OutlineButton } from './ui/outline-button'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'

export const Summary = () => {
  return (
    <div className="flex flex-col gap-6 px-5 py-10 mx-auto max-w-[480px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <InOrbitIcon />
          <span className="text-lg">05 à 12 de Novembro</span>
        </div>
        <DialogTrigger asChild>
          <Button type="button">
            <Plus className="size-4" />
            Cadastrar meta
          </Button>
        </DialogTrigger>
      </div>

      <div className="flex flex-col gap-3">
        <Progress value={8} max={15}>
          <ProgressIndicator style={{ width: '50%' }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-zinc-400">
          <span>
            Você completou <span className="text-zinc-100">8</span> de{' '}
            <span className="text-zinc-100">15</span> metas nessa semana
          </span>
          <span>58%</span>
        </div>

        <Separator />

        <div className="flex flex-wrap gap-3">
          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Meditar
          </OutlineButton>

          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Nadar
          </OutlineButton>

          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Praticar exercício
          </OutlineButton>

          <OutlineButton>
            <Plus className="size-4 text-zinc-600" />
            Me alimentar bem
          </OutlineButton>
        </div>

        <div className="flex flex-col gap-6">
          <h2>Sua semana</h2>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">
              Quinta{' '}
              <span className="text-xs text-zinc-400">(07 de Novembro)</span>
            </h3>

            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-pink-500" />
                <span className="text-sm text-zinc-400">
                  Você completou "
                  <span className="text-zinc-100">Acordar cedo</span>" às{' '}
                  <span className="text-zinc-100">08:13h</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
