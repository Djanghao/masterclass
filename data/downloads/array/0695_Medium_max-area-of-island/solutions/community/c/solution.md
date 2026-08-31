# JS, Python, Java, C++ | Simple DFS Recursion Solution w/ Explanation

**Author:** sgallivan
**Votes:** 177
**Link:** [https://leetcode.com/problems/max-area-of-island/solutions/1244552/](https://leetcode.com/problems/max-area-of-island/solutions/1244552/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

So we can just use a simple iteration through the **grid** and look for islands. When we find an island, we can use a **recursive** helper function (**trav**) to sum up all the connected pieces of land and **return** the total land mass of the island. 

As we traverse over the island, we can replace the **1**s with **0**s to prevent "finding" the same land twice. We can also keep track of the largest island found so far (**ans**), and after the **grid** has been fully traversed, we can **return ans**.

 - _**Time Complexity: O(N * M)** where **N** and **M** are the lengths of the sides of the **grid**_
 - _**Space Complexity: O(L)** where **L** is the size of the largest island, representing the maximum **recursion stack**_
   - _or **O(N * M + L)** if we create an **N * M** matrix in order to not modify the input_

---

#### ***Javascript Code:***

The best result for the code below is **92ms / 39.7MB** (beats 95% / 100%).
```javascript
var maxAreaOfIsland = function(grid) {
    let ans = 0, n = grid.length, m = grid[0].length
    const trav = (i, j) => {
        if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0
        grid[i][j] = 0
        return 1 + trav(i-1, j) + trav(i, j-1) + trav(i+1, j) + trav(i, j+1)
    }
    for (let i = 0; i < n; i++) 
        for (let j = 0; j < m; j++)
            if (grid[i][j]) ans = Math.max(ans, trav(i, j))
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **124ms / 16.7MB** (beats 95% / 48%).
```python
class Solution:
    def maxAreaOfIsland(self, grid: List[List[int]]) -> int:
        ans, n, m = 0, len(grid), len(grid[0])
        def trav(i: int, j: int) -> int:
            if i < 0 or j < 0 or i >= n or j >= m or grid[i][j] == 0: return 0
            grid[i][j] = 0
            return 1 + trav(i-1, j) + trav(i, j-1) + trav(i+1, j) + trav(i, j+1)
        for i, j in product(range(n), range(m)):
            if grid[i][j]: ans = max(ans, trav(i, j))
        return ans
```

---

#### ***Java Code:***

The best result for the code below is **2ms / 39.2MB** (beats 99% / 83%).
```java
class Solution {
    private int n, m;
    public int maxAreaOfIsland(int[][] grid) {
        int ans = 0;
        n = grid.length;
        m = grid[0].length;
        for (int i = 0; i < n; i++) 
            for (int j = 0; j < m; j++)
                if (grid[i][j] > 0) ans = Math.max(ans, trav(i, j, grid));
        return ans;
    }
    private int trav(int i, int j, int[][] grid) {
        if (i < 0 || j < 0 || i >= n || j >= m || grid[i][j] < 1) return 0;
        grid[i][j] = 0;
        return 1 + trav(i-1, j, grid) + trav(i, j-1, grid) + trav(i+1, j, grid) + trav(i, j+1, grid);
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **8ms / 23.0MB** (beats 100% / 95%).
```c++
class Solution {
public:
    int maxAreaOfIsland(vector<vector<int>>& grid) {
        int ans = 0;
        n = grid.size(), m = grid[0].size();
        for (int i = 0; i < n; i++) 
            for (int j = 0; j < m; j++)
                if (grid[i][j]) ans = max(ans, trav(i, j, grid));
        return ans;
    }
private:
    int n, m;
    int trav(int i, int j, vector<vector<int>>& grid) {
        if (i < 0 || j < 0 || i >= n || j >= m || !grid[i][j]) return 0;
        grid[i][j] = 0;
        return 1 + trav(i-1, j, grid) + trav(i, j-1, grid) + trav(i+1, j, grid) + trav(i, j+1, grid);
    }
};
```