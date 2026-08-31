# Python || Very ez Solution (with explanation)

**Author:** child70370636
**Votes:** 3
**Link:** [https://leetcode.com/problems/squirrel-simulation/solutions/4287429/](https://leetcode.com/problems/squirrel-simulation/solutions/4287429/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Except for the first time the squirrel must choose a nut to start collecting, and will only walk to the tree $$1$$ time, the other times of collecting will walk back and forth between the tree and the nut ($$2$$ times), so we only need to calculate the distance between all nuts and the tree, and then times 2, we call it <code>res</code>.

Next, we must know which nut the squirrel needs to collect first to save the most time, so let's define 2 variables :
<code>ds = The distance between squirrel's starting position and nut
</code><code>dt = The distance between tree and nut
</code>We need to find the distance where <code>ds</code> is the largest smaller than <code>dt</code>, we call it <code>maxDiff</code>.

The final answer would be <code>res - maxDiff</code>.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(1)$$

# Code
```
class Solution:
    def minDistance(self, height: int, width: int, tree: List[int], squirrel: List[int], nuts: List[List[int]]) -> int:
        res = 0
        maxDiff = -inf
        for y, x in nuts:
            dt = abs(y - tree[0]) + abs(x - tree[1])
            ds = abs(y - squirrel[0]) + abs(x - squirrel[1])
            maxDiff = max(maxDiff, dt - ds)
            res += dt * 2
        return res - maxDiff
```