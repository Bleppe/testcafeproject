import {fillSavingsForm} from './helper.js'
import { Selector } from 'testcafe';
const dataSet = require('./data.json');

fixture('Testing savingscalculator')
    .page('https://www.handelsbanken.se/sv/privat/spara/sparkalkyl');

dataSet.forEach(data =>{
    test(`Testing ${data.testName}`, async t=>{
        await fillSavingsForm(data);
        await t.expect(Selector('span.shb-title-2').innerText).eql(data.expectedResult);
    });
});