# [Python 3] Remove from left, right, both sides || beats 99% || 766ms 🥷🏼

**Author:** yourick
**Votes:** 6
**Link:** [https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/3845261/](https://leetcode.com/problems/removing-minimum-and-maximum-from-array/solutions/3845261/)

---

```python3 []
class Solution:
    def minimumDeletions(self, nums: List[int]) -> int:
        minp, maxp, minel, maxel, L = 0, 0, float('inf'), float('-inf'), len(nums)
        for i, n in enumerate(nums):
            if n > maxel:
                maxel = n
                maxp = i
            if n < minel:
                minel = n
                minp = i
        
        left, right = min(minp, maxp), max(minp, maxp)

        return min(right + 1, L - left, left + 1 + (L - right))
```
![Screenshot 2023-08-01 at 03.35.12.png](./images/0.png)
