# Python | 5 lines of code

**Author:** yaroslavkhokhonov
**Votes:** 22
**Link:** [https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3202076/](https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/solutions/3202076/)

---

# Approach
For minimal value we always just replace first digit into zero:
`int(num.replace(num[0], "0")`.

For maximum value - find first non-9 digit and replace it into 9.


# Complexity
- Time complexity: $$O(1)$$ as we only interate over string with maximum 8 chars. 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def minMaxDifference(self, num: int) -> int:
        num = str(num)
        i = 0
        while num[i] == "9" and i < len(num)-1:
            i += 1

        return int(num.replace(num[i], "9")) - int(num.replace(num[0], "0"))
        
```