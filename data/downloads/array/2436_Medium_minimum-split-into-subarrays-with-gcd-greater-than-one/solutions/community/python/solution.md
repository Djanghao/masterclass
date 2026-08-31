# [Python] 1 line O(n) solution

**Author:** NotTheSwimmer
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/2693290/](https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/solutions/2693290/)

---

```python
class Solution:
    def minimumSplits(self, nums: List[int]) -> int:
        return sum(x < 0 for x in accumulate(nums, lambda x, y: (gcd(x, y) - 1 or -y - 1) + 1)) + 1
```

To see how, first understand the solution here: https://leetcode.com/problems/minimum-split-into-subarrays-with-gcd-greater-than-one/discuss/2692670/Greedy-O(n)-C%2B%2B

Because the gcd of two integers is always nonnegative, we can use the sign to track whenever it has been reset.