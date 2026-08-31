# Python3    |||     8 lines, brute force, w/explanation    ||     T/S: 99% / 50%

**Author:** Spaulding_
**Votes:** 3
**Link:** [https://leetcode.com/problems/closest-fair-integer/solutions/2627813/](https://leetcode.com/problems/closest-fair-integer/solutions/2627813/)

---

```
class Solution:
    def closestFair(self, n: int) -> int:

        minNum = lambda x: int('1' + '0'*(x//2) + '1'*(x//2-1))
        isFair = lambda x: 2*sum(ord(ch)%2 for ch in str(x)) == len(str(x))

        l = len(str(n))
        if l % 2: return minNum(l+1)    # odd  digit count => go to next even minNum

        pow10 = int('1' + '0'*l)
        for i in range(n,pow10):        # even digit count => look for fair integer with l digits
            if isFair(i): return i      # if found, return the integer

        return minNum(l+2)              #if not, return the least minNum that's greater than n
```
[https://leetcode.com/problems/closest-fair-integer/submissions/1288512527/](https://leetcode.com/problems/closest-fair-integer/submissions/1288512527/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(log *N*), in which *N* ~ `nums`.