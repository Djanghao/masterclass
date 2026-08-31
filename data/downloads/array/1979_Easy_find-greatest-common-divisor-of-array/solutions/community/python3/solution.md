# 2 lines Python/Javascript (no built in gcd function)

**Author:** SmittyWerbenjagermanjensen
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/2580234/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/2580234/)

---

Python
```
class Solution:
    def findGCD(self, nums: List[int]) -> int:
        gcd = lambda a, b: a if b == 0 else gcd(b, a % b)
        return gcd(max(nums), min(nums))
```
Javascript
```
const findGCD = nums => {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    return gcd(Math.max(...nums), Math.min(...nums));
}