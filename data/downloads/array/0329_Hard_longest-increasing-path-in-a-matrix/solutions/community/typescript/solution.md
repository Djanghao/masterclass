# cache - easy to understand javascript / typescript solution with explanation comments

**Author:** Selithrarion
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/2054390/](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/2054390/)

---

upvote if it helps \uD83D\uDE43
Runtime: 147 ms
Memory Usage: 47.5 MB
```
function longestIncreasingPath(M) {
  // init variables
  // R for rows number
  // C for columns number
  // ans for answer
  // map for our cache. initial value \u2013 [[], [], [], [], [], ...]
  const R = M.length
  const C = M[0].length
  let ans = 0
  const map = new Array(R).fill(null).map(() => new Array(C))
  
  // for every cell call dfs function with current position
  // we just go through our matrix and trying to get maximum answer
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      ans = Math.max(ans, dfs(i, j))
    }
  }
  
  return ans
  
  
  function dfs(i, j) {
    // if we already have this cell in our map/cache - return it
    const curMapValue = map[i][j]
    if (curMapValue) return curMapValue
    
	// call dfs function with all possible directions
	// if we'll meet cell that we've already seen - return it (see prev comment)
	// simplified - (1) && (2) ? (3) : (4)
	// 1 - if in matrix range
	// 2 - and less than cur value
	// 3 - then call dfs in this direction
	// 4 - else return 0. we'll ignore it
    const v = M[i][j]
    const right = i < R-1 && M[i+1][j] < v ? dfs(i+1, j) : 0
    const left = i > 0 && M[i-1][j] < v ? dfs(i-1, j) : 0
    const bottom = j < C-1 && M[i][j+1] < v ? dfs(i, j+1) : 0
    const top = j > 0 && M[i][j-1] < v ? dfs(i, j-1) : 0
    
	// get max value around our cell and set it in our map/cache
	// and add 1 cuz we found next step of our path
    map[i][j] = 1 + Math.max(right, left, bottom, top)
    return map[i][j]
  }
};
  ```
