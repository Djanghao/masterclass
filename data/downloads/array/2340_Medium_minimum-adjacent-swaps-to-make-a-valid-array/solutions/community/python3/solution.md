# Python | Simple O(n) Greedy | Explanation

**Author:** idontknoooo
**Votes:** 14
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/2310869/](https://leetcode.com/problems/minimum-adjacent-swaps-to-make-a-valid-array/solutions/2310869/)

---

### Explanation
- When talking about swap, it's very likely to run into `Greedy` algorithm. In this case, we want to move the minimum to the leftmost side then find how many swaps need to move maximum to the rightmost side.
- See below comment for more explanation
### Implementation
```python
class Solution:
    def minimumSwaps(self, nums: List[int]) -> int:
        mi = min(nums)                                     # find minimum
        idx1 = nums.index(mi)                              # locate the first mi from the left side
        
        nums = [nums[idx1]] + nums[:idx1] + nums[idx1+1:]  # make the swaps & update `nums`
        
        mx = max(nums)                                     # find maximum 
        idx2 = nums[::-1].index(mx)                        # locate the first mx from the right side
        return idx1 + idx2                                 # return total swaps needed
```