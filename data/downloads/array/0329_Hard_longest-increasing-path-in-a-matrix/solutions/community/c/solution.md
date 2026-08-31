# ✅ Longest Increasing Path in a Matrix | Short & Simple w/ Explanation

**Author:** archit91
**Votes:** 60
**Link:** [https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/1151418/](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/1151418/)

---

I will explain step-by-step process to solve this problem from naive brute-force to optimised approach and the thought-process behind each one.

---

\u274C ***Solution - I (Recursive Brute-Force Approach) [TLE]***

Let's start with just doing what the problem asks us to do. We are given a matrix and are asked to find longest path. 

The optimal (longest) path can start from any cell of the matrix. So, for each cell `matrix[i][j]`, we find the longest path that we can go to, starting from the current cell such that each next cell value in the path is greater than the previous cell value. At each cell, we are given 4 options - 

&emsp;&emsp;&emsp;&emsp; \u2726 **Go Up**&emsp;&emsp;&emsp;&emsp; \u2726 **Go Down**&emsp;&emsp;&emsp;&emsp; \u2726 **Go Left**&emsp;&emsp;&emsp;&emsp; \u2726 **Go Right**

And so we go on exploring each option available on the current cell till we can (At last, we either reach bounds of matrix or all adjacent cells will be smaller than current cell value - these denote the **base conditions** to stop our recursion). The recursive function is very similar to **DFS traversal**.

The implementation below has additional comments which explains more about this approach at each step -

```
int moves[4][2] = { {-1,0},{1,0},{0,-1},{0,1} };   // all the moves available to us - top, down, left, right
int longestIncreasingPath(vector<vector<int>>& matrix) {
	int longestPath = 1; // atleast one cell can always be selected in the path
	// explore each cell of matrix to find longest path achievable from that cell and finally return the maximum
	for(int i = 0; i < size(matrix); i++)
		for(int j = 0; j < size(matrix[0]); j++)
			longestPath = max(longestPath, solve(matrix, i, j));		        
	return longestPath;
}
// recursive solver for each cell 
int solve(vector<vector<int>>& mat, int i, int j){
	int MAX = 1;  // max length of path starting from cell i,j of matrix
	// choosing all the 4 moves available for current cell
	for(int k = 0; k < 4; k++){
		int new_i = i + moves[k][0], new_j = j + moves[k][1];
		// bound checking as well as move to next cell only when it is greater in value
		if(new_i < 0 || new_j < 0 || new_i >= size(mat) || new_j >= size(mat[0]) || mat[new_i][new_j] <= mat[i][j]) continue;
		// MAX will be updated each time to store maximum of path length from each move
		MAX = max(MAX, 1 + solve(mat, new_i, new_j));
	}         
	return MAX;
}
```

***Time Complexity :*** `O((N*M)*4^(N*M))`. We are calculating longest path for each cell and for each cell we are invoking 4 additional functions. All those invoked functions may further call 4 additional functions and this may continue maximum of `N*M` times taking the overall time complexity to `O((N*M)*4^(N*M))`.
 We can see that 4 further functions are invoked only the first time `solve` is called and each subsequent time we only make 3 additional calls at max. So we can put `O((N*M)*3^(N*M))` as a more tighter upper bound of the given solution.
***Space Complexity :*** `O(N*M)`, maximum recursive stack depth for a cell can be `O(N*M)` when maximum path is `N*M`.

---

\u2714\uFE0F ***Solution - II (Recursive with Dynamic Programming - Memoization) [Accepted]***

We have to realize that in the above solution, we were doing a lot of repeated calculation which can be avoided if we use **dynamic programming** to store the previously calculated results. 

For eg. If we have calculated optimal path for `matrix[0][0]` and suppose that it is - `(0,0) -> (0, 1) -> (0, 2) -> (1, 2) ->(1, 1) ->(1, 0)`, which is 6 in length. Now, for finding the optimal path for `matrix[0][1]`, there's no need to recalculate the path again because it is **part of optimal path of matrix[0][0]** and for getting the optimal path for matrix[0][0], we must also have gotten the optimal path of its adjacent visitable cells. So, optimal answer for matrix[0][1] could have directly been returned as `5` if we had used **DP**. 

From the above, it is apparent that the naive brute force approach has - 

