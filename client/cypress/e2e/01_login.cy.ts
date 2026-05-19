// Spec: Login
// Casos de teste para a feature de autenticação

import LoginPage from '../pages/loginPage'
import userData from '../fixtures/userData.json'

const loginPage = new LoginPage()

describe('CT-001 a CT-006 | Cypress Heroes | Login Tests', () => {

    beforeEach(() => {
        loginPage.accessLoginPage()
    })

    // CT-001
    it('CT-001 | Login - Success with valid user', () => {
        loginPage.loginWithAnyUser(userData.userSuccess.email, userData.userSuccess.password)
        loginPage.verifyLoggedIn()
    })

    // CT-002
    it('CT-002 | Login - Success with admin user', () => {
        loginPage.loginWithAnyUser(userData.adminUser.email, userData.adminUser.password)
        loginPage.verifyLoggedIn()
    })

    // CT-003
    it('CT-003 | Login - Fail with invalid email format', () => {
        loginPage.loginWithAnyUser(userData.userInvalidEmail.email, userData.userInvalidEmail.password)
        loginPage.verifyErrorMessage('Email is not valid')
    })

    // CT-004
    it('CT-004 | Login - Fail with wrong password', () => {
        loginPage.loginWithAnyUser(userData.userWrongPassword.email, userData.userWrongPassword.password)
        loginPage.verifyErrorMessage('Invalid email or password')
    })

    // CT-005
    it('CT-005 | Login - Fail without email', () => {
        loginPage.loginWithoutEmail(userData.userSuccess.password)
        loginPage.verifyErrorMessage('Email is required')
    })

    // CT-006
    it('CT-006 | Login - Fail without password', () => {
        loginPage.loginWithoutPassword(userData.userSuccess.email)
        loginPage.verifyErrorMessage('Password is required')
    })

})