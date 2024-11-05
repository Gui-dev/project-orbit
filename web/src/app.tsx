import { Plus } from 'lucide-react'
import logo from './assets/images/in-orbit-logo.svg'
import letsStart from './assets/images/rocket-launch-illustration.svg'

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
      <button
        type="button"
        className="flex items-center gap-2 text-sm font-medium tracking-tighter px-4 py-2.5 rounded-lg bg-violet-500 text-violet-50 hover:bg-violet-600"
      >
        <Plus className="size-4" />
        Cadastrar meta
      </button>
    </div>
  )
}
