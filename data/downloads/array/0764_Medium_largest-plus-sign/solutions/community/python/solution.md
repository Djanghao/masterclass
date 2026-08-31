# Python 3 | DP - Bomb Enemy | Explanations

**Author:** idontknoooo
**Votes:** 8
**Link:** [https://leetcode.com/problems/largest-plus-sign/solutions/833937/](https://leetcode.com/problems/largest-plus-sign/solutions/833937/)

---

Code is long, but trust me, they are super easy to understand.

### Intuition
- Brutal force will definitely fail given N can be up to 500 and brutal force is a `O(N^3)` solution; need to think of something else
- For a `+` sign, there are 4 directions, up/down/left/right
	- If we just check 1 direction in each iteration, and store the value somewhere, then we can reuse the value since it's a matrix (we can have previous/next row or column's values).
	- So we check 4 directions separately, then the time complexity is `O(N^2) * constant = O(N^2)`
- A `+` should have 4 directions same number of `1`s
	- meaning we need to take the minimum of 4 directions
- Finally, iterate over one more time to find the max

### Explanation
```
class Solution:
    def orderOfLargestPlusSign(self, N: int, mines: List[List[int]]) -> int:
        mat = [[1]*N for _ in range(N)]
        for x, y in mines: mat[x][y] = 0                   # create matrix with mine
            
        up = [[0]*N for _ in range(N)]                     # count 1s above mat[i][j] if mat[i][j] is 1
        for i in range(N):
            for j in range(N):
                if mat[i][j]: 
                    up[i][j] = 1
                    if i > 0: up[i][j] += up[i-1][j] 
                
        down = [[0]*N for _ in range(N)]                   # count 1s below mat[i][j] if mat[i][j] is 1
        for i in range(N-1, -1, -1):
            for j in range(N):
                if mat[i][j]: 
                    down[i][j] = 1
                    if i < N-1: down[i][j] += down[i+1][j] 
                    
        left = [[0]*N for _ in range(N)]                   # count 1s on the left side of mat[i][j] if mat[i][j] is 1
        for i in range(N):
            for j in range(N):
                if mat[i][j]:
                    left[i][j] = 1
                    if j > 0: left[i][j] += left[i][j-1]
                    
        right = [[0]*N for _ in range(N)]                  # count 1s on the right side of mat[i][j] if mat[i][j] is 1
        for i in range(N):
            for j in range(N-1, -1, -1):
                if mat[i][j]:
                    right[i][j] = 1
                    if j < N-1: right[i][j] += right[i][j+1]
         
		# find the largest + sign by using cached directions information
        return max(min([up[i][j], down[i][j], left[i][j], right[i][j]]) for i in range(N) for j in range(N))
```