describe('Advanced Assertions on Practice Test Login Page', () => {

  beforeEach(() => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
  });

  it('Validates successful login and dashboard elements', () => {

    //Assert page title
    cy.title().should('contain', 'Test Login');

    //Username field – visible, enabled, has attribute, id, input value check
    cy.xpath('//*[@id="username"]').should('be.visible')
    cy.wait(3000)
    cy.xpath('//*[@id="username"]').should('be.enabled')
    cy.wait(3000)
    cy.xpath('//*[@id="username"]').should('have.attr', 'type', 'text')
    cy.wait(3000)
    cy.xpath('//*[@id="username"]').should('have.attr', 'id', 'username')
    cy.wait(3000)
    cy.xpath('//*[@id="username"]').type('student')
    cy.wait(3000)
    cy.xpath('//*[@id="username"]').should('have.value', 'student')
    cy.wait(3000)

    //Password field - visible, enabled, has attribute, id, input value check
    cy.xpath('//*[@id="password"]').should('be.visible')
    cy.wait(3000)
    cy.xpath('//*[@id="password"]').should('be.enabled')
    cy.wait(3000)
    cy.xpath('//*[@id="password"]').should('have.attr', 'type', 'password')
    cy.wait(3000)
    cy.xpath('//*[@id="password"]').should('have.attr', 'id', 'password')
    cy.wait(3000)
    cy.xpath('//*[@id="password"]').type('Password123')
    cy.wait(3000)
    cy.xpath('//*[@id="password"]').should('have.value', 'Password123')
    cy.wait(3000)

    //Login button - visible, enabled, has attribute, id, input value check
    cy.xpath('//*[@id="submit"]').should('be.visible')
    cy.wait(3000)
    cy.xpath('//*[@id="submit"]').should('not.be.disabled')
    cy.wait(3000)
    cy.xpath('//*[@id="submit"]').should('have.text', 'Submit')
    cy.wait(3000)
    cy.xpath('//*[@id="submit"]').click()
    cy.xpath(3000)

    //Valid message assertion
    cy.xpath('//*[@id="loop-container"]/div/article/div[1]/h1').should('be.visible')
    cy.wait(3000)
    cy.xpath('//*[@id="loop-container"]/div/article/div[1]/h1').contains('Logged In Successfully')
    cy.wait(3000)
    cy.xpath('//*[@id="loop-container"]/div/article/div[2]/p[1]/strong').should('be.visible')
    cy.wait(3000)
    cy.xpath('//*[@id="loop-container"]/div/article/div[2]/p[1]/strong').contains('Congratulations student. You successfully logged in!')
    cy.wait(3000)
    cy.xpath('//*[@id="loop-container"]/div/article/div[2]/div/div/div/a').should('be.visible')
    cy.wait(3000)
    cy.xpath('//*[@id="loop-container"]/div/article/div[2]/div/div/div/a').should('not.be.disabled')
    cy.wait(3000)
    cy.xpath('//*[@id="loop-container"]/div/article/div[2]/div/div/div/a').should('have.text', 'Log out')
    cy.wait(3000)
    cy.xpath('//*[@id="loop-container"]/div/article/div[2]/div/div/div/a').click()
    cy.xpath(3000)
  })
  
  it('Validates Error Message Using Advanced Assertions', () => {

    //Enter incorrect username
    cy.xpath('//*[@id="username"]').clear().type('wrongUser')
    cy.wait(3000)
    cy.xpath('//*[@id="password"]').clear().type('wrongPass')
    cy.wait(3000)
    cy.xpath('//*[@id="submit"]').click()
    cy.wait(3000)

    //Assert error message
    cy.xpath('//*[@id="error"]').should('be.visible')
    cy.wait(3000)
    cy.xpath('//*[@id="error"]').should('contain.text', 'Your username is invalid!')
    cy.wait(3000)
    cy.xpath('//*[@id="error"]').should('have.css', 'color', 'rgb(255, 255, 255)'); // red color
  })
})
