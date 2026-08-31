# Amazingly simple Python solution

**Author:** theberlinbird
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/4812712/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-ii/solutions/4812712/)

---

```
class Solution:
    def checkStrings(self, s1: str, s2: str) -> bool:
         
        if sorted(s1[ 0 : : 2 ]) == sorted(s2[ 0 : : 2 ]) and sorted(s1[ 1 : : 2 ]) == sorted(s2[ 1 : : 2 ]):
            return True
        return False