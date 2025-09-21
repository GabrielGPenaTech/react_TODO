import { Text } from "./components/text";
import SpinIcon from "./assets/icons/spinner.svg?react"
import { Icon } from "./components/icon";

export function App() {
  return (
    <div className="grid g-3">
      <div className="flex flex-col gap-2">
        <Text variant="body-sm-bold" as="h1" className="text-pink-dark">Olá zé</Text>
        <Text variant="body-md-bold" as="h1" className="text-pink-base">Olá zé</Text>
        <Text>Olá zé</Text>
      </div>

      <div className="flex flex-col">
        <Icon svg={SpinIcon} animate className="fill-green-base" />
      </div>
    </div>
  )
}