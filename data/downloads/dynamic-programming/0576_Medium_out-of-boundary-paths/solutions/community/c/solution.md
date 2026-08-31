# ✅ Short & Easy Solution w/ Explanation | Optimization from Brute-Force

**Author:** archit91
**Votes:** 73
**Link:** [https://leetcode.com/problems/out-of-boundary-paths/solutions/1293835/](https://leetcode.com/problems/out-of-boundary-paths/solutions/1293835/)

---

\u274C ***Solution - I (Brute-Force)***

Let's start by trying out the brute-force way to solve the question. We need to find number of paths to get the ball out of grid's bound with at-most *`maxMoves`* number of moves. So, we will just try every possible move from current cell and return 1 whenever we go out-of-bounds. If all *`maxMoves`* are used up, return 1 if we are currently out, otherwise return 0. 

This process will be followed recursively for each cell and finally we will sum-up the values returned for each possible move from a cell.

```
const int mod = 1e9 + 7;
bool outOfBounds(int m, int n, int r, int c) {
	return r < 0 || r >= m || c < 0 || c >= n;
}
int findPaths(int m, int n, int maxMove, int r, int c) {
	bool isOut = outOfBounds(m, n, r, c);
	if(isOut || !maxMove) return isOut;          // reached out of grid or ran out of moves
	// try all moves from the current cell and add up all paths taking the ball out of bounds
	return (findPaths(m, n, maxMove-1, r + 1, c)  + 
			findPaths(m, n, maxMove-1, r - 1, c)  +    
			findPaths(m, n, maxMove-1, r, c + 1)  +    
			findPaths(m, n, maxMove-1, r, c - 1)) % mod;
}
```

***Time Complexity :*** **<code>O(4<sup>maxMove</sup>)</code>**
***Space Complexity :*** **`O(maxMove)`**

---

\u2714\uFE0F ***Solution - II (Dynamic Programming - Memoization)***

We can observe that we are repeating a lot of calculations over and over unnecessarily. We can avoid this re-calculations by storing a computed solution and re-using it rather than re-computing. There will always be same number of ways to reach out of bounds from cell `(i, j)` when we have *`maxMove`* remaining.

Thus, we can use **dynamic programming** to store the above-mentioned state. We use a `dp` matrix where *`dp[i][j][maxMove]`* will denote the number of ways to take the ball out-of-bounds from cell `(i,j)` with *`maxMove`* number of moves atmost. Everytime we calculate the result for a given cell with some number of moves remaining, we will store this state in our matrix and directly return this whenever required in the future.

Since the constraints are small enough, I have directly used a `50x50x51` dp matrix instead of a dynamic one.

```
const int mod = 1e9 + 7, moves[4][2] {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
int dp[50][50][51] = {[0 ... 49] = {[0 ... 49] = {[0 ... 50] = -1}}};  // initialize all elements to -1 denoting not yet computed
public:    
bool outOfBounds(int m, int n, int r, int c) {
	return r < 0 || r >= m || c < 0 || c >= n;
}
int findPaths(int m, int n, int maxMove, int r, int c) {        
	bool isOut = outOfBounds(m, n, r, c);
	if(isOut || !maxMove) return isOut;
	if(dp[r][c][maxMove] != -1) return dp[r][c][maxMove];  // return if already computed result
	dp[r][c][maxMove] = 0;   // elements of dp are initalized to -1, so set to 0 before exploring moves
	for(int i = 0; i < 4; i++) 
		dp[r][c][maxMove] = (dp[r][c][maxMove] + findPaths(m, n, maxMove-1, r + moves[i][0], c + moves[i][1])) % mod;
	return dp[r][c][maxMove];
}
```

***Time Complexity :*** **`O(m * n * maxMove)`**
***Space Complexity :*** **`O(1)`**, The above implementation, although may use more space than dynamic allocation doesn't depend on input size and hence it's constant space complexity. The space complexity of dynamic allocation implementation will be **`O(m * n * maxMove)`**.

---

\u2714\uFE0F ***Solution - III (Dynamic Programming - Tabulation)***

We can also solve it iteratively using dp tabulation. Here again, we use dp matrix where *`dp[i][j][M]`* denotes the number of ways to reach the cell `(i, j)` from outside grid in atmost *`M`* moves. 

Here, we will iterate over each cell of the grid for move `M=1...maxMove` and each time update the total number of ways to reach the current cell as sum of number of ways to reach it's adjacent cells in `M-1` moves. If the adjacent cell is not found, it means we are out-of-bound and thus that's another path we can add to the total.

Finally, at the end, *`dp[r][c][MaxMove]`* will hold the number of ways to reach outside grid in atmost `maxMove` from `(r,c)`.

```
const int mod = 1e9 + 7, moves[4][2] {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
int findPaths(int m, int n, int maxMove, int r, int c) {
	auto outOfBounds = [&](int m, int n, int r, int c){return r < 0 || r >= m || c < 0 || c >= n;};
	uint dp[51][51][51]{};
	for(int M = 1; M <= maxMove; M++)            // iterate for all available moves
		for(int i = 0; i < m; i++) 
			for(int j = 0; j < n; j++) 
				for(int k = 0; k < 4; k++)       // for each cell, try all 4 possible moves
					if(outOfBounds(m, n, i + moves[k][0], j + moves[k][1])) dp[i][j][M]++;
					else dp[i][j][M] += dp[i + moves[k][0]][j + moves[k][1]][M-1] % mod;
	return dp[r][c][maxMove] % mod;
}
```

***Time Complexity :*** **`O(m * n * maxMove)`**
***Space Complexity :*** **`O(1)`**

---

\u2714\uFE0F ***Solution - IV (Space Optimized DP)***

We can observe that we are only ever accessing the value stored for the previous move. So, there's no need to store all *`maxMove`* in our dp array. At any point of time, we only require *`dp[i][j][M-1]`* (matrix storing number of paths to reach `(i,j)` in M-1 moves atmost) and *`dp[i][j][M]`* (matrix that we update for `M` moves using the previous matrix).

A common way to reduce dimensionality in many dynamic programming problems is to alternate between 2 rows of dp (in case of optimization from 2d to 1d) or in this case, alternate between two matrices so that we effectively reduce the dp from a 3D matrix into 2x 2D matrix. We can alternate between them using AND (&) operator with 1. Most of the code remains the same - we just alternate between the indexing by adding a `&1` term while indexing.

Another small thing is we need to set `dp[i][j][M&1]` to 0 before we start adding paths from matrix holding values for  `M-1` moves because currently `dp[i][j][M&1]` would be holding values for `M-2` moves. Hope that made sense.

```
const int mod = 1e9 + 7, moves[4][2] {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
int findPaths(int m, int n, int maxMove, int r, int c) {
	auto outOfBounds = [&](int m, int n, int r, int c){return r < 0 || r >= m || c < 0 || c >= n;};
	uint dp[50][50][2]{};        
	for(int M = 1; M <= maxMove; M++)
		for(int i = 0; i < m; i++) 
			for(int j = 0, k; j < n; j++) 
				for(k = 0, dp[i][j][M & 1] = 0; k < 4; k++) 
					if(outOfBounds(m, n, i + moves[k][0], j + moves[k][1])) dp[i][j][M & 1]++;
					else dp[i][j][M & 1] += dp[i + moves[k][0]][j + moves[k][1]][(M-1) & 1] % mod;
	return dp[r][c][maxMove & 1] % mod;
}
```

***Time Complexity :*** **`O(m * n * maxMove)`**
***Space Complexity :*** **`O(1)`**, we have reduced the constant factor. In scenario where we would have used dynamic matrix, this would have reduced the space complexity from `O(m*n*maxMove)` to `O(m*n)`.


---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---