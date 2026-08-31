# awesome binary search problem with math

**Author:** Ayushman_123
**Votes:** 3
**Link:** [https://leetcode.com/problems/nth-magical-number/solutions/1622295/](https://leetcode.com/problems/nth-magical-number/solutions/1622295/)

---

for any query please comment below, here is simple approach for this problem and that lcm(gcd) is taken because if number is devided by both a and b then we will have to count it once so it removes all the repeated numbers .

```
class Solution:
    def nthMagicalNumber(self, n: int, a: int, b: int) -> int:
        lo=2
        hi=10**100
        while(lo<=hi):
            mid=(lo+hi)//2
            if mid//a + mid//b - mid//((a*b)//math.gcd(a,b))>=n:
                res=mid
                hi=mid-1
            else:
                lo=mid+1
        return res%(10**9+7)