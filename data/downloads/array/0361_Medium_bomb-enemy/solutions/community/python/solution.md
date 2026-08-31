# Short O(mn) Python

**Author:** StefanPochmann
**Votes:** 19
**Link:** [https://leetcode.com/problems/bomb-enemy/solutions/83466/](https://leetcode.com/problems/bomb-enemy/solutions/83466/)

---

Compute a matrix for row-wise hits and one for column-wise hits. Then find the maximum.

    def maxKilledEnemies(self, grid):
        def hits(grid):
            return [[h
                     for block in ''.join(row).split('W')
                     for h in [block.count('E')] * len(block) + [0]]
                    for row in grid]
        rowhits = hits(grid)
        colhits = zip(*hits(zip(*grid)))
        return max([rh + ch
                    for row in zip(grid, rowhits, colhits)
                    for cell, rh, ch in zip(*row)
                    if cell == '0'] or [0])