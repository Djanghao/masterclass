# Python 3   ||   3 lines,  gcd   ||   T/S: 97% /  96%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/4599086/](https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/4599086/)

---

```
class Solution:
    def minimumArrayLength(self, nums: List[int]) -> int:
        
        gcd_ = gcd(*nums)
        
        ans = (nums.count(gcd_)+1)//2
        
        return ans if ans else 1
```
[https://leetcode.com/problems/minimize-length-of-array-using-operations/submissions/1151871976/](https://leetcode.com/problems/minimize-length-of-array-using-operations/submissions/1151871976/)



I could be wrong, but I think that time complexity is *O*(*N* log *N*) and space complexity is *O*(1), in which *N* ~ `len(nums)`.