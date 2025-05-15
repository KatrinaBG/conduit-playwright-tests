// Exporting the LoginPage class to follow the Page Object Model pattern
exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;

    // Define locators for the login form elements
    this.emailInput = page.locator('input[type="email"]');
    this.passwordInput = page.locator('input[type="password"]');
    this.signInButton = page.locator('button', { hasText: 'Sign in' });

    // Locator for the error message element displayed on failed login
    this.errorMessage = page.locator('.error-messages');
  }

  // Navigates to the login page
  async goto() {
    await this.page.goto('https://conduit.mate.academy/user/login');
  }

  /**
   * Logs in with the given credentials.
   * If a username is provided, it waits for the navbar to display the username
   * as confirmation that login was successful.
   *
   * @param {string} email - User's email
   * @param {string} password - User's password
   * @param {string} [username] - Optional username to verify login success
   */
  async login(email, password, username) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();

    // Wait for the user's name to appear in the navigation bar if username is provided
    if (username) {
      await this.page.waitForSelector(`a.nav-link >> text=${username}`);
    }
  }

  /**
   * Returns the text content of the error message element.
   * Useful for asserting negative login scenarios.
   *
   * @returns {Promise<string>} Error message text
   */
  async getErrorMessage() {
    return this.errorMessage.textContent();
  }
};
