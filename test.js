var almostEqual = require('./')
var test = require('tape')
var almost = require('almost-equal')

test('whether two number arrays are almost equal', function(t) {
    var a = [41, 41.000053]
    var b = [41, 41.000054]
        
    t.equal(almostEqual(a, b), true, 'uses FLT_EPSILON by default')
    t.equal(almostEqual(a, b, almost.DBL_EPSILON), false, 'accepts different epsilon')

    t.equal(almostEqual([100], [100+1e-4], almost.FLT_EPSILON, almost.FLT_EPSILON), false)
    t.equal(almostEqual([100], [100+1e-14], almost.DBL_EPSILON, almost.DBL_EPSILON), true)
        
    t.equal(almostEqual(['foo', 1, 0.0025], ['foo', 1, 0.0026], 0.001), true, 'checks equality first')
    t.equal(almostEqual(['foo', 1, 0.0025], [null, 1, 0.0026]), false, 'checks equality first')

    t.equal(almostEqual([], []), true, 'empty arrays')
    t.equal(almostEqual(null, []), false, 'non-array types')
    t.equal(almostEqual([], null), false, 'non-array types')
    t.equal(almostEqual(), false, 'non-array types')
    t.equal(almostEqual([41, 42], [41]), false, 'array lengths')
    t.end()
})