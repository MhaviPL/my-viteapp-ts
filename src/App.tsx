import { Card } from "./components/Card"


function App() {
  return(
    <> 
    <div>
      Hello Word
      <Card 
      id={2}
      paragraph="Typescript"
      details="TS para frontend e backend"
      />
      <Card 
      id={3}
      paragraph="HTML"
      details="HTML para frontend"
      />
    </div>
    <div>
      Footer
    </div>
    </>
  )
}

export default App