&emsp;&emsp;&emsp;\uD83D\uDC49 Many **overlapping subproblems** - As already seen in the example above, once we calculate the optimal answer for a cell, we most probably have also recursed for its adjacent cells and calculated the optimal answers for them as well. There's no need to repeat the same calculations again.

&emsp;&emsp;&emsp;\uD83D\uDC49 The problem has **optimal substructure property** meaning that the solutions of bigger problems can be calculated from optimal solutions of its sub-problems. So, if there's a longest path (optimal solution) for a given cell starting at that cell, all the cells in its path must also have optimal paths as well starting at those cells respectively.

So, the repeated recalculation of sub-problems can be avoided using dp as given below -

```
int moves[4][2] = { {-1,0},{1,0},{0,-1},{0,1} };
vector<vector<int> > dp; // dp[i][j] will store maximum path length starting from matrix[i][j]
int cnt, n, m;
int longestIncreasingPath(vector<vector<int>>& matrix) {
	maxPath = 0, n = size(matrix), m = size(matrix[0]);
	dp.resize(n, vector<int>(m));
	// calculating maximum path from each cell and at last returning the maximum length
	for(int i = 0; i < n; i++)
		for(int j = 0; j < m; j++)
			maxPath = max(maxPath, solve(matrix, i, j, -1));            
	return maxPath;
}
// recursive solver for each cell with dp for storing each calculated result
int solve(vector<vector<int>>& mat, int i, int j, int prev){
	if(dp[i][j]) return dp[i][j]; // return if result is already calculated
	dp[i][j] = 1;  // minimum path from each cell is always atleast 1
	// choosing each possible move available to us
	for(int k = 0; k < 4; k++){ 
		int new_i = i + moves[k][0], new_j = j + moves[k][1];
		// bound checking as well as move to next cell only when it is greater in value
		if(new_i < 0 || new_j < 0 || new_i >= n || new_j >= m || mat[new_i][new_j] <= mat[i][j]) continue;
		// max( current optimal, select current + optimal solution after moves[k] from current cell
		dp[i][j] = max(dp[i][j], 1 + solve(mat, new_i, new_j, mat[i][j]));
	}         
	return dp[i][j];
}
```

***Time Complexity :*** **`O(NM)`**
***Space Complexity :*** **`O(NM)`**

---

\u2714\uFE0F ***Concise Solution - II***

This is the same as above solution just more shorter & cleaner version.

```
int dp[200][200]; // constraints are small enough that we can just set them to MAX
int cnt, n, m;
int longestIncreasingPath(vector<vector<int>>& matrix) {
	cnt = 0, n = size(matrix), m = size(matrix[0]);
	for(int i = 0; i < n; i++)
		for(int j = 0; j < m; j++)
			cnt = max(cnt, solve(matrix, i, j, -1));            
	return cnt;
}
int solve(vector<vector<int>>& mat, int i, int j, int prev){
	if(i < 0 || j < 0 || i >= n || j >= m || mat[i][j] <= prev) return 0;
	if(dp[i][j]) return dp[i][j];
	return dp[i][j] = 1 + max({ solve(mat, i + 1, j, mat[i][j]),
							    solve(mat, i - 1, j, mat[i][j]),
							    solve(mat, i, j + 1, mat[i][j]),
							    solve(mat, i, j - 1, mat[i][j]) });       
}
```

---

*Best Runtime -*

<table><tr><td><img src = https://assets.leetcode.com/users/images/907d87f0-289c-4c92-8fa5-3b5b0f8fcad6_1618056082.304802.png /> </td> </tr> </table>

---

*Why not Bottom-up Approach ?*
Ans : This problem has a natural and intuitive top-down recursive solution which can be optimized using memoization. Of course, it can be converted to iterative version as well. One way is to use a explicit stack and just convert the above solution to iterative version. Though technically a iterative solution, this won't be any different logically than the recursive one. 

In another iterative version, we would need to use priority queue to do this efficiently. This priority queue will allow us to start from the maximum value cell from the matrix which is necessary and makes it possible for us to apply dp on it. This makes the solution a bit complex and also the priority queue would require an extra `O(logn)` to give the max value cell each time taking the overall time complexity to **`O(MNlog(MN))`**.


---
---

\uD83E\uDDD1\u200D\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any questions or mistakes in my post, please do comment below \uD83D\uDC47 

---
---