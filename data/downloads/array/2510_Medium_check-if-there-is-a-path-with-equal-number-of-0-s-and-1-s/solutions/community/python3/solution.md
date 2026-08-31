# Python | O(nm) Min-Max w/ Proof

**Author:** nika-skybytska
**Votes:** 39
**Link:** [https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/2936391/](https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/solutions/2936391/)

---

# Intuition

There exists a discretely continuous transformation between any pair of paths. Namely, given two paths $$p_1$$ and $$p_2$$ with sums $$s_1 < s_2$$ respectively, there exists a path $$p$$ with sum $$s$$ for every $$s_1 < s < s_2$$.

# Approach

If you choose to believe the above lemma, then the solution is simple: use dynamic programming to compute minimum and maximum possible path sum, then check if the target sum of $${n + m - 1} \\over 2$$ is between them.

To prove the lemma, consider the following transformation: from path ...,  $$(r, c)$$, $$(r, c + 1)$$, $$(r + 1, c + 1)$$, ... to path ..., $$(r, c)$$, $$(r + 1, c)$$, $$(r + 1, c + 1)$$, ... (or back). I call it "flipping a corner", since two consecutive moves in different directions resemble a corner.

Notice two facts: (i) the path sum changed by at most one (ii) it is possible to transform every path into every other path by repeatedly applying such operations. Consider some transformation from $$p_1$$ to $$p_2$$. By discrete continuity, it follows that all sums from $$s_1$$ to $$s_2$$ will occur at least once during the transformation.

If (ii) is not obvious, think how two paths may differ. That's rigth, there is some cell $$(r, c)$$ where one path continues to $$(r + 1, c)$$ and the other one continues to $$(r, c + 1)$$. Unfortunately, it is not guaranteed that they both continue to $$(r + 1, c + 1)$$.

Instead, follow one path until it inevitably reaches a corner, and flip this corner. You've decreased the area between the paths. Repeat the process until the area reaches zero, meaning that the paths became the same.

# Complexity

- Time complexity: $$O(nm)$$ to compute both matrices.

- Space complexity: $$O(nm)$$ to store both matrices.

# Code

```python
class Solution:
    def isThereAPath(self, grid: list[list[int]]) -> bool:
        rows, cols = len(grid), len(grid[0])

        if (rows + cols) % 2 == 0:
            return False

        min_ = [[0] * cols for _ in range(rows)]
        max_ = [[0] * cols for _ in range(rows)]

        min_[0][0] = max_[0][0] = grid[0][0]

        for row in range(1, rows):
            min_[row][0] = min_[row - 1][0] + grid[row][0]
            max_[row][0] = max_[row - 1][0] + grid[row][0]

        for col in range(1, cols):
            min_[0][col] = min_[0][col - 1] + grid[0][col]
            max_[0][col] = max_[0][col - 1] + grid[0][col]

        for row in range(1, rows):
            for col in range(1, cols):
                min_prev = min(min_[row - 1][col], min_[row][col - 1])
                min_[row][col] = min_prev + grid[row][col]

                max_prev = max(max_[row - 1][col], max_[row][col - 1])
                max_[row][col] = max_prev + grid[row][col]

        target = (rows + cols - 1) // 2
        return min_[rows - 1][cols - 1] <= target <= max_[rows - 1][cols - 1]
```

The same idea can be expressed easier with `functools.cache`, but I tried to present a code that is simple to understand for C++ and Java users too.