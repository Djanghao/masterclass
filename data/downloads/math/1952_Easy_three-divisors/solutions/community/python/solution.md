# Explained Python Solution using primes, O(1) | Faster than 99%

**Author:** the_sky_high
**Votes:** 7
**Link:** [https://leetcode.com/problems/three-divisors/solutions/1397244/](https://leetcode.com/problems/three-divisors/solutions/1397244/)

---

# Explained Python Solution using primes, O(1) | Faster than 99%

**Runtime: 24 ms, faster than 99% of Python3 online submissions for Three Divisors.
Memory Usage: 14.2 MB, less than 74% of Python3 online submissions for Three Divisors.**

**Original Program**
```
import math
class Solution:
    def isThree(self, n: int) -> bool:
        primes = {3:1, 5:1, 7:1, 11:1, 13:1, 17:1, 19:1, 23:1, 29:1, 31:1, 37:1, 41:1, 43:1, 47:1, 53:1, 59:1, 61:1, 67:1, 71:1, 73:1, 79:1, 83:1, 89:1, 97:1}
        if n == 4:
            return True
        else:
            a = math.sqrt(n)

            if primes.get(a,0):
                return True
            else:
                return False
```

## Explanation:
Every number `n` has **atleast** two divisors/factors, that are `1` and `n` (the number itself).

A Prime number `n` is a number which has **eactly** two factors, `1` and `n` (the number itself).

Therefore, a number `a` (`n*n`) which is a **square of a prime number** `n` will have three factors, `1` and `n` and `a` (`n*n`).

The above program uses this logic and checks if the square root of `n` (which is `a`) is in the dictionary or not.

_______________________________________________

**Updated Program for the same Approach**
As suggested by @NiklasPrograms in the comments.

**Runtime: 42 ms, faster than 70.97% of Python3 online submissions for Three Divisors.
Memory Usage: 13.8 MB, less than 55.18% of Python3 online submissions for Three Divisors.**

```
class Solution:
    def isThree(self, n: int) -> bool:
        primes = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97};
        
        return sqrt(n) in primes
```