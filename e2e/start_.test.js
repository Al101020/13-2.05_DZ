import puppeteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('Page start', () => {
  let browser;
  let page;

  beforeEach(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true,
    });

    page = await browser.newPage(); // открыли браузер и новую вкладку
  });

  test('test', async () => {
    await page.goto('http://localhost:9000/'); // проверили открывается ли путь

    // await page.waitFor('body'); // утарел метод - Метод waitFor недействующий
    await page.waitForSelector('body'); // проверили есть ли тег "body"

    const popovers = await page.$('.popovers');
    const btn = await popovers.$('.btnPopovers');

    await btn.click(); //  клик на кнопке
    await page.waitForSelector('.messagePopovers'); // проверили есть ли тег с классом "messagePopovers"
  });

  afterAll(async () => {
    await browser.close(); // закрыли браузер
  });
});
