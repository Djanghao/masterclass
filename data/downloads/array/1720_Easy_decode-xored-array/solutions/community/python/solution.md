# Python - 1 Liner (List Comprehension with Assignment Expresion)

**Author:** leeteatsleep
**Votes:** 18
**Link:** [https://leetcode.com/problems/decode-xored-array/solutions/1075067/](https://leetcode.com/problems/decode-xored-array/solutions/1075067/)

---

```
class Solution:
    def decode(self, encoded: List[int], first: int) -> List[int]:
        return [first] + [first:= first ^ x for x in encoded]
```