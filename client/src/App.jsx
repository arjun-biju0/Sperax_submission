
import { Loader, Navbar,  Transactions, Services, Welcome } from "./components"


const App=()=> {
  

  return (
    <>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services/>
        <Transactions/>
      
      </div>
    </>
  )
}

export default App
