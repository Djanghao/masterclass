# Segment tree with range update | O(n log n) time, O(n) space

**Author:** ianlini
**Votes:** 34
**Link:** [https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii/solutions/4219104/](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii/solutions/4219104/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->


Let $$f(x)$$ = the sum of the squares of distinct counts of all subarrays which end at `nums[x - 1]`
answer = $$f(1) + f(2) + ... + f(n)$$

Let $$g(i, x)$$ = the distinct counts of the subarray `nums[i:x]`
Let $$h(x)$$ = the maximum index $$j < x - 1$$ where `nums[j] == nums[x-1]`, or $$-1$$ if not found
We can observe that
- if $$0 <= i <= h(x)$$
  - $$g(i, x) = g(i, x - 1)$$
- if $$h(x) < i < x$$
  - $$g(i, x) = g(i, x - 1) + 1$$

Since $$(x + 1)^2 = x^2 + 2x + 1$$, to get $$f(x)$$, we can simply add the $$2x + 1$$ part in the range $$[h(x) + 1, x)$$ to $$f(x - 1)$$:
- $$f(x) = f(x - 1) + 2 * \\sum_{i=h(x)}^{x-1} g(i, x - 1) + x - (h(x) + 1)$$

# Approach

- To get $$h(x)$$ efficiently, we use a dict `last_idx_dict`.
- To get and update $$g(i, x)$$ efficiently, we use a segment tree `segment_tree` because
  - The segment tree can support range update so that we can do $$g(i, x) = g(i, x - 1) + 1$$ for all $$i$$ where $$h(x) < i < x$$ in $$O(log(n))$$ time. I use `lazy` for this.
  - The segment tree can support range query so that we can get the $$\\sum_{i=h(x)}^{x-1} g(i, x - 1)$$ in $$O(log(n))$$ time.
  - Both query and update should be finished in $$O(log(n))$$ time so that the overall time complexity can be $$O(n * log(n))$$.
  - For simplicity, we can combine query and update within the same function `SegmentTreeNode.query()` by adding `self.update(1)` and `self.val = self.left.val + self.right.val` to a regular query function.

# Complexity
- Time complexity: $$O(n * log(n))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3
MOD = 1_000_000_007


class SegmentTreeNode:
    def __init__(self, lo, hi) -> None:
        self.lo = lo
        self.hi = hi
        self.val = 0
        self.lazy = 0
        if lo + 1 < hi:
            mid = (lo + hi) // 2
            self.left = SegmentTreeNode(lo, mid)
            self.right = SegmentTreeNode(mid, hi)

    def update(self, val):
        self.lazy += val
        self.val += val * (self.hi - self.lo)

    def query(self, lo, hi):
        if self.lo >= lo and self.hi <= hi:
            res = self.val
            self.update(1)
            return res
        mid = (self.lo + self.hi) // 2
        res = 0
        self.left.update(self.lazy)
        self.right.update(self.lazy)
        self.lazy = 0
        if lo < mid:
            res += self.left.query(lo, hi)
        if hi > mid:
            res += self.right.query(lo, hi)
        self.val = self.left.val + self.right.val
        return res


class Solution:
    def sumCounts(self, nums: list[int]) -> int:
        last_idx_dict = {}
        segment_tree = SegmentTreeNode(0, len(nums))
        res = 0
        curr_res = 0
        for i, num in enumerate(nums):
            last_idx = last_idx_dict.get(num, -1) + 1
            curr_res = (
                curr_res + i - last_idx + 1 + 2 * segment_tree.query(last_idx, i + 1)
            ) % MOD
            res += curr_res
            last_idx_dict[num] = i
        return res % MOD
```