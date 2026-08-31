# python 3    ||    5 lines, brute force with iteration    ||    T/S: 91% / 80%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2655721/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/solutions/2655721/)

---

Here's the plan:
- We iterate across each non-boundary cell of `grid`. 
- At each such cell, we compute the sum of the hourglass centered at that cell.
- We use `ans` to keep track of the greatset sum encountered.

```
class Solution:
    def maxSum(self, grid: List[List[int]]) -> int:

        m, n, ans = len(grid)-1, len(grid[0])-1, 0

        for i, j in product(range(1, m), range(1,n)):

                sm = ( grid[i-1][j-1] + grid[i-1][j] + grid[i-1][j+1]
                                      + grid[i  ][j] + # <-- hourglass center
                       grid[i+1][j-1] + grid[i+1][j] + grid[i+1][j+1] )

                if sm > ans: ans = sm

        return ans
```
[https://leetcode.com/problems/maximum-sum-of-an-hourglass/submissions/1289211371/](https://leetcode.com/problems/maximum-sum-of-an-hourglass/submissions/1289211371/)

I could be wrong, but I think that time complexity is *O*(*N*) and space complexity is *O*(1), in which *N* ~ `m` * `n`.
