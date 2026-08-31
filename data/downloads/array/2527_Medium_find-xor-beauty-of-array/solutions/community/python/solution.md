# Python | No Magic

**Author:** nika-skybytska
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3015896/](https://leetcode.com/problems/find-xor-beauty-of-array/solutions/3015896/)

---

# Intuition

I'll tell you what to do if you haven't noticed symmetries in the formula.

# Approach

First of all, contributions of different bits are independent, which is a common pattern in such questions. For each bit and each of the 8 possible combinations of bits in $$x, y, z$$, we can calculate how many triples $$(i, j, k)$$ yield this combination.

This technique is useful in formulas that are not that easy to simplify, the formulas that involve sums instead of xor-sums, and also in formulas that consider only ordered indices, like `i < j < k`.

Note: I used `math.floor(math.log2(max(nums))) + 1` to calculate the number of bits, but you may as well hardcode `30` in this problem.

Note: I used `itertools.product((0, 1), repeat=3)` to generate all 8 combinations `(0, 0, 0), (0, 0, 1), (0, 1, 0), ...` because I don't want to write three nested loops, but you can say `for x in (0, 1): for y in (0, 1): for z in (0, 1):`.

# Complexity

- Time complexity: $$O(n \\log \\max)$$.

- Space complexity: $$O(n)$$.

# Code

[Submission link](https://leetcode.com/problems/find-xor-beauty-of-array/submissions/873943705/)

```python
import collections
import itertools
import math


class Solution:
    def xorBeauty(self, nums: list[int]) -> int:
        beauty = 0

        for bit in range(math.floor(math.log2(max(nums))) + 1):
            cnt = collections.Counter((num >> bit) & 1 for num in nums)

            for i, j, k in itertools.product((0, 1), repeat=3):
                if (cnt[i] * cnt[j] * cnt[k]) & 1:
                    beauty ^= ((i | j) & k) << bit

        return beauty
```

