'use strict';

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
  });

  it('should include jumbotron with correct data', function() {
    element(by.model('name')).sendKeys("Bob Smith");
    element(by.model('city')).sendKeys("San Antonio");

    element(by.id('newPatientSubmitButton')).click();

    expect(element(by.binding('p.name')).getText()).
      toEqual('Name: Bob Smith');
    // expect(page.h1El.getText()).toBe('Ebola Patient App');
    // expect(page.imgEl.getAttribute('src')).toMatch(/assets\/images\/yeoman.png$/);
    // expect(page.imgEl.getAttribute('alt')).toBe('I\'m Yeoman');
  });
});
