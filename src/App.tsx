import { Card } from "./components/Card"
 import { Layout } from "./components/Layout"

function App() {
  return(
      <Layout>
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
      </Layout>
  )
}

export default App
