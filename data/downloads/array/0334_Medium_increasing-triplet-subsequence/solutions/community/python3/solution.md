# [Python] 2 solutions: Right So Far, One pass - O(1) Space - Clean & Concise

**Author:** hiepit
**Votes:** 187
**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solutions/270884/](https://leetcode.com/problems/increasing-triplet-subsequence/solutions/270884/)

---

**\u2714\uFE0F Solution 1: Build Max Right So Far and Max Left So Far**
- Let `maxRight[i]` denote the maximum number between `nums[i+1], nums[i+2],...nums[n-1]`.
```python
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        n = len(nums)
        maxRight = [0] * n  # maxRight[i] is the maximum element among nums[i+1...n-1]
        maxRight[-1] = nums[-1]
        for i in range(n-2, -1, -1):
            maxRight[i] = max(maxRight[i+1], nums[i+1])
            
        minLeft = nums[0]
        for i in range(1, n-1):
            if minLeft < nums[i] < maxRight[i]:
                return True
            minLeft = min(minLeft, nums[i])
        return False
```
Complexity:
- Time: `O(N)`, where `N <= 5*10^5` is length of `nums` array.
- Space: `O(N)`

---
**\u2714\uFE0F Solution 2: One pass**
- We keep 2 numbers `first` and `second` where `first < second`, and `first` number must be before `second` number.
- Iterate `num` in `nums`:
	- If `num <= first` then update the `first` as minimum as possible, by`first = num`
	- Else If `num <= second` then update `second` as minimum as possible (since now `first < num <= second`), by `second = num`
	- Else, now `first < second < num` then we found a valid **Increasing Triplet Subsequence**, return True.
- Otherwise, return False.
```python
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        first = second = math.inf
        for num in nums:
            if num <= first:
                first = num
            elif num <= second:  # Now first < num, if num <= second then try to make `second` as small as possible
                second = num
            else:  # Now first < second < num
                return True
        return False
```
Complexity: 
- Time: `O(N)`
- Space: `O(1)`

If you think this **post is useful**, I'm happy if you **give a vote**. Any **questions or discussions are welcome!** Thank a lot.