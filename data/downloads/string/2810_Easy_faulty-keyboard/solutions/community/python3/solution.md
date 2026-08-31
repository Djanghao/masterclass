# 🔥🔥🔥Easy Python3 solution beats 100%🔥🔥🔥

**Author:** hakkiot
**Votes:** 19
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/3870149/](https://leetcode.com/problems/faulty-keyboard/solutions/3870149/)

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
    def finalString(self, s: str) -> str:
        while "i" in s:
            index=s.index("i")

            #first half and second half
            first=s[:index][::-1]
            second=s[index+1:]

            s="".join([first,second])
        return s
```