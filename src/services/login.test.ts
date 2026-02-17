import { login } from "./login"

describe('login', ()=>{
    const mockAlert = vitest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', ()=> {
        login()
        expect(mockAlert).toBeCalled()
    })
})