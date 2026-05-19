// Page Object: Login
// Responsável por todas as ações e seletores da página de login

class LoginPage {

    // Mapeamento dos seletores da página de login
    selectorsList() {
        const selectors = {
            loginButton:     'button',
            emailField:      '[data-cy="email"]',
            passwordField:   '[data-cy="password"]',
            submitButton:    'button',
            logoutButton:    'button',
            errorMessage:    '.text-red-500',
        }
        return selectors
    }

    // Acessa a página inicial da aplicação
    accessLoginPage() {
        cy.visit('http://localhost:3000/')
    }

    // Abre o modal de login
    openLoginModal() {
        cy.contains(this.selectorsList().loginButton, 'Login').click()
    }

    // Realiza login com qualquer usuário válido
    loginWithAnyUser(email: string, password: string) {
        this.openLoginModal()
        cy.get(this.selectorsList().emailField).type(email)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.contains(this.selectorsList().submitButton, 'Sign in').click()
    }

    // Realiza login sem email
    loginWithoutEmail(password: string) {
        this.openLoginModal()
        cy.get(this.selectorsList().passwordField).type(password)
        cy.contains(this.selectorsList().submitButton, 'Sign in').click()
    }

    // Realiza login sem senha
    loginWithoutPassword(email: string) {
        this.openLoginModal()
        cy.get(this.selectorsList().emailField).type(email)
        cy.contains(this.selectorsList().submitButton, 'Sign in').click()
    }

    // Verifica mensagem de erro
    verifyErrorMessage(message: string) {
        cy.get(this.selectorsList().errorMessage).should('contain', message)
    }

    // Verifica se está logado
    verifyLoggedIn() {
        cy.contains(this.selectorsList().logoutButton, 'Logout').should('be.visible')
    }
}

export default LoginPage