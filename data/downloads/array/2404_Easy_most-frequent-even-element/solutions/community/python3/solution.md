# Python 3   ||  2 lines, Counter  ||   T/S: 86% / 58%

**Author:** Spaulding_
**Votes:** 17
**Link:** [https://leetcode.com/problems/most-frequent-even-element/solutions/2581151/](https://leetcode.com/problems/most-frequent-even-element/solutions/2581151/)

---

```
class Solution:
    def mostFrequentEven(self, nums: List[int]) -> int:

        ctr = Counter(nums)

        return max([c for c in ctr if not c%2], key = lambda x:(ctr[x], -x), default = -1)
```

[https://leetcode.com/problems/most-frequent-even-element/submissions/1166869743/](https://leetcode.com/problems/most-frequent-even-element/submissions/1166869743/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(*N*), in which *N* ~ `len(nums)`.
