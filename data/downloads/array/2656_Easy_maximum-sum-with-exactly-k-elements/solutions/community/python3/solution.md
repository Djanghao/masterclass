# Python 3   ||   2 lines,  w/ explanation  ||   T/S: 74% / 81%

**Author:** Spaulding_
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/3467607/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/3467607/)

---

Here's the intuition:
- The problem is equivalent to evaluating the sum of `n,n+1, ..., n+k-1`, where`n = max(nums)`. 

- Because this sequence is arithmetic, the sum is equal to`k*(2*n+k-1)//2`.

```
class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:
        
        n = max(nums)

        return k*(2*n+k-1)//2
```
[https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/submissions/941730954/](http://)



I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(nums)`.



