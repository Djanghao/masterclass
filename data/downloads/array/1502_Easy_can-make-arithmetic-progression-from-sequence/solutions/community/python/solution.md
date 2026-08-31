# Python beats 100% memory, sorted() function

**Author:** vanigupta20024
**Votes:** 12
**Link:** [https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/924766/](https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/solutions/924766/)

---

```
class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -> bool:
        s = sorted(arr)
        diff = s[0] - s[1]
        for i in range(2, len(s)):
            if diff != s[i - 1] - s[i]:
                return False
        return True
```
For more such questions: https://github.com/vanigupta20024/Programming-Challenges