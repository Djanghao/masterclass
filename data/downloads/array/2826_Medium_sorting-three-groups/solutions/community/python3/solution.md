# Python 3   || 6 lines,  dp with simple vars   ||   T/S: 88% / 99%

**Author:** Spaulding_
**Votes:** 8
**Link:** [https://leetcode.com/problems/sorting-three-groups/solutions/3943130/](https://leetcode.com/problems/sorting-three-groups/solutions/3943130/)

---

Here's the plan:
    We use bottom-up with simple variables.
```
class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        
        nIsNot = lambda x: int(x != n)
        
        n = nums.pop(0)
        dp1, dp2, dp3 = nIsNot(1), nIsNot(2), nIsNot(3)

        for n in nums:
            dp1, dp2, dp3 = ( dp1                + nIsNot(1),
                              min(dp1, dp2)      + nIsNot(2),
                              min(dp1, dp2, dp3) + nIsNot(3) )

        return min(dp1, dp2, dp3)
```
[https://leetcode.com/problems/sorting-three-groups/submissions/1295896352/](https://leetcode.com/problems/sorting-three-groups/submissions/1295896352/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `len(nums)`.