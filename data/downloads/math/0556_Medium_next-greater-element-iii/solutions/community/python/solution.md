# 556: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 14
**Link:** [https://leetcode.com/problems/next-greater-element-iii/solutions/3297104/](https://leetcode.com/problems/next-greater-element-iii/solutions/3297104/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Convert the input number n into a list of digits.
2. Traverse the list from right to left to find the first decreasing digit i-1.
3. If there is no such digit, the input number is already the largest possible permutation, so return -1.
4. Traverse the list again from right to left to find the smallest digit j greater than i-1.
5. Swap i-1 with j.
6. Reverse the sublist from i to the end of the list to obtain the smallest possible permutation greater than the original number.
7. If the resulting permutation is greater than 2^31 - 1, return -1. Otherwise, return the permutation as an integer.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def nextGreaterElement(self, n: int) -> int:
        nums = list(str(n))
        i = len(nums) - 1
        while i > 0 and nums[i-1] >= nums[i]:
            i -= 1
        if i == 0:
            return -1
        j = len(nums) - 1
        while j > i-1 and nums[j] <= nums[i-1]:
            j -= 1
        nums[i-1], nums[j] = nums[j], nums[i-1]
        nums[i:] = nums[i:][::-1]
        res = int(''.join(nums))
        return res if res < 2**31 else -1

```