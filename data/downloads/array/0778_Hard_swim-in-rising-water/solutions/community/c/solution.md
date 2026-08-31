# ✅ Easy Solution w/ Explanation | Optimization from Brute-Force to Binary Search | Beats 100%

**Author:** archit91
**Votes:** 130
**Link:** [https://leetcode.com/problems/swim-in-rising-water/solutions/1285099/](https://leetcode.com/problems/swim-in-rising-water/solutions/1285099/)

---

\u274C ***Solution - I (Brute-Force)***

We can observe that the problem basically asks us to **find a path such that the maximum waterLevel *`w_lvl`* (value of a cell) of some intermediate cell of that path is minimized**. 

We can start with the brute force approach and explore all the possible paths to reach the end of the *`grid`*. The path which minimizes the maximum value of some cell in a path will be chosen and that water level - *`w_lvl`* will be our answer.

```
int n;
int swimInWater(vector<vector<int>>& grid) {
	n = size(grid);
	vector<vector<int> >vis(n, vector<int>(n));
	return solve(grid, vis, 0, 0);
}
int solve(vector<vector<int>>& grid, vector<vector<int>> vis, int i, int j, int w_lvl = 0) {
	if(i < 0 || j < 0 || i >= n || j >= n || vis[i][j]) return 10000;  // out-of-bounds / already visited
	if(i == n - 1 && j == n - 1) return max(w_lvl, grid[i][j]);
	vis[i][j] = true;            // mark as visited so we don't keep visiting back-and-forth
	w_lvl = max(w_lvl, grid[i][j]);  // update max intermediate value for current path
	// explore all 4 possible options from current cell and choose the path with minimum w_lvl -
	return min({solve(grid, vis, i + 1, j, w_lvl), solve(grid, vis, i - 1, j, w_lvl), solve(grid, vis, i, j + 1, w_lvl), solve(grid, vis, i, j - 1, w_lvl)});
}
```

<br />


<blockquote>
<details>
<summary><b>\u274C Brute-Force Variant -II (slightly optimized)</b></summary>

Since the brute-force approach was just to establish a starting approach, I kept it simple and just passed the *`vis`* matrix in the above approach by value which makes copies of it for each recursive call. This prevents the need to mark a cell as un-visited for the next recursive call. 

But making copies can be expensive. So here's a slight optimization over it by passing it by reference. It still TLEs though...

```
int n, moves[4][2] {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
int swimInWater(vector<vector<int>>& grid) {
	n = size(grid);
	vector<vector<int> >vis(n, vector<int>(n));
	return solve(grid, vis, 0, 0);
}
int solve(vector<vector<int>>& grid, vector<vector<int>>& vis, int i, int j, int w_lvl = 0) {
	if(i == n - 1 && j == n - 1) return max(w_lvl, grid[i][j]);
	vis[i][j] = true;            
	w_lvl = max(w_lvl, grid[i][j]);  
    int ans = 10000;
	for(int k = 0; k < 4; k++) {
        int new_i = i + moves[k][0], new_j = j + moves[k][1];
        if(checkValid(new_i, new_j, vis)) {
            ans = min(ans, solve(grid, vis, new_i, new_j, w_lvl));    
            vis[new_i][new_j] = false;
        }
    }
    return ans;
}
bool checkValid (int i, int j, vector<vector<int>>& vis) {
    return !(i < 0 || j < 0 || i >= n || j >= n || vis[i][j]);
}
```

</details>
</blockquote>

***Time Complexity :*** <b><code>O(4<sup>n<sup>2</sup></sup>)</code></b>, for each cell of the grid, we have 4 choices. So, in the worst case we may need <code>4`*`4`*`4`*`...n<sup>2</sup>times</code>

***Space Complexity :*** <b><code>O(n<sup>2</sup>)</code></b> for the optimzed verison, <b><code>O(n<sup>4</sup>)</code></b> for the first version since copy for *`vis`* is made for each recursive call



---

\u2714\uFE0F ***Solution - II (Search lowest valid water-level)***

Exploring all the possible path options is very time-consuming. **Instead of exploring all the available paths** and then choosing the path with lowest maximum water level - *`w_lvl`* , **we can instead set an upper-limit to *`w_lvl`*  ourselves**, starting from 1 till `n*n-1`. The lowest water level required to reach the end will be our answer.

Here, instead of exploring all paths, we have limited ourselves to only exploring a single path which has maximum intermediate cell value = *`w_lvl`* and returning as soon as we find the first path that takes us to the end. Thus, we have limited our search space to a great extent.


Another small optimization is to start checking directly from max of `max( grid[0][0], grid[n-1][n-1], 2*(n-1) )` instead of `w_lvl=1` (Credits to @ud240 & @nicolattu). That's because every path will contain *`grid[0][0]`* and *`grid[n-1][n-1]`*, and `2*(n-1)` because grid elements are always a permutation of `0...n*n-1` and thus there will always be a cell with `value >= 2*(n-1)`  in every path.

```
int n, moves[4][2] {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
int swimInWater(vector<vector<int>>& grid) {
    n = size(grid);        
    vector<vector<int>>vis(n, vector<int>(n));
	int minReq = max({ 2*(n-1), grid[0][0], grid[n-1][n-1] });
    for(int w_lvl = minReq; w_lvl < n*n; w_lvl++) {
        if(dfs(grid, vis, 0, 0, w_lvl)) return w_lvl;
        for_each(begin(vis), end(vis), [](auto& v){fill(begin(v), end(v), 0);});  // reset the vis array back to not-visited
    }        
    return n*n;
}

bool dfs(vector<vector<int>>& grid, vector<vector<int>>& vis, int i, int j, int w_lvl) {
    if(i < 0 || j < 0 || i >= n || j >= n || vis[i][j] || grid[i][j] > w_lvl) return false; // out-of-bound / already visited / cell value > max w_lvl allowed
    if(i == n - 1 && j == n - 1) return true;
    vis[i][j] = true;
    for(int k = 0; k < 4; k++) // search all available option till any of it leads us to the end
        if(dfs(grid, vis, i + moves[k][0], j + moves[k][1], w_lvl)) return true;
    return false;
}
```

***Time Complexity :*** <b><code>O(n<sup>4</sup>)</code></b>, we are exploring all water-level values from `1` to `n*n`. For each water-level *`MAX`*, we call `dfs()` having <code>O(n<sup>2</sup>)</code> time complexity in the worst case. Thus, overall time complexity becomes <code>O(n*n) * O(n<sup>2</sup>) = O(n<sup>4</sup>)</code>

***Space Complexity :*** <b><code>O(n<sup>2</sup>)</code></b>

---

\u2714\uFE0F ***Solution - III (Binary-Search)***

Instead of searching linearly as we did in the above approach, we can use binary search to find the lowest valid water-level. Our search space is sorted and it the range `[1...n*n-1]` and thus binary search can be applied here.

In previous approach, for the worst-case scenario we would have called `dfs()` for `n*n` times. 
Binary search will reduce worst-case number of calls required to <code>O(logn<sup>2</sup>) = O(logn)</code>.

Also, I have replaced the *`vis`* below with a boolean C-style array (for faster runtime) of `50x50` which is the max *`grid`* dimensions. Since the constraints are small, I have opted for fixed size declaration intead dynamic allocation, the syntax of which is slightly messy.


```
int n, moves[4][2] {{1, 0}, {-1, 0}, {0, 1}, {0, -1}};
int swimInWater(vector<vector<int>>& grid) {
	n = size(grid);
	int l = max({ 2*(n-1), grid[0][0], grid[n-1][n-1] }), r = n*n-1, mid;
	bool vis[50][50]{};
	while(l <= r) {            
		mid = (l + r) / 2;
		if(solve(grid, vis, 0, 0, mid)) r = mid - 1;  // we are able to reach end with MAX=mid   => try lower to minimze it
		else l = mid + 1;                             // we fail to reach the end with MAX=mid   => try higher so we can reach the end
		memset(vis, false, sizeof vis);               // reset vis back to all false
	}
	return l;
}

bool solve(vector<vector<int>>& grid, bool vis[][50], int i, int j, int w_lvl) {
	if(i < 0 || j < 0 || i >= n || j >= n || vis[i][j] || grid[i][j] > w_lvl) return false;
	if(i == n - 1 && j == n - 1) return true;
	vis[i][j] = true;
	for(int k = 0; k < 4; k++) 
		if(solve(grid, vis, i + moves[k][0], j + moves[k][1], w_lvl)) return true;
	return false;
}
```


***Time Complexity :*** <b><code>O(n<sup>2</sup>logn)</code></b>, <code>O(n<sup>2</sup>)</code> for dfs call and `O(logn)` for binary search over `1...n*n`.

***Space Complexity :*** <b><code>O(n<sup>2</sup>)</code></b>

---

*Best Runtime -*

<table><tr><td><img src =https://assets.leetcode.com/users/images/ccc9315f-7e1e-4679-b242-2112fcd74cd9_1624194042.2626312.png /></td></tr></table>


---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---