# Python3 100% time

**Author:** yanjunxie93
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-valid-subarrays/solutions/4077080/](https://leetcode.com/problems/number-of-valid-subarrays/solutions/4077080/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
(1) maintain a non decrease stack.
(2) After appending each element, the number of continuous subarray ending with that element equal to the length of the stack.
For example, given [1, 4, 2, 5, 3]:
The montonic stack is:
[1]
[1, 4]
[1, 2]
[1, 2, 5]
[1, 2, 3]
The number of subarray that ends with 3 is 3, and they are [1, (4,) 2,(5,) 3], [2, (5,) 3] and [3].
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
class Solution:
    def validSubarrays(self, nums: List[int]) -> int:
        stack = []
        res = 0
        for num in nums:
            while stack and num < stack[-1]:
                stack.pop()
            stack.append(num)
            res += len(stack)
        return res
```