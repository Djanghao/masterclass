# Python EASY

**Author:** BraveBLC
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-total-operations/solutions/6046312/](https://leetcode.com/problems/minimum-total-operations/solutions/6046312/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Idea is that any element that isn't equal to the last element will need to change. Any time we change a number though by using an operation, all numbers before it will change. If it helps, scan the array from the right to think through this. You can do an operation to change a number (don't actually change the number though), and then it won't be changed again as the next prefix will be to the left of it.

The trick here is that because all numbers change if they lie in the same prefix, then any adjacent numbers with the same value won't need another operation to be equal. For example, in
[1,2,4,4,2]
op (-2) on prefix length 4 -> [-1,0,2,2,2] (corrected two nums at once)
op (+2) on prefix length 2 -> [1,2,2,2,2]
op (+1) on prefix length 1 -> [2,2,2,2,2]

notice how even though there were two 2's at the start, they weren't adjacent and they became different because we had to modify the original 4's. Therefore, only *adjacent* of the same number helps saves an operation

# Approach
<!-- Describe your approach to solving the problem. -->
Count how many numbers aren't equal to the number right before them

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        
        count = 0
        for i in range(1, len(nums)):
            if nums[i] != nums[i-1]:
                count += 1
        return count
```