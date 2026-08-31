# Python || Easy Clean Solution.

**Author:** dilmurat-aliev
**Votes:** 5
**Link:** [https://leetcode.com/problems/confusing-number/solutions/3915464/](https://leetcode.com/problems/confusing-number/solutions/3915464/)

---

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def confusingNumber(self, n: int) -> bool:
        tmp = {'0': 0, '1': 1, '6': 9, '8': 8, '9': 6}
        res = 0

        for i in str(n)[::-1]:
            if tmp.get(i) is None:
                return False
            else:
                res = (res * 10) + tmp[i]
            
        return res != n
```
![catty.png](./images/0.png)
