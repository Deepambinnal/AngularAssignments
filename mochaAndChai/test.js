const assert = require('assert');
const { expect } = require('chai');
const app = require('./app');

describe('App', function() {
    it('app should return hello test', () => {
        const hello = app.hello();
        expect(hello).to.be.eq('hello test');
    });

    it('sort should give empty array error when length is 0', () => {
        const sort = app.sort([]);
        expect(sort).to.be.eq('empty array');
    });

    it('function sort should return sorted array', () => {
        const sort = app.sort([3,2,4,1]);
        expect(sort).to.eql([1, 2, 3, 4]);
    });

    it('should return single element when single element arrar is passed', () => {
        const sort = app.sort([1]);
        expect(sort).to.eql([1]);
    });

});