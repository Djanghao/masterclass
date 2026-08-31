# JS, Python, Java, C++ | Easy DFS / Recursion / DP Solution w/ Explanation

**Author:** sgallivan
**Votes:** 47
**Link:** [https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/1126812/](https://leetcode.com/problems/pacific-atlantic-water-flow/solutions/1126812/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

It should be obvious from the start that we'll need to solve this problem in reverse. We know that the edges of the input matrix (**M**) will flow water out to the ocean on their respective sides, and we can tell whether an adjacent cell will funnel water to the current cell, so we'll have to start from the edges and work our way inward.

Unfortunately, since the path the water will take can possibly wind around, we can't do a straight one-time iteration. Instead, we'll have to use a **depth first search** (**DFS**) approach with either a **stack**/**queue** structure or **recursion**.

For each cell that touches an ocean, we'll have to follow the reverse path of the water up the continent as far as it will go. Since we only want cells that are reached by both oceans, we'll need a data structure to store the preliminary data for the cells while we wait for the opposite ocean to potentially find the same cell.

There are a few ways we can do this, but I'll choose a **dynamic programming** (**DP**) array (**dp**). Since there's no real reason to mimic the **2-D matrix** structure of **M**, we can just use a flattened **1-D array** instead, which should save some processing overhead. In order to store both oceans' data discretely in **dp**, we can use **+1** for one and **+2** for the other. That means that when a cell goes to **3**, it should be added to our answer array (**ans**).

Our DFS recursion function (**dfs**) should also check to make sure that we haven't already marked this cell with the current ocean (**w**) by using a **bitwise AND** (**&**) operator. Then, at the end of **dfs** we should fire off new recursions in all four directions, if possible.

---

#### ***Implementation:***

Javascript can use the lighter, typed **Uint8Array** for **dp**.

---

#### ***Javascript Code:***

The best result for the code below is **100ms / 44.1MB** (beats 100% / 100%).
```javascript
var pacificAtlantic = function(M) {
    if (!M.length) return M
    let y = M.length, x = M[0].length, ans = [],
        dp = new Uint8Array(x * y)
    const dfs = (i, j, w, h) => {
        let ij = i * x + j
        if ((dp[ij] & w) || M[i][j] < h) return
        dp[ij] += w, h = M[i][j]
        if (dp[ij] === 3) ans.push([i,j])
        if (i + 1 < y) dfs(i+1, j, w, h)
        if (i > 0) dfs(i-1, j, w, h)
        if (j + 1 < x) dfs(i, j+1, w, h)
        if (j > 0) dfs(i, j-1, w, h)
    }   
    for (let i = 0; i < y; i++) {
        dfs(i, 0, 1, M[i][0])
        dfs(i, x-1, 2, M[i][x-1])
    }
    for (let j = 0; j < x; j++) {
        dfs(0, j, 1, M[0][j])
        dfs(y-1, j, 2, M[y-1][j])
    }
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **264ms / 15.6MB** (beats 97% / 53%).
```python
class Solution:
    def pacificAtlantic(self, M: List[List[int]]) -> List[List[int]]:
        if not M: return M
        x, y = len(M[0]), len(M)
        ans, dp = [], [0] * (x * y)
        def dfs(i: int, j: int, w: int, h: int):
            ij = i * x + j
            if dp[ij] & w or M[i][j] < h: return
            dp[ij] += w
            h = M[i][j]
            if dp[ij] == 3: ans.append([i,j])
            if i + 1 < y: dfs(i+1, j, w, h)
            if i > 0: dfs(i-1, j, w, h)
            if j + 1 < x: dfs(i, j+1, w, h)
            if j > 0: dfs(i, j-1, w, h)
        for i in range(y):
            dfs(i, 0, 1, M[i][0])
            dfs(i, x-1, 2, M[i][x-1])
        for j in range(x):
            dfs(0, j, 1, M[0][j])
            dfs(y-1, j, 2, M[y-1][j])
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **2ms / 40.4MB** (beats 100% / 43%).
```java
class Solution {
    static void dfs(int i, int j, int w, int h, int[][] M, byte[] dp, List<List<Integer>> ans) {
        int ij = i * M[0].length + j;
        if ((dp[ij] & w) > 0 || M[i][j] < h) return;
        dp[ij] += w;
        h = M[i][j];
        if (dp[ij] == 3) ans.add(Arrays.asList(i,j));
        if (i + 1 < M.length) dfs(i+1, j, w, h, M, dp, ans);
        if (i > 0) dfs(i-1, j, w, h, M, dp, ans);
        if (j + 1 < M[0].length) dfs(i, j+1, w, h, M, dp, ans);
        if (j > 0) dfs(i, j-1, w, h, M, dp, ans);
    }
    public List<List<Integer>> pacificAtlantic(int[][] M) {
        List<List<Integer>> ans = new ArrayList<>();
        if (M.length == 0) return ans;
        int y = M.length, x = M[0].length;
        byte[] dp = new byte[x * y];
        for (int i = 0; i < x; i++) {
            dfs(0, i, 1, M[0][i], M, dp, ans);
            dfs(y-1, i, 2, M[y-1][i], M, dp, ans);
        }   
        for (int i = 0; i < y; i++) {
            dfs(i, 0, 1, M[i][0], M, dp, ans);
            dfs(i, x-1, 2, M[i][x-1], M, dp, ans);
        }
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **24ms / 16.7MB** (beats 100% / 99%).
```c++
class Solution {
public:
    vector<vector<int>> pacificAtlantic(vector<vector<int>>& M) {
        vector<vector<int>> ans;
        if (M.empty()) return ans;
        int y = M.size(), x = M[0].size();
        vector<char> dp(y * x);
        for (int i = 0; i < y; i++) {
            dfs(M, dp, i, 0, 1, 0);
            dfs(M, dp, i, x - 1, 2, 0);
        }
        for (int i = 0; i < x; i++) {
            dfs(M, dp, 0, i, 1, 0);
            dfs(M, dp, y - 1, i, 2, 0);
        }
        for (int i = 0; i < y; i++) 
            for (int j = 0; j < x; j++) 
                if (dp[i * x + j] == 3) 
                    ans.push_back({i, j});
        return ans;
    }
private:
    void dfs(const vector<vector<int>>& M, vector<char>& dp, int i, int j, int w, int h) {
        int y = M.size(), x = M[0].size(), ij = i * x + j, newh = M[i][j];;
        if ((dp[ij] & w) || M[i][j] < h) return;
        dp[ij] += w;
        if (i + 1 < y) dfs(M, dp, i + 1, j, w, newh);
        if (i > 0) dfs(M, dp, i - 1, j, w, newh);
        if (j + 1 < x) dfs(M, dp, i, j + 1, w, newh);
        if (j > 0) dfs(M, dp, i, j - 1, w, newh);
    }
};
```