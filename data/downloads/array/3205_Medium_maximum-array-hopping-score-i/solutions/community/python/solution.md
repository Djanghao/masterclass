# Reverse Traversal, Pick Elements in Increasing Order

**Author:** iitjsagar
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-array-hopping-score-i/solutions/5743564/](https://leetcode.com/problems/maximum-array-hopping-score-i/solutions/5743564/)

---



# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python []
class Solution(object):
    def maxScore(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        
        n = len(nums)
        dest = n - 1
        res = 0

        for i in range(n-2,0,-1):
            if nums[dest] < nums[i]:
                res += nums[dest]*(dest-i)
                dest = i
        
        res += dest*nums[dest]

        return res

```