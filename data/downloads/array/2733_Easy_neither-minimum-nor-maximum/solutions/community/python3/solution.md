# 🔥[Python 3] 2 linear approaches without sorting 🥷🏼

**Author:** yourick
**Votes:** 13
**Link:** [https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/3625049/](https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/3625049/)

---

### Straightforward approach:
```python3 []
class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        minVal, maxVal = min(nums), max(nums)
        for n in nums:
            if n != minVal and n != maxVal:
                return n
        return -1

```
### Approach similar to [414. Third Maximum Number](https://leetcode.com/problems/third-maximum-number/description/) but need to return any middle number:
```python3 []
class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        a = b = c = 0
        for n in nums:
            if n > a: a, b, c = n, a, b
            elif n > b: b, c = n, b
            elif n > c: c = n
            if a > b > c and c != 0:
                return b
        
        return -1
```