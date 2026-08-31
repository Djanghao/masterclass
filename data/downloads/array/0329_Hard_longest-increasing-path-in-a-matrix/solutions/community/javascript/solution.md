# JS, Python, Java, C++ | Recursive DFS Memoization Solution w/ Explanation

**Author:** sgallivan
**Votes:** 27
**Link:** [https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/1151293/](https://leetcode.com/problems/longest-increasing-path-in-a-matrix/solutions/1151293/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The naive approach here would be to iterate through the entire matrix (**M**) and attempt to traverse down each branching path, but we'd find ourselves repeating the same stretches of path over and over again.

Rather than having to repeat subproblems, we should cache those completed subproblem results for future use in a **memoization** data structure (**memo**). Since the paths can branch at any location, we should also use a **depth-first search** (**DFS**) approach with **recursion** to efficiently traverse the paths.

(_**Note**: It is possible to use a bottom-up **dynamic programming** (**DP**) approach here as well, but since there's no convenient fixed point bottom location, we'd have to use a **max-heap** **priority queue** in order to traverse **M** in proper bottom-up order. That would push the **time complexity** to **O(N * M * log(N * M))**, so the memoization code is more efficient._)

So we can just iterate through every cell in **M** and run our recursive helper (**dfs**) which will fill in values in **memo** as it returns. For a given cell, if that cell's solution has already been found, we can **return** it, otherwise we'll take the best result of each of the four possible path directions.

Once the main iteration has finished, the highest value in **memo** will be our answer. so we should **return** it.

---

#### ***Implementation:***

Python can make good use of **@lru_cache** instead of having to manually create a memoization data structure.

---

#### ***Javascript Code:***

The best result for the code below is **88ms / 41.1MB** (beats 100% / 100%).
```javascript
var longestIncreasingPath = function(M) {
    let ylen = M.length, xlen = M[0].length, ans = 0,
        memo = Array.from({length: ylen}, el => new Uint16Array(xlen))
    const dfs = (y, x) => {
        if (memo[y][x]) return memo[y][x]
        let val = M[y][x]
        memo[y][x] = 1 + Math.max(
            y < ylen - 1 && M[y+1][x] < val ? dfs(y+1,x) : 0,
            y > 0 && M[y-1][x] < val ? dfs(y-1,x) : 0,
            x < xlen - 1 && M[y][x+1] < val ? dfs(y,x+1) : 0,
            x > 0 && M[y][x-1] < val ? dfs(y,x-1) : 0)
        return memo[y][x]
    }
    for (let i = 0; i < ylen; i++)
        for (let j = 0; j < xlen; j++)
            ans = Math.max(ans, dfs(i, j))
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **320ms / 18.7MB** (beats 100% / 22%).
```python
class Solution:
    def longestIncreasingPath(self, M: List[List[int]]) -> int:
        ylen, xlen = len(M), len(M[0])
        @lru_cache(maxsize=None)
        def dfs(y, x):
            val = M[y][x]
            return 1 + max(
                dfs(y+1,x) if y < ylen - 1 and val > M[y+1][x] else 0,
                dfs(y-1,x) if y > 0 and val > M[y-1][x] else 0, 
                dfs(y,x+1) if x < xlen - 1 and val > M[y][x+1] else 0,
                dfs(y,x-1) if x > 0 and val > M[y][x-1] else 0)
        return max(dfs(y, x) for y in range(ylen) for x in range(xlen))
```

---

#### ***Java Code:***

The best result for the code below is **5ms / 38.7MB** (beats 100% / 99%).
```java
class Solution {
    public int longestIncreasingPath(int[][] M) {
        int ylen = M.length, xlen = M[0].length, ans = 0;
        int[][] memo = new int[ylen][xlen];
        for (int i = 0; i < ylen; i++)
            for (int j = 0; j < xlen; j++)
                ans = Math.max(ans, dfs(i,j,M,memo));
        return ans;
    }
    public int dfs(int y, int x, int[][] M, int[][] memo) {
        if (memo[y][x] > 0) return memo[y][x];
        int val = M[y][x];
        memo[y][x] = 1 + Math.max(
            Math.max(y < M.length - 1 && M[y+1][x] < val ? dfs(y+1,x,M,memo) : 0,
                     y > 0 && M[y-1][x] < val ? dfs(y-1,x,M,memo) : 0),
            Math.max(x < M[0].length - 1 && M[y][x+1] < val ? dfs(y,x+1,M,memo) : 0,
                     x > 0 && M[y][x-1] < val ? dfs(y,x-1,M,memo) : 0));
        return memo[y][x];
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **24ms / 14.7MB** (beats 100% / 99%).
```c++
class Solution {
public:
    int memo[200][200];
    
    int longestIncreasingPath(vector<vector<int>>& M) {
        int ylen = M.size(), xlen = M[0].size(), ans = 0;
        for (int i = 0; i < ylen; i++)
            for (int j = 0; j < xlen; j++)
                ans = max(ans, dfs(i,j,M));
        return ans;
    }
    int dfs(int y, int x, vector<vector<int>>& M) {
        if (memo[y][x]) return memo[y][x];
        int val = M[y][x];
        memo[y][x] = 1 + max(
            max(y < M.size() - 1 && M[y+1][x] < val ? dfs(y+1,x,M) : 0,
                y > 0 && M[y-1][x] < val ? dfs(y-1,x,M) : 0),
            max(x < M[0].size() - 1 && M[y][x+1] < val ? dfs(y,x+1,M) : 0,
                x > 0 && M[y][x-1] < val ? dfs(y,x-1,M) : 0));
        return memo[y][x];
    }
};
```