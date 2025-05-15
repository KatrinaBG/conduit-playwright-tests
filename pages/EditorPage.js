// Exporting the EditorPage class following the Page Object Model pattern
exports.EditorPage = class EditorPage {
  constructor(page) {
    this.page = page;

    // Define locators for the article creation form fields
    this.titleInput = page.locator('input[placeholder="Article Title"]');
    this.descriptionInput = page.locator('input[placeholder="What\'s this article about?"]');
    this.bodyInput = page.locator('textarea[placeholder="Write your article (in markdown)"]');

    // Locator for the publish button
    this.publishButton = page.locator('button', { hasText: 'Publish Article' });
  }

  // Navigates to the article editor page
  async goto() {
    await this.page.goto('https://conduit.mate.academy/editor');
  }

  /**
   * Fills out the article creation form and publishes the article.
   *
   * @param {string} title - Title of the article
   * @param {string} description - Short description or subtitle of the article
   * @param {string} body - Main content of the article (supports markdown)
   */
  async createArticle(title, description, body) {
    await this.titleInput.fill(title);
    await this.descriptionInput.fill(description);
    await this.bodyInput.fill(body);

    // Click the publish button to submit the article
    await this.publishButton.click();
  }
};
