# Simple python two pointer solution

**Author:** jason_chent
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/5994809/](https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/solutions/5994809/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python []
class Solution(object):
    def minimumOperations(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        # two pointer, greedy, sum

        # when right is smaller, right - 1
        n = len(nums)
        left = 0
        right = n - 1
        count = 0
        while left < right:
            if nums[left] > nums[right]:
                nums[right - 1] += nums[right] 
                count += 1
                right -= 1
            elif nums[left] < nums[right]:
                nums[left + 1] += nums[left] 
                left += 1
                count += 1
            else:
                right -= 1
                left += 1
        print(nums)
        return count 
            
                

                

        
```