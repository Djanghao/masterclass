# O(log5_n) solution, python.

**Author:** Insulator
**Votes:** 56
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/52510/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/52510/)

---

1. meet the number that can be dived by 5, the Trailing will have 1 more zero.

2 .meet the number that can be dived by 5*5, the Trailing will have 2 more zero.
..

..

..

and so on.


so we just find how many number can be dived by 5, can be dived by 5*5 ...  and sum up.


        def trailingZeroes(self, n):
            r = 0
            while n > 0:
                n /= 5
                r += n
            return r