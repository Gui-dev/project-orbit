import { Plus } from 'lucide-react'
import logo from './assets/images/in-orbit-logo.svg'
import letsStart from './assets/images/rocket-launch-illustration.svg'
import { Button } from './components/ui/button'

export const App = () => {
  return (
    <div className="flex flex-col h-screen gap-8 items-center justify-center py-2">
      <img src={logo} alt="Orbit logo" />
      <img
        src={letsStart}
        alt="A woman pressing a button and next to it an illustration of a rocket igniting"
      />
      <p className="text-zinc-300 leading-relaxed max-w-80 text-center">
        Você ainda não cadastrou nenhuma meta, que tal cadastrar um agora mesmo
        ?
      </p>
      <Button type="button">
        <Plus className="size-4" />
        Cadastrar meta
      </Button>
    </div>
  )
}
