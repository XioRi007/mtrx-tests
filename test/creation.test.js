const expect = require('chai').expect;
const Mtrx = require('mtrx');

describe('creation', function() {
    it('should create 1x1 random(0 ~ 1) matrix when nothing passed', function() {
        const m = new Mtrx();
        expect(m.rows).to.equal(1);
        expect(m.cols).to.equal(1);
        expect(m[0][0]).to.be.within(0, 1);
    });
    it('should create 1x1 matrix when one number passed', function() {
        const m = new Mtrx(1);
        expect(m.rows).to.equal(1);
        expect(m.cols).to.equal(1);
        expect(m[0][0]).to.be.within(0, 1);
    });
    it('should create 2x2 matrix when two number passed', function() {
        const m = new Mtrx(2, 3);
        expect(m.rows).to.equal(2);
        expect(m.cols).to.equal(3);
        expect(m[0][0]).to.be.within(0, 1);
        expect(m[0][1]).to.be.within(0, 1);
        expect(m[0][2]).to.be.within(0, 1);
        expect(m[1][0]).to.be.within(0, 1);
    });
    it('should create diag matrix when one array passed', function() {
        const m = new Mtrx([1, 2, 3]);
        expect(m.rows).to.equal(3);
        expect(m.cols).to.equal(3);
        expect(m[0][0]).to.equal(1);
        expect(m[1][1]).to.equal(2);
        expect(m[2][2]).to.equal(3);
    });
    it('should create matrix from arrays when they are passed', function() {
        const m = new Mtrx([[1, 2], [3, 4]]);
        expect(m.rows).to.equal(2);
        expect(m.cols).to.equal(2);
        expect(m[0][0]).to.equal(1);
        expect(m[0][1]).to.equal(2);
        expect(m[1][0]).to.equal(3);
        expect(m[1][1]).to.equal(4);
    });
    it('should create matrix from function when it is passed', function() {
        const m = new Mtrx(2, 3, (i, j) => i + j);
        expect(m.rows).to.equal(2);
        expect(m.cols).to.equal(3);
        expect(m[0][0]).to.equal(0);
        expect(m[0][1]).to.equal(1);
        expect(m[0][2]).to.equal(2);
        expect(m[1][0]).to.equal(1);
        expect(m[1][1]).to.equal(2);
        expect(m[1][2]).to.equal(3);
    });
});
