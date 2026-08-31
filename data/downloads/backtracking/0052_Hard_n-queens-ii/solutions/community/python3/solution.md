# ✅ Python Solution with Explanation

**Author:** constantine786
**Votes:** 26
**Link:** [https://leetcode.com/problems/n-queens-ii/solutions/2111513/](https://leetcode.com/problems/n-queens-ii/solutions/2111513/)

---

This problem is an extension on the yesterday's daily challenge problem [N-Queens](https://leetcode.com/problems/n-queens/discuss/2107719/python-solution-with-explanation). Please refer the link to understand how **N-Queens** is implemented. 


The below code is just a slight modification on yesterday's [solution](https://leetcode.com/problems/n-queens/discuss/2107719/python-solution-with-explanation) that I had posted. In this, instead of returning the list of valid solutions, I am returning the count of number of valid solutions.

```
class Solution:
    def totalNQueens(self, n: int) -> int:
        state=[['.'] * n for _ in range(n)]
		
		# for tracking the columns which already have a queen
        visited_cols=set()
		
		# This will hold the difference of row and col
        # This is required to identify diagonals
        # specifically for diagonals with increasing row and increasing col pattern
        # example: square (1,0) = 1-0 = 1
        # squares in same diagonals will have same difference
        # example: squares (0,0) and (8,8) are in the same diagonal
        # as both have same difference which is `0`
        visited_diagonals=set()
		
		 # This will hold the sum of row and col
        # This is required to identify antidiagonals.
        # specifically for diagonals with increasing row and decreasing col pattern
        # the squares in same diagonal won't have the same difference.
        # example: square (1,0) = 1-0 = 1
        # squares in same diagonals will have same difference
        # example: squares (0,7) and (1,6) are in the same diagonal
        # as both have same sum which is `7`
        visited_antidiagonals=set()
        
        res=set()
        def backtrack(r):
            if r==n:
                res.add(map('#'.join, map(''.join, state))) # add a valid solution
                return
                        
            for c in range(n):
			 # If the current square doesn't have another queen in same column and diagonal.
                if not(c in visited_cols or (r-c) in visited_diagonals or (r+c) in visited_antidiagonals):
                    visited_cols.add(c)
                    visited_diagonals.add(r-c)
                    visited_antidiagonals.add(r+c)
                    state[r][c]='Q'
                    backtrack(r+1)
                    
					# reset the exploration path for backtracking
                    visited_cols.remove(c)
                    visited_diagonals.remove(r-c)
                    visited_antidiagonals.remove(r+c)
                    state[r][c]='.'
                        
        backtrack(0)
        return len(res)

```

But sometimes while building a solution for a problem that is an extension or similar to another problem, we might end up with similar solution with slight change. This is what I did in my above approach. We were already tracking valid solutions in [N-Queens](https://leetcode.com/problems/n-queens/discuss/2107719/python-solution-with-explanation). So instead of returning the list of valid solutions, I am returning count of the number of solutions in the list.

If you observe the exploration path that solution tree takes, you would notice that it starts at a different row each time. Each path it takes is unique. So instead of tracking the valid solutions. We can just track the count of valid solutions. Whenever we hit the required number of queens, we just add that path to overall tally.

```
class Solution:
    def totalNQueens(self, n: int) -> int:                
        visited_cols=set()
        visited_diagonals=set()
        visited_antidiagonals=set()
        
        res=set()
        def backtrack(r):
            if r==n:  # valid solution state   
                return 1
                        
            cnt=0
            for c in range(n):
                if not(c in visited_cols or (r-c) in visited_diagonals or (r+c) in visited_antidiagonals):
                    visited_cols.add(c)
                    visited_diagonals.add(r-c)
                    visited_antidiagonals.add(r+c)                    
                    cnt+=backtrack(r+1) # count the overall tally from this current state
                    
                    visited_cols.remove(c)
                    visited_diagonals.remove(r-c)
                    visited_antidiagonals.remove(r+c)                    
            
            return cnt
        
        return backtrack(0)

```

**Time - O(N!)** - In the solution tree, number of valid exploration paths from a node reduces by 2 at each level. In first level, we have `N` columns options to place the queen i.e `N` paths from the root node. In the next level, we have max `N-2` options available because we can't place the queen in same column and same diagonal as previous queen. In the next level, it will be `N-4` because of two columns and two diagonals occupied by previous two queens. This will continue and give us a `O(N!)`Time. (Let me know if you think otherwise :) )

**Space - O(N^2)** - recursive call stack to explore all possible solutions

---

***Please upvote if you find it useful***