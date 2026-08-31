# Easy to understand JavaScript solution

**Author:** hieven
**Votes:** 59
**Link:** [https://leetcode.com/problems/sqrtx/solutions/25167/](https://leetcode.com/problems/sqrtx/solutions/25167/)

---

Just simple binary search.

Remember that the square root of each X must happen within [1, x/2 + 1]

So we can cut half at the first place.

      var mySqrt = function(x) {
      var left = 1;
      var right = Math.floor(x / 2) + 1;
      var mid;
    
      while (left <= right) {
        mid = Math.floor((left + right) / 2);
    
        if (mid * mid > x) {
          right = mid - 1;
        } else if (mid * mid < x) {
          left = mid + 1;
        } else {
          return mid;
        }
      }
    
      return right;
    };

The tricky point is that we will return `right` if there is no square root found.

The reason is the square root is between [n-1, n] and we can know that when `while` is broken `right` must be n-1