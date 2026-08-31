# Python 3 | Clean 14 lines, Brute Force (<80ms), Permutation, Math | Explanation

**Author:** idontknoooo
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/1781691/](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/solutions/1781691/)

---

### Explanation
- Try all possible permutations of `ones`, where `ones` is a list of `(i, j) when grid[i][j] == 1`
- It's just a question about implementation, since brute force will make it work. I guess the blocker is:
	- Finding a way to generate permutation of `ones` 
		- If you don't know `itertools.permutations`, you can also use backtracking to write one simulate the same process
	- Figuring out the upper bound of the length of each permutation (a little bit Math)
		- If there is a `3*5` matrix with 1 at each cell, then the minimum operation is `3`. (i.e. You can walk over each row to remove `1`s)
		- If there is a `3*5` matrix with only `1` at `(0, 0)`, then the minimum is obvious 1, which is the total count number of `1`s
		- thus, we are getting `ans = min(m, n, one_cnt)`. See below code.
- Time: `O(10^5) ~= O(122850) = O(2730 * 3 * 15)`
- Space: `O(1)`, since max number of elements is 15.
### Implementation
```
class Solution:
    def removeOnes(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        ones = [(i, j) for i in range(m) for j in range(n) if grid[i][j]] # get indices for all ones, time: O(15)
        one_cnt = len(ones)                    
        ans = min(m, n, one_cnt)                                          # the answer will be bounded by the minimum between these 3
        for indices in itertools.permutations(ones, r=ans):               # Permutation: Pick 3 out of 15, time: O(2730) for 3*5 matrix
            cur, tmp = 0, set()
            for x, y in indices:                                          # Brute force, iterate permuted indices, time: O(3)
                for i, j in ones:                                         # iterate over `ones`: O(15)
                    if i == x or j == y:
                        tmp.add((i, j))
                cur += 1                                                  # count current step
                if len(tmp) == one_cnt: break
            ans = min(ans, cur)                                           # update minimum step
            if ans == 1: return 1                                         # optimization, the best solution for non-all-zero matrix 
        return ans
```
### Extra
- @jayalen86 has a very straight forward [backtracking solution](https://leetcode.com/problems/remove-all-ones-with-row-and-column-flips-ii/discuss/1776745/Python-Backtracking-w-set). I personally think it's a better solution than mine.