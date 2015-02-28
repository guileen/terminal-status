/**
 * Standard tests
 */

'use strict';

describe('Object injector', function(){

    var empty = {};
    var full = {
        a: 1,
        b: "c"
    };
    var objectFull = {
        a: 1,
        b: "c"
    };
    var objectOnlyA = {
        a: 1
    };

    it('Takes an object, then inserts into an empty one', function(done){

        var injectee = _.clone(empty);
        var injecter = _.clone(full);
        injector(injectee, injecter);
        expect(injectee).to.eql(objectFull);
        done();

    });

    it('Takes an object, then inserts `a` to an empty one', function(done){

        var injectee = _.clone(empty);
        var injecter = _.clone(full);
        injector(injectee, injecter, ['a']);
        expect(injectee).to.eql(objectOnlyA);
        done();

    });

});
