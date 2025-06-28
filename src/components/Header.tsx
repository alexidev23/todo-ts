import { ModeToggle } from "./mode-toggle"

export function Header() {
  return (
    <header className="w-full flex items-center justify-end py-4 px-6 gap-3.5">
      <ModeToggle />
      <div className="h-10 w-10 border rounded-full flex items-center justify-center">
        <img src="/perfil.png" alt="Foto del avatar" height={100} width={100} />
      </div>
    </header>
  )
}