# Python 3 || 5 lines, w/ explanation || T/S: 97%  /  60%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4209822/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4209822/)

---

Here's the plan:
1. We first deal with the edge case `indexDifference == valueDifference == 0`, for which any pair sufices, so we return `[0,0]`.

1. We determine all the index pairs that differ by at least`indexDifference`.

1. We iterate through these pairs, and we return the first pair the meets the second criterion.

1. If we finish the iteration without finding such a pair, we return `[-1,-1]`.
```
class Solution:
    def findIndices(self, nums: List[int], indexDifference: int,
                    valueDifference: int) -> List[int]:

        if indexDifference == valueDifference == 0: return [0,0]

        pairs = filter(lambda x: x[1]-x[0] >= indexDifference,
                        combinations(range(len(nums)),2))
             
        for i,j in pairs:
            if abs(nums[i] - nums[j]) >= valueDifference: return [i,j]

        return [-1,-1]
```
[https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/submissions/1272090600/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/submissions/1272090600/)


I could be wrong, but I think that time complexity is *O*(*N*^2) and space complexity is *O*(1), in which *N* ~ `len(nums)`.