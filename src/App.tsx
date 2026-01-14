//import { Card } from "./components/Card"
 import { Layout } from "./components/Layout"

function App() {
  return(
      <Layout>
        <h1>Faça o Login</h1>
        <label htmlFor="emailInput">Email: </label>
        <input type="email" id="emailInput" />
        <label htmlFor="passwordInput">Senha:</label>
        <input type="password" id="passwordInput" />
        <button type="button">Entrar</button>
      </Layout>
  )
}

export default App
