# Conduit Playwright Tests

This repository contains automated tests for the Conduit app using [Playwright](https://playwright.dev/) and JavaScript.

## 📂 Project Structure
```
conduit-playwright-tests/
├── pages/ # Page Object classes (LoginPage, EditorPage)
├── tests/ # Test files
├── utils/ # Test data
├── playwright.config.js
└── README.md # You're here!
```
## 🚀 Getting Started

### 1. Clone the repository
git clone https://github.com/your-username/conduit-playwright-tests.git
cd conduit-playwright-tests

### 2. Install dependencies
npm install

### 3. Run all tests
npx playwright test

### 4. Run a single test file
npx playwright test tests/login.spec.js
npx playwright test tests/article.spec.js

### 5. Open HTML report
npx playwright show-report

## 🧪 Test Automation Patterns Used

* Page Object Model (POM)
* Data-driven testing (via `utils/testData.js`)
* Separation of test logic from page behavior

## ✅ Test Cases

### Login

* ✅ Positive login with valid credentials
* ❌ Negative login with invalid credentials (error message check)

### Article Creation

* ✅ Create article with valid data
* ❌ Block article creation when fields are empty

## 📦 Tech Stack

* [Playwright](https://playwright.dev/)
* JavaScript
* Node.js

---

## 🧑‍💻 Author
Katarzyna Błaszko-Grądzik
