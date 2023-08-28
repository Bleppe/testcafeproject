import { t } from 'testcafe';
import XPathSelector from './xpath-selector';
import { Selector } from 'testcafe';
const startValue = '#savingsCalc-start-value';
const monthlyTransfer = '#savingsCalc-monthly-transfer';
const savingYears = '#savingsCalc-saving-years';
export async function clearAndInputText(element, keysToSend) {
    await t
    .selectText(element)
    .pressKey('delete')
    .pressKey('delete')
    .pressKey('delete')
    .typeText(element, keysToSend);
};
export async function fillSavingsForm(data){
    await t.click(XPathSelector('//*[@data-test-id="CookieConsent__acceptButton"]'));
        await clearAndInputText(startValue, data.startValue);
        await clearAndInputText(monthlyTransfer, data.monthlyTransfer);
        await clearAndInputText(savingYears, data.savingYears);
        await t.click(Selector('span').withText(`${data.interestRate}%`));
};