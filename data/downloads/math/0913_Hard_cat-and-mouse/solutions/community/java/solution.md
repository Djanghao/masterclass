# ✔️ | Java | Easy Top Down DP

**Author:** code_alone
**Votes:** 4
**Link:** [https://leetcode.com/problems/cat-and-mouse/solutions/3224728/](https://leetcode.com/problems/cat-and-mouse/solutions/3224728/)

---

# Complexity
- Time complexity:
O(n^3)

- Space complexity:
O(n^3)

# Code
```
class Solution {
    private int M;
    Integer memo[][][];
    public int catMouseGame(int[][] graph) {
        int n = graph.length;
        M = 4*n + 200; // randomly chosen max move
        memo = new Integer[n+1][n+1][M+1];
        return dp(1, 2, 0, graph);
    }

    int dp(int m, int c, int moves, int[][] graph) {
        if(moves > M) return 0;
        if(c == m) return 2;
        if(m == 0) return 1;
        if(memo[m][c][moves] != null) return memo[m][c][moves];
        if(moves % 2 == 0){
            boolean draw = false;
            for(int nei : graph[m]) {
                int ans = dp(nei, c, moves+1, graph);
                if(ans == 1) return memo[m][c][moves] = 1;
                if(ans == 0)draw = true;
            }
            return memo[m][c][moves] = draw ? 0 : 2;
        }else {
            boolean draw = false;
            for(int nei : graph[c]) {
                if(nei == 0) continue;
                int ans = dp(m, nei, moves+1, graph);
                if(ans == 2) return memo[m][c][moves] = 2;
                if(ans == 0)draw = true;
            }
            return memo[m][c][moves] = draw ? 0 : 1;
        }
    }
}
```