# Python3 || 7 lines, sort and iterate  || T/S: 97% / 63%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/sum-of-subsequence-widths/solutions/5817861/](https://leetcode.com/problems/sum-of-subsequence-widths/solutions/5817861/)

---

We use 2^*i* for 0 <= *i* < *n* in order, so rather than compute each power of 2 independently, it is more efficient to incrementally multiply an integer variable by 2 as we use them.

```python3 []
class Solution:
    def sumSubseqWidths(self, nums: List[int], mod = 1_000_000_007) -> int:
       
        nums.sort()
        n, ans, factor = len(nums), 0, 1
       
        for i in range(n):
        
            ans+= (nums[i] - nums[~i]) * factor
            factor*= 2
            factor%= mod
           
        return ans % mod
```
[https://leetcode.com/problems/sum-of-subsequence-widths/submissions/1397860940/](https://leetcode.com/problems/sum-of-subsequence-widths/submissions/1397860940/)

I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(1), in which *N* ~ `len(nums)`.
