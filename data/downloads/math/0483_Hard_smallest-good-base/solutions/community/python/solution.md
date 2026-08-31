# 483: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 6
**Link:** [https://leetcode.com/problems/smallest-good-base/solutions/3282829/](https://leetcode.com/problems/smallest-good-base/solutions/3282829/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Convert input string n to integer num.
2. Calculate the maximum possible length of a good base for num using math.floor(math.log(num, 2)) + 1. This value represents the maximum possible number of digits in a good base representation of num.
3. Loop through all possible good base lengths k in decreasing order from max_len down to 2.
4. For each k, set the search range for the base m to be between 2 and num - 1.
5. Use binary search to find the smallest good base m for the current k.
6. Calculate s, the sum of k 1's in base m.
7. If s is equal to num, return m as a string.
8. If s is less than num, update the left bound of the search range to mid + 1.
9. If s is greater than num, update the right bound of the search range to mid - 1.
10. If no good base is found for any k, return num - 1 as a string. This is because num - 1 is always a good base for any num.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def smallestGoodBase(self, n: str) -> str:
        num = int(n)
        max_len = math.floor(math.log(num, 2)) + 1
        
        # Search for the smallest possible base m
        for k in range(max_len, 1, -1):
            left, right = 2, num - 1
            
            # Solve for m using binary search
            while left <= right:
                mid = (left + right) // 2
                s = 0
                for i in range(k):
                    s = s * mid + 1
                
                if s == num:
                    return str(mid)
                
                elif s < num:
                    left = mid + 1
                
                else:
                    right = mid - 1
        
        return str(num - 1)

```