# python3 Iterate and string splice

**Author:** mikadoyao
**Votes:** 1
**Link:** [https://leetcode.com/problems/perform-string-shifts/solutions/5394558/](https://leetcode.com/problems/perform-string-shifts/solutions/5394558/)

---

# Intuition
Find the starting point.
# Approach
Calculate the total shift, then return the shift result
Direction is for accumulate the shift number and direction.  
Start is to take the number of shift mod by the length of the string, this is the actual starting index of the return string.
# Complexity
- Time complexity:
O(n): we need to iterate through the shift list
- Space complexity:
O(1):
direction
# Code
```
class Solution:
    def stringShift(self, s: str, shift: List[List[int]]) -> str:
        direction = 0
        for face, num in shift:
            if face == 0:
                direction += num
            else:
                direction -= num

        start = direction % len(s)
        if start == 0:
            return s
        else:
            return s[start:]+s[:start]
```