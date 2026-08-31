# ✅ [Python] knapsack + sliding window

**Author:** iablokov
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4220566/](https://leetcode.com/problems/minimum-increment-operations-to-make-array-beautiful/solutions/4220566/)

---

We slide over the array using a 3-window and at each element of the window we make a decision whether to perform the operation or not. When the operation is performed, it is guaranteed that the prefix `nums[0:i]` is covered, thus, we can safely move to the position `i+1`.

The answer is the minimal accumulated score.

```python
class Solution:
    def minIncrementOperations(self, nums: List[int], k: int) -> int:
        
        @cache
        def dfs(i) -> int:
            if i >= len(nums)-2 : return 0
                        
            A = max(0, k - nums[i])   + dfs(i+1)
            B = max(0, k - nums[i+1]) + dfs(i+2) if i+1 < len(nums) else inf
            C = max(0, k - nums[i+2]) + dfs(i+3) if i+2 < len(nums) else inf
            
            return min(A, B, C)
        
        return dfs(0)
```