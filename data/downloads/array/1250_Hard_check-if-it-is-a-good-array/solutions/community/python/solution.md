# [Python] Diophantine Equation

**Author:** Pony1999
**Votes:** 7
**Link:** [https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/1314149/](https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/1314149/)

---

This is a multivariate linear [Diophantine equation](https://en.wikipedia.org/wiki/Diophantine_equation) with 1 on the right hand side. It has solution if and only if the gcd of all the numbers in nums divides 1, which means it must be 1. See [this math stack exchange post](https://math.stackexchange.com/questions/145346/diophantine-equations-with-multiple-variables) for detailed proof.
```
class Solution:
    def isGoodArray(self, nums: List[int]) -> bool:
        return gcd(*nums) == 1
```