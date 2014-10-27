'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    // page = require('./main.po');
  });

  it('should create a new record and display it on the page', function() {
    element(by.model('name')).sendKeys('Bob Smith');
    element(by.model('city')).sendKeys('San Antonio');
    element(by.model('infectionDate')).sendKeys('10-24-2014');

    element(by.id('newPatientSubmitButton')).click();

    expect(element(by.binding('p.name')).getText()).
      toEqual('Bob Smith');
    expect(element(by.binding('p.city')).getText()).
      toEqual('San Antonio');
    expect(element(by.binding('p.infectionDate')).getText()).
      toEqual('Oct 24, 2014');
    // expect(page.h1El.getText()).toBe('Ebola Patient App');
    // expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
    // expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  });

  it('should search and find the record that was just created', function() {
    element(by.model('query')).sendKeys('Bob Smith');

    expect(element(by.css('.allPatients')).getText()).
      toEqual('Bob Smith San Antonio Oct 24, 2014 X');
  });

  it('should sort alphabetically by city', function() {
    element(by.model('name')).sendKeys('Adam Apple');
    element(by.model('city')).sendKeys('Austin');
    element(by.model('infectionDate')).sendKeys('10-26-2014');

    element(by.id('newPatientSubmitButton')).click();

    var ptor = protractor.getInstance();
    ptor.findElement(protractor.By.css('select option:nth-child(2)')).click();

    expect(element(by.css('.allPatients')).getText()).
      toEqual('Adam Apple Austin Oct 26, 2014 X');
  });
});
