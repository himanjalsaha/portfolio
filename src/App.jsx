import Header from "./components/Header"
import About from "./components/About"

function App() {


  return (
    <>
     <Header/>
     <About className='h-[calc(100vh - 62px)]'/>
    </>
  )
}

export default App
