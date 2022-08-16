context('Register', () => {
  before(() => {
    cy.visit('/register');
  });
  describe('field constraints', () => {
    it('should display an error when trying to submit the form without nothing filled', () => {
      cy.get('button').contains("s'inscrire").click();
      cy.get('body').should('contain', 'Ce champ est requis.');
    });
    it('should display appropriate errors about the pseudo field', () => {
      const pseudo = 'MyPseudo';
      const pseudoLengthError =
        'Le pseudo doit contenir au moins 3 caractères.';
      cy.get('#pseudo-input').type('12');
      cy.get('body').should('contain', pseudoLengthError);
      cy.get('#pseudo-input').clear().type(pseudo);
      cy.get('body').should('not.contain', pseudoLengthError);
    });
    it('should display appropriate errors about the email field', () => {
      const email = 'email@email.com';
      const emailError = "L'adresse email est invalide.";
      cy.get('#email-input').type('invalidEmail');
      cy.get('body').should('contain', emailError);
      cy.get('#email-input').clear().type(email);
      cy.get('body').should('not.contain', emailError);
    });
    it('should display appropriate errors about the password field', () => {
      const password = 'myTrv3Real_P4ssw0rd';
      const passwordError =
        'Le mot de passe doit contenir au moins 8 caractères.';
      cy.get('#password-input').type('123');
      cy.get('body').should('contain', passwordError);
      cy.get('#password-input').clear().type(password);
      cy.get('body').should('not.contain', passwordError);
    });
    it('should display appropriate errors about the password confirmation field', () => {
      const password = 'myTrv3Real_P4ssw0rd';
      const passwordConfirmationError =
        'Les mots de passe ne correspondent pas.';
      cy.get('#password-input').clear().type(password);
      cy.get('#password-confirmation-input').type('1');
      cy.get('body').should('contain', passwordConfirmationError);
      cy.get('#password-confirmation-input').clear().type(password);
      cy.get('body').should('not.contain', passwordConfirmationError);
    });
  });
});
