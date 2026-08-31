# <Python3> O(1) - Discrete Formula - 100% faster - 1 LINE

**Author:** drknzz
**Votes:** 9
**Link:** [https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/1785049/](https://leetcode.com/problems/count-integers-with-even-digit-sum/solutions/1785049/)

---

### We sum the digits of num.

##### if the sum is **even** -> return num // 2
##### if the sum is **odd**  -> return (num - 1) // 2

```
class Solution:
    def countEven(self, num: int) -> int:
        return num // 2 if sum([int(k) for k in str(num)]) % 2 == 0 else (num - 1) // 2
```
		
		
##### Since 1 <= num <= 1000 we will sum at most **4 digits**, hence the solution is **O(1)**.