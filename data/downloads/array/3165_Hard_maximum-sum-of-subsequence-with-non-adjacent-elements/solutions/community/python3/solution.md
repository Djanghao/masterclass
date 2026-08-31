# [Python 3] Segment tree

**Author:** huangshan01
**Votes:** 13
**Link:** [https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/solutions/5209174/](https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/solutions/5209174/)

---

# Intuition
The recipe comes from [https://codeforces.com/blog/entry/56681](https://codeforces.com/blog/entry/56681)

Essentially, each segment tree node [lo, hi] keeps 4 quantities that stand for 4 dp states
- lo and hi are selected in the sequence
- lo not selected, lo + 1 and hi selected
- lo selected, hi not selected, hi - 1 selected
- lo and hi not selected, lo + 1 and hi - 1 selected

Each query, we update a node's states from the states of its two children
- `l0h0A, l1h0A, l0h1A, l1h1A` are the 4 states of its left child,
- `l0h0B, l1h0B, l0h1B, l1h1B` are the 4 states of its right child,

then for then current node
- `state[lo and hi] = max(l0h1A + l1h0B, l0h0A + l1h0B, l0h1A + l0h0B)`
- `state[lo + 1 and hi] = max(l1h1A + l1h0B, l1h0A + l1h0B, l1h1A + l0h0B)`
- `state[lo and hi - 1] = max(l0h1A + l1h1B, l0h0A + l1h1B, l0h1A + l0h1B)`
- `state[lo + 1 and hi - 1] = max(l1h1A + l1h1B, l1h0A + l1h1B, l1h1A + l0h1B)`

Note that leaf node value will never be set negative since we can always select an empty sequence, and do not forget to mod the final answer.

# Code
```
class Solution:
    def maximumSumSubsequence(self, nums: List[int], queries: List[List[int]]) -> int:
        n = len(nums)
        tree = [[0] * 4 for _ in range(4 * n)]
        
        def build(tidx, lo, hi):
            if lo == hi:
                tree[tidx][0] = max(0, nums[lo])
            else:
                mid = (lo + hi) // 2
                build(2 * tidx + 1, lo, mid)
                build(2 * tidx + 2, mid + 1, hi)
                l0h0A, l1h0A, l0h1A, l1h1A = tree[2 * tidx + 1]
                l0h0B, l1h0B, l0h1B, l1h1B = tree[2 * tidx + 2]
                # lo to hi
                tree[tidx][0] = max(l0h1A + l1h0B, l0h0A + l1h0B, l0h1A + l0h0B)
                # lo + 1 to hi
                tree[tidx][1] = max(l1h1A + l1h0B, l1h0A + l1h0B, l1h1A + l0h0B)
                # lo to hi - 1
                tree[tidx][2] = max(l0h1A + l1h1B, l0h0A + l1h1B, l0h1A + l0h1B)
                # lo + 1 to hi - 1
                tree[tidx][3] = max(l1h1A + l1h1B, l1h0A + l1h1B, l1h1A + l0h1B)
        
        build(0, 0, n - 1)
        
        def update(tidx, lo, hi, i, val):
            if lo == hi:
                tree[tidx][0] = max(0, val)
            else:
                mid = (lo + hi) // 2
                if i > mid:
                    update(tidx * 2 + 2, mid + 1, hi, i, val)
                else:
                    update(tidx * 2 + 1, lo, mid, i, val)
                l0h0A, l1h0A, l0h1A, l1h1A = tree[2 * tidx + 1]
                l0h0B, l1h0B, l0h1B, l1h1B = tree[2 * tidx + 2]
                # lo to hi
                tree[tidx][0] = max(l0h1A + l1h0B, l0h0A + l1h0B, l0h1A + l0h0B)
                # lo + 1 to hi
                tree[tidx][1] = max(l1h1A + l1h0B, l1h0A + l1h0B, l1h1A + l0h0B)
                # lo to hi - 1
                tree[tidx][2] = max(l0h1A + l1h1B, l0h0A + l1h1B, l0h1A + l0h1B)
                # lo + 1 to hi - 1
                tree[tidx][3] = max(l1h1A + l1h1B, l1h0A + l1h1B, l1h1A + l0h1B)
        
        ans = 0
        for i, x in queries:
            update(0, 0, n - 1, i, x)
            ans += max(tree[0])
        return ans % 1_000_000_007
```

2n tree implementation, need to patch size of nums to be power of 2, otherwise, some left child may cover ranges to the right of its right counterpart.

```
class Solution:
    def maximumSumSubsequence(self, nums: List[int], queries: List[List[int]]) -> int:
        n = len(nums)
        m = 1 << (n.bit_length())
        nums += [0] * (m - n)
        n = m
        tree = [[0] * 4 for _ in range(2 * n + 1)]

        def update(i, x):
            j = i + n
            tree[j][0] = max(0, x)
            while j:
                j >>= 1
                l0h0A, l1h0A, l0h1A, l1h1A = tree[2 * j]
                l0h0B, l1h0B, l0h1B, l1h1B = tree[2 * j + 1]
                # lo to hi
                tree[j][0] = max(l0h1A + l1h0B, l0h0A + l1h0B, l0h1A + l0h0B)
                # lo + 1 to hi
                tree[j][1] = max(l1h1A + l1h0B, l1h0A + l1h0B, l1h1A + l0h0B)
                # lo to hi - 1
                tree[j][2] = max(l0h1A + l1h1B, l0h0A + l1h1B, l0h1A + l0h1B)
                # lo + 1 to hi - 1
                tree[j][3] = max(l1h1A + l1h1B, l1h0A + l1h1B, l1h1A + l0h1B)

        for i, x in enumerate(nums):
            update(i, x)

        ans = 0
        for i, x in queries:
            update(i, x)
            ans += max(tree[1])
        return ans % 1_000_000_007
```