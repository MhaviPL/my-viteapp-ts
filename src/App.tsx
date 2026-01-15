//import { Card } from "./components/Card"
import { Input, Box, AbsoluteCenter, Center, Button, Flex } from "@chakra-ui/react"
import { PasswordInput } from "@/components/ui/password-input"


function App() {
  return(
        <Box minH="100vh" backgroundColor="darkgray" padding="25px">
          <AbsoluteCenter axis="both">
            <Box backgroundColor="white" padding="15px" borderRadius="25px">
              <Flex gap="4" direction="column">
                <Center>
                <h1>Faça o Login</h1>
                </Center>
                <label htmlFor="emailInput">Email: </label>
                <Input placeholder="Digite seu Email" type="email" id="emailInput"/>
                <label htmlFor="passwordInput">Senha:</label>
                <PasswordInput placeholder="Digite sua Senha" type="password" id="passwordInput"/>
                <Center>
                  <Button type="button">Entrar</Button>
                </Center>
              </Flex>
            </Box>
          </AbsoluteCenter>
        </Box>
  )
}

export default App
