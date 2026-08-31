# Python 3 lightning fast one line solution

**Author:** denisrasulev
**Votes:** 37
**Link:** [https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/468107/](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/solutions/468107/)

---

```
class Solution:
    def findNumbers(self, nums: List[int]) -> int:
        return len([x for x in nums if len(str(x)) % 2 == 0])
```