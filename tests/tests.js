(function(){
  'use strict';

  var myApp = require('../app/primelist');
  describe("Generate list of Prime Numbers", function() {

    it("should return [2, 3, 5, 7, 11, 13, 17, 19] for 20", function() {
      expect(myApp.getPrimes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });

    it("should return [2, 3, 5, 7] for 10", function() {
      expect(myApp.getPrimes(10)).toEqual([2, 3, 5, 7]);
    });

    it("should return [] for 0", function() {
      expect(myApp.getPrimes(0)).toEqual([]);
    });

    it("should return [] for 1", function() {
      expect(myApp.getPrimes(1)).toEqual([]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] for 100", function() {
      expect(myApp.getPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
    });

    it("should return [] for -15", function() {
      expect(myApp.getPrimes(-15)).toEqual([]);
    });

    it("should return [2] for 2", function() {
      expect(myApp.getPrimes(2)).toEqual([2]);
    });

    it("should return [2, 3] for 3", function() {
      expect(myApp.getPrimes(3)).toEqual([2, 3]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43] for 46", function() {
      expect(myApp.getPrimes(46)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43]);
    });

    it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199] for 200", function() {
      expect(myApp.getPrimes(200)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199]);
    });

  });

})();