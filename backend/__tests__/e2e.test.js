const { Builder, By, until } = require('selenium-webdriver');

(async function e2e() {
    let driver = await new Builder().forBrowser('chrome').build();
    try {
        await driver.get('http://localhost:3000');
        await driver.findElement(By.id('login-button')).click();
        await driver.wait(until.urlContains('/dashboard'), 5000);
        console.log('Test E2E réussi !');
    } finally {
        await driver.quit();
    }
})();