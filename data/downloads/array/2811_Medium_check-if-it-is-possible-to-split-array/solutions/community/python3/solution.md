# Python 3   ||   1 line,  w/ explanation   ||   T/S: 95% / 99%

**Author:** Spaulding_
**Votes:** 6
**Link:** [https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3872798/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/solutions/3872798/)

---

Here's the intuition:

- If `len(nums)` is either one or two, then the solution trivially is `True'.
- Otherwise, the strategy is to pare off subarrays of single elements from the head or tail of `nums`, one by one, of the list until we arrive at a remaining subarray with two elements.
- If a pair exists that has a sum at least `m`, then we pare to that subarray, and  return `True`. If no such pair exists, we return `False`.
```
class Solution:
    def canSplitArray(self, nums: List[int], m: int) -> bool:

        return len(nums) < 3 or max(map(sum, pairwise(nums))) >= m 
```
[https://leetcode.com/problems/check-if-it-is-possible-to-split-array/submissions/1013953547/](https://leetcode.com/problems/check-if-it-is-possible-to-split-array/submissions/1013953547/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.