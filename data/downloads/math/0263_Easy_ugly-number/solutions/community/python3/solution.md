# Solution in Python 3 (beats ~99%) (five lines)

**Author:** junaidmansuri
**Votes:** 20
**Link:** [https://leetcode.com/problems/ugly-number/solutions/336227/](https://leetcode.com/problems/ugly-number/solutions/336227/)

---

```
class Solution:
    def isUgly(self, num: int) -> bool:
        if num == 0: return False
        while num % 5 == 0: num /= 5
        while num % 3 == 0: num /= 3
        while num % 2 == 0: num /= 2
        return num == 1
		

- Junaid Mansuri