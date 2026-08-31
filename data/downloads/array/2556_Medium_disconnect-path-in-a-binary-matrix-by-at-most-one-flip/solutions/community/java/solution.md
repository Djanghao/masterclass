# Java || O(n) || 100% || Straightforward dfs

**Author:** summi_r
**Votes:** 27
**Link:** [https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3141541/](https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3141541/)

---


# Approach
As only single cell flip checking is required..we can do two pass dfs() and check if there exists more than one path from (0,0) to (m-1,n-1)

> **Note: Not finding more than one path in single dfs()...consider there is a critical cell and thr exists two paths from that critical cell..hence doing two-pass to keep code clean...**

**Edit: Critical cell example:**
I/p:
[1,1,1,0,0]
[1,0,1,0,0]
[1,1,1,1,1]
[0,0,1,1,1]
[0,0,1,1,1]

here critical cell is **(2,2)**

As you can see there exists many paths from (2,2)
E.x: 
1) (0,0)...(2,2) (3,2)... (m-1,n-1)
2) (0,0)...(2,2) (2,3)...(m-1,n-1)
and so on... so if all paths possible are only through this critical cell then our answer will be true...

Here O/p should be: True

# Complexity
- Time complexity:
O(n)

- Space complexity:
Recursion Auxiliary Space

Please upvote if you find useful..thanks for dropping-by.. :-)

//code updated
# Code
```
class Solution {
    public boolean isPossibleToCutPath(int[][] grid) {
        int first=dfs(grid,0,0);
        grid[0][0]=1; //reset for 2nd dfs() as got updated above
        int second=dfs(grid,0,0);
        return second >= 1 ? false : true;
    }
    
    private int dfs(int[][] g, int r, int c) {
        if(r == g.length-1 && c == g[0].length-1)
            return 1;
        if(r == g.length || c == g[0].length || g[r][c] == 0)
            return 0;
        
        g[r][c]=0;
        if(dfs(g,r+1,c) == 1)
            return 1;
        return dfs(g,r,c+1);
    }
}
```