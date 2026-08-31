# Python (Simple Sliding Window)

**Author:** rnotappl
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/3667162/](https://leetcode.com/problems/count-substrings-without-repeating-character/solutions/3667162/)

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
    def numberOfSpecialSubstrings(self, s):
        n, dict1, total, left = len(s), defaultdict(int), 0, 0

        for right in range(n):
            dict1[s[right]] += 1

            while dict1[s[right]] > 1:
                dict1[s[left]] -= 1
                left += 1

            total += right-left+1

        return total

        

            

```