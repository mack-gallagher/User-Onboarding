describe("Sanity check", function () {
    it('Checks that true equals true', function () {
      expect(true).to.equal(true);
  })
})

describe('Name field', function () {
    it('Checks that first and last name fields fill with given text', function () {

      cy.visit('localhost:3000');
      
      cy.get('[name=first_name]').type('Mack');
      cy.get('[name=first_name]').should('have.value','Mack');

      cy.get('[name=last_name]').type('Gallagher');
      cy.get('[name=last_name]').should('have.value','Gallagher');
 
  })
})

describe('Email field', function () {
    it('Checks that the email field fills with correct text', function () {
      
      cy.visit('localhost:3000');

      cy.get('[name=email]').type('magallagher00@gmail.com');
      cy.get('[name=email]').should('have.value','magallagher00@gmail.com');

  })
})

describe('Password field', function () {
    it('Checks that the password field fills with correct text', function () {
      
      cy.visit('localhost:3000');

      cy.get('[name=password]').type('Tr0pical_Tw3st');
      cy.get('[name=password]').should('have.value','Tr0pical_Tw3st');

  })
})

describe('Terms of service box', function () {
    it('Checks that the user can check the terms of service box', function () {
      
      cy.visit('localhost:3000');

      cy.get('[name=tos]').click();
      cy.get('[name=tos]').should('be.checked');


  })
})

describe('Form submission', function () {
    it('Checks that the user can submit the form', function () {
      
      cy.visit('localhost:3000');

      cy.get('[name=first_name]').type('Mack');
      cy.get('[name=last_name]').type('Gallagher');
      cy.get('[name=email]').type('magallagher00@gmail.com');
      cy.get('[name=password]').type('Tr0pical_Tw3st');
      cy.get('[name=tos]').click();
      
      cy.get('[type=submit]').click();

      cy.get('[class=users-display]').should('not.be.empty');
      
  })
})

describe('Error on required field left blank', function () {
    it('Checks that blank field yields correct error', function () {
      
      cy.visit('localhost:3000');

      cy.get('[name=first_name]').type('a').type('{backspace}');
      cy.get('[name=last_name]').click();
      
      cy.get('[class=errors]').contains('You must enter a first name.'); 
  })
})

