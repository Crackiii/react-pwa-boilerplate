import Logo from './assets/logo.png'
import { Button } from './components/ui/button'

function App() {
  return (
    <div className="text-4xl h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <img alt="logo" className="w-[200px] h-[200px]" src={Logo} />
      <div>React Vite Boiler Plate</div>
      <Button className="rounded-full">Learn more now</Button>
    </div>
  )
}

export default App
