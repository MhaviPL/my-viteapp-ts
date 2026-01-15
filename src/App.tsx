//import { Card } from "./components/Card"
import { Layout } from "./components/Layout"
import styled  from "styled-components"

const Box = styled.div`
  background-color: lightblue;
  border-radius: 5px;
  padding-left: 10px;
`

function App() {
  return(
      <Layout>
        <Box>
          <h1>Faça o Login</h1>
        </Box>
        <label htmlFor="emailInput">Email: </label>
        <input type="email" id="emailInput" />
        <label htmlFor="passwordInput">Senha:</label>
        <input type="password" id="passwordInput" />
        <button type="button">Entrar</button>
      </Layout>
  )
}

export default App
