# AC JavaScript Code

**Author:** The_Islander
**Votes:** 55
**Link:** [https://leetcode.com/problems/divide-two-integers/solutions/13528/](https://leetcode.com/problems/divide-two-integers/solutions/13528/)

---

The algorithm is just the same as many other posts, double the divisor by shifting left 1 bit.

But I still got TLE 3 times, the trick is: JavaScript bitwise op is for signed 32-bit, so 

    while ((base << 1) <= dividend) {

doesn't work. Because "base" overflows.

    while (base <= (dividend >> 1)) {

works.

    /**
     * @param {number} dividend
     * @param {number} divisor
     * @return {number}
     */
    var divide = function(dividend, divisor) {
      if (divisor === 0) return 0;
      if (dividend === 0) return 0;
      if (dividend === -2147483648 && divisor === -1) return 2147483647;
    
      var isPositive = true;
      if (dividend > 0 !== divisor > 0) isPositive = false;
    
      divisor = Math.abs(divisor);
      dividend = Math.abs(dividend);
    
      var count = 1,
        result = 0,
        base = divisor;
    
      while (dividend >= divisor) {
        count = 1;
        base = divisor;
        while (base <= (dividend >> 1)) {
          base = base << 1;
          count = count << 1;
        }
        result += count;
        dividend -= base;
      }
    
      if (!isPositive) result = -result;
      return result;
    };