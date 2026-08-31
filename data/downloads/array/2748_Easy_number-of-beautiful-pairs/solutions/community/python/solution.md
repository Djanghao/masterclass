# [Python] straightforward

**Author:** pbelskiy
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3680682/](https://leetcode.com/problems/number-of-beautiful-pairs/solutions/3680682/)

---

```python
class Solution:
    def countBeautifulPairs(self, nums: List[int]) -> int:
        t = 0

        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if math.gcd(int(str(nums[i])[0]), int(str(nums[j])[-1])) == 1:
                    t += 1

        return t
```