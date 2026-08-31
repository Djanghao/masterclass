# Easy Python Solution(89.05%)

**Author:** Sneh17029
**Votes:** 16
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/1291694/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/1291694/)

---

Runtime: 64 ms, faster than 89.05% of Python3 online submissions for Remove All Adjacent Duplicates In String.
Memory Usage: 14.9 MB, less than 21.60% of Python3 online submissions for Remove All Adjacent Duplicates In String.
```
class Solution:
    def removeDuplicates(self, s: str) -> str:
        stack=[s[0]]
        for i in range(1,len(s)):
            if(stack and stack[-1]==s[i]):
                stack.pop()
            else:
                stack.append(s[i])
        return "".join(stack)