# [Python3] freq table

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-single-divisor-triplets/solutions/2881199/](https://leetcode.com/problems/number-of-single-divisor-triplets/solutions/2881199/)

---


```
class Solution:
    def singleDivisorTriplet(self, nums: List[int]) -> int:
        ans = 0 
        freq = Counter(nums)
        for k0, v0 in freq.items(): 
            for k1, v1 in freq.items(): 
                for k2, v2 in freq.items(): 
                    sm = k0+k1+k2
                    if not sm % k0 and sm % k1 and sm % k2: 
                        if k1 == k2: ans += v0*v1*(v1-1)
                        else: ans += v0*v1*v2 
        return ans*3
```