# You can specify steps when slicing a list :)

**Author:** kunalgeed15
**Votes:** 7
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/4160441/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/4160441/)

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
```
class Solution:
    def sortEvenOdd(self, nums: List[int]) -> List[int]:
       nums[0::2]=sorted(nums[0::2])
       nums[1::2]=sorted(nums[1::2],reverse=True)
       return nums


        
```