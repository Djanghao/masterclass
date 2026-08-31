# Python 1-line O(n) solution

**Author:** Blitxen
**Votes:** 8
**Link:** [https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4053853/](https://leetcode.com/problems/sum-of-values-at-indices-with-k-set-bits/solutions/4053853/)

---

```python
class Solution:
    def sumIndicesWithKSetBits(self, nums: List[int], k: int) -> int:
        return sum(x for i, x in enumerate(nums) if bin(i).count('1') == k)
```