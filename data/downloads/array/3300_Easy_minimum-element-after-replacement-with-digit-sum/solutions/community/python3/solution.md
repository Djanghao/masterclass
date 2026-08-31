# Python3 || 2 lines, map  ||

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5844573/](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5844573/)

---

```python3 []
class Solution:
    def minElement(self, nums: List[int]) -> int:

        add_digits = lambda num: sum(int(x) for x in str(num))

        return min(map(add_digits, nums))
```

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ the total number of digits.