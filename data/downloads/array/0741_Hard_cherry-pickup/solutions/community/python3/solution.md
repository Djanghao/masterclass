# DP and DFS Solutions, With a Different and Hopefully Simpler Explanations, FT 100%!!

**Author:** BiggestChungus
**Votes:** 8
**Link:** [https://leetcode.com/problems/cherry-pickup/solutions/3811789/](https://leetcode.com/problems/cherry-pickup/solutions/3811789/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

I found this problem to be REALLY challenging. Even after reading some of the top solutions I was pretty confused. So to lead off, the solution is to use dynamic programming or DFS to solve for both paths at the same time.

The path we take on the way down changes the state of `grid` when we come back up, so when solving the problem we have to be careful to make sure the "up" path doesn't have any cherries we took on the way down. This is tricky.

Here's what I tried and thought of:
1. **brute force DFS + backtracking.** On the way down we make 2*N-2 moves to get from (0,0) to (N-1, N-1). N-1 of them are down moves, the others right. So there are O(2N-2 choose N-1) moves. This grows factorially in N (even worse than exponential!). 98 choose 49 is massive. So no.
2. **dynamic programming: first down, then up** There's a classic DP problem for one direction, just going down. It's among the first 100 LC problems. If greedy solutions work, then (1) you can get the best path going down, and (2) record that path. Then modify the grid to remove cherries in the best path. Then (3) do the classic DP solution in reverse and return the sum of the two solutions. **But this doesn't work: the greedy solution is not always the best solution.**
3. **dynamic programming: two paths.** Somehow do dynamic programming where we find both paths at the same time. This sounds hard, but it turns out to not be too bad.
4. **dfs + caching**: the same as (3), but we use DFS and a cache instead of filling out a dynamic programming array.

This solution shows (3) and (4).

# Approach
<!-- Describe your approach to solving the problem. -->

The answer to the solution doesn't change if we go down and up, versus if we just take two paths going down. This is because the number of cherries doesn't depend on the direction of the path - it just matters that the path goes over the cherry.

So we make make a DFS/DP solution with a recurrence relation. To get our two paths to (r1,c1) and (r2,c2), our options are
* path 1 moved down, path 2 moved down
* path 1 moved down, path 2 moved right
* path 1 moved right, path 2 moved down
* path 1 moved right, path 2 moved right

So `dfs(r1,c1,r2,c2)` depends on `dfs(r1-1,c1,r2-1,c2)`, etc. This is the `max(4 different options)` in the code.

As a kind of clever insight, we see that both paths move by exactly one square. So we know that each time we call `dfs` that the number of moves both paths have made is the same. This helps us in two ways
* instead of having four DP/DFS variables, we can get away with 3: let `k` be the number of moves made. Then `k == r1+c2 == r2+c2`. So we just need `k, r1, c2` and can figure out `c1` and `c2`. Now we have $O(N^3)$ DP/DFS states.
* since the paths have taken the same number of steps, we don't have to worry about path 1 visiting (r1, c1) after path 2 visited it. The reason is because (r1, c1) can only be visited on round r1+c1. So either (r1,c1) hasn't been visited yet, or both paths are at the same square for the first time.

So the solution uses these. There are some other checks we do as base cases:
* if any row or col is out of bounds, return -Inf
* if either grid cell has a thorn (-1), also return -Inf
* if this is move `k==0` and we're in bounds, then both paths are at 0,0 so we return the grid value there
* without loss of generality, if you look at two paths, one of them will be at least as far down as the other one. So we reduce the number of operations by only exploring cases where r1 >= r2, i.e. path 1 is farther down than the other. r1 + c1 == k so this is another way of saying that path 1 is at least as far left as the other

**Final notes:**
* it's generally easier to check for edge cases at the top of the `dfs` method. So when we recurse, we call all 4 options. Then the checks at the top of the recursive call figure out if there's a valid solution (result >= 0) or not (-Inf)
* `-Inf` is used to flag bad/impossible situations. We could use anything, but `-Inf` + anything is `-Inf`, and `-Inf` is less than anything finite so it simplifies the code. You can just use `max(...)` and `result +  ...`. So if any part of the solution involves an impossible state, then the result `-Inf` as well.

# Is DFS+Caching or Dynamic Programming Faster?

If you will visit almost all states, then dynamic programming is faster. DFS+Caching involves a map-like structure which is slower than list/array lookups, and a lot of stack frames are created. So lots of overhead. In addition, the DP version only needs $O(N^2)$ memory because we only need the best results from the prior step $k-1$. So there's less time and memory needed.

But in this case, a lot of the test cases have thorns, and those thorns often result in large regions of the grid not being able to reach the bottom right. DFS natually avoids calculating any of those possibilities. So in practice large numbers of (k,r1,r2) combinations are completely irrelevant and don't need to be computed.

In principle you could add this as an optimization to the dynamic programming solution, but it's a lot easier to just let DFS organically and naturally just not explore those solutions.

Empirically it turns out that DFS+caching solution is a LOT faster than DP.

# Complexity
- Time complexity: $$O(N^3)$$

In general we explore many combinations of (k,r1,r2) and they're all $O(N)$.

To be more detailed, at $k$ we're exploring a shell of radius $k$ steps (L1 norm) away from the bottom right. There are $O(k)$ locations for the first path in that shell, and another $O(k)$ locations of the second path. In general $k$ is $O(N)$. So at each shell there are $O(N^2)$ possibilities. Exploring them for the $O(N)$ steps back to (0,0) therefore involves $O(N^3)$ work.

- Space complexity: $$O(N^3)$$

We cache DFS solutions, so the memory is also $$O(N^3)$$.

# Code
```
class Solution:
    def cherryPickup(self, grid: List[List[int]]) -> int:

        # Some approaches:
        # (1) can do DFS + backtracking for both paths. Too many paths though. Could reduce with some followup DP, but the
        #     paths "interact" so you have to be careful
        # (2) can try dynamic programming where you build the first half of the down path, then have some optimal subproblem
        #     solution for the rest of down plus up. Not clear how you'd do that though
        # (3) down and then up can be thought of as having two different down paths. can probably write it as C[r][c1][c2] where c1 <= c2
        #      because we can go down and right, and once you go right you can't go back. so one path will be to the right of the other, and stay there
        #     will paths ever cross? unlikely. maybe not really relevant. we'll see below

        # so we can have the best solution where the paths go from (0, 0) to (r,c1) and (r,c2)
        # from (r, c1) and (r,c2), each path can move R steps to the right, then down

        # maybe better to think about the case in reverse: to get to (r,c1) and (r, c2)
        #   path 1 had to come from (r,c1-1) or (r-1,c1)
        #   path 2 had to come from (r,c2-1) or (r-1,c2)
        #
        # Let B[r][c1][c2] be the best solution for two paths from (0,0) to (r,c1) and (r,c2)
        # Then the four alternatives (2 per path) work out to
        #   B[r][c1][c2] = -1 if (r,c1) or (r,c2) are impassable terrain
        #                = max(B[r][c1-1][c2-1], ???) # uh-oh... what about when r for left != r for right??

        # probably need a fourth variable: the paths are at r1,c1 and r2,c2 after n moves.
        # they move in lockstep though so I don't think there are actually four variables
        # but let's for ahead with four vars and see if we can reduce to 3 later

        # for four variables we have B[r1][c1][r2][c2]
        #   at each step r1,c1 and r2,c2 we had to move down or left for both
        #   so
        #       -1       if either cell is -1 (thorn)
        #       best of  B[r1-1][c1][r2-1][c2]     # so r1+c1 == k == r2+c2, so c1=k-r1 and c2=k-r2. So same info is in some B[k][r1][r2]
        #                B[r1][c1-1][r2-1][c2]
        #                B[r1-1][c1][r2][c2-1]
        #                B[r1][c1-1][r2][c2-2]
        #                   PLUS grid[r1][c1] + grid[r2][c2] if they're different cells
        #                   PLUS grid[r1][c1] if they're the same cell
        #    B[k][..] depends only on B[k-1][..] so we now have an O(N^2) space and O(N^3) time solution!

        # are there more considerations, e.g. do we need to worry about retracing paths for the +1/+2?
        #   e.g. is it possible for r1,c1 that the other path travsed it in a previous step k' < k?
        #        for r1,c1, k = r1+c1. for path 2 to have already been there, it would have happened at k'=r1+c2 = k.
        #        So no, it's not possible.

        # I hypothesize further that wlog we'll never trace paths where path 1 is right of path 2 for a given row..
        # but this condition seems hard to enforce because we use a k,r1,r2-centric solution.

        # N = len(grid)
        # prev = [[0]*N for _ in range(N)]
        # curr = [[0]*N for _ in range(N)]
        # prev[0][0] = grid[0][0]

        # for k in range(1,2*N+1):
        #     #
        #     for r1 in range(max(k-N+1, 0), min(k+1,N)): # c1 >= 0 and c1 < N ====> k-r1 >= 0 and k-r1 < N ===> r1 <= k and r1 > k-N
        #         c1 = k-r1
        #         for r2 in range(max(k-N+1, 0), min(k+1,N)):
        #             c2 = k-r2

        #             # TODO: reorder checks for speed
        #             if grid[r1][c1] < 0 or grid[r2][c2] < 0:
        #                 curr[r1][r2] = -1 # illegal state
        #             else:
        #                 b = -1
        #                 # up to four source cells: UU, UL, LU, LL
        #                 if r1 > 0 and r2 > 0: # UU
        #                     b = prev[r1-1][r2-1]
        #                 if r1 > 0 and c2 > 0: # UL
        #                     b = max(b, prev[r1-1][r2])
        #                 if c1 > 0 and r2 > 0: # LU
        #                     b = max(b, prev[r1][r2-1])
        #                 if c1 > 0 and c2 > 0: # LL
        #                     b = max(b, prev[r1][r2])
                        
        #                 if b == -1:
        #                     curr[r1][r2] = -1
        #                 else:
        #                     if r1 == r2:
        #                         curr[r1][r2] = b + grid[r1][c1]
        #                     else:
        #                         curr[r1][r2] = b + grid[r1][c1] + grid[r2][c2]

        #     prev, curr = curr, prev

        # return max(prev[-1][-1], 0) # both paths at -1,-1. max with zero converts -1 to 0

        # FT about 40%
        # Fastest solutions use DFS + caching!!
        #    In retrospect, there are some signs that this would be the case:
        #       only part of the dp grid is filled out at a time
        #       we fill out DP grid for all cells, even those where there is no path to the solution
        # So we could find all such cells not reachable from (-1,-1) and ignore them in the DP array
        # Or we can organically avoid them by the nature of DFS

        # brute force DP: be at r1,c1,r2,c2 and take best of four earlier solutions
        # some improvements: at each step we back up by 1 step, both paths have taken the same number of steps
        # so reformulate as k,r1,r2
        # Furthermore, wlog we can say one path is at least as low as the other
        bad = float('-inf')

        @functools.cache
        def dfs(k: int, r1: int, r2: int):
            # print(r1, k-r1, r2, k-r2)

            if r1 < 0 or r2 < 0 or r1 > r2:
                return bad

            c1 = k-r1
            c2 = k-r2

            if c1 < 0 or c2 < 0:
                return bad

            if k == 0:
                return grid[0][0] # first step, r1 == .. == c2 == 0

            if grid[r1][c1] < 0 or grid[r2][c2] < 0:
                return bad

            prev = max(
                dfs(k-1, r1, r2),
                dfs(k-1, r1-1, r2),
                dfs(k-1, r1, r2-1),
                dfs(k-1, r1-1, r2-1)
            )

            if r1 == r2:
                return prev + grid[r1][c1]
            else:
                return prev + grid[r1][c1] + grid[r2][c2]

        N = len(grid)
        return max(dfs(2*N-2, N-1, N-1), 0)
```