# Easy Move from 72. Edit Distance with follow-up thinking process

**Author:** lh19900702
**Votes:** 5
**Link:** [https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/1403591/](https://leetcode.com/problems/the-most-similar-path-in-a-graph/solutions/1403591/)

---

Though this problem is scaredly long, it's a simple variation from 72. Edit Distance.
Recall 72. Edit Distance, we build a DP matrix as below:

            h   o  r  s  e
        r   1   2  2  3  4      
        o   2   1  2  3  4    
        s   3   2  2  2  3

For this problem, we can build similar DP matrix:

          A  B  C  D  E -> Name
        a Aa Ba Ca Da Ea
        b Ab
        c
        d
        |
    Target
	
*How to get Ab? It can come from valid node among (Aa, Ba, ..., Ea) 
*How to move from (Aa, Ba, ..., Ea) -> Ab? It needs to have edge btw (A, B, ..., E) -> A
*How to select from (Aa, Ba, ..., Ea)? find the "least value" among them
*What is the value of Ab? "least value" + If (A == b) ? 0 : 1

The difference from 72. Edit Distance: 
1) **pre -> cur transition**: String edit operation can only deal with diff(len) <= 1. So (i, j) <- {(i-1,j-1), (i-1,j), (i, j-1)}. Graph allows from any node with path k->j to cur (i, j). In human being language, any matrix cell (i-1, k) from previous row (i-1), with an edge between (k, j).
2) **Output**: If Edit Distance asks to output each Edit operaion, it'll be similar to this graph output: ( * records the path from origin to target)

	        h  o  r  s  e
        r   1* 2  2  3  4      
        o   2  1* 2* 3  4    
        s   3  2  2  2* 3*

```
class Solution {
    public List<Integer> mostSimilar(int n, int[][] roads, String[] names, String[] targetPath) {
        boolean[][] graph = new boolean[n][n];
        for (int[] r : roads) {
            graph[r[0]][r[1]] = true;
            graph[r[1]][r[0]] = true;
        }
        
        int m = targetPath.length;
        int[][] dp = new int[m][n];
        int[][] prev = new int[m][n];
        
        for (int j = 0; j < n; j++) dp[0][j] = names[j].equals(targetPath[0]) ? 0 : 1;
        
        // i,j loop to fill dp matrix
        for (int i = 1; i < m; i++) {
            for (int j = 0; j < n; j++) {
                int min = m + 1;
                // k loop to find connection between prev -> cur
                for (int k = 0; k < n; k++) {
                    if (graph[k][j]) {
                        if (dp[i-1][k] < min) {
                            min = dp[i-1][k];
                            prev[i][j] = k;
                        }
                    }
                }
                
                dp[i][j] = min + ( names[j].equals(targetPath[i]) ? 0 : 1 );
            }
        }
        
        List<Integer> res = new ArrayList<>();
        
        // From the last row, find the min Edit distance and pick a random valid end node
        int min = m + 1, candidate = 0;
        for (int j = 0; j < n; j++) {
            if (dp[m-1][j] < min) {
                min = dp[m-1][j];
                candidate = j;
            }
        }
        
        res.add(candidate);
        for (int i = m-1; i > 0; i--) {
            candidate = prev[i][candidate];
            res.add(candidate);
        }
            
        Collections.reverse(res);
        return res;
    }
}
```

Follow-Up: If each node can be visited only once in the path, What should you change in your solution?

In above code:
```
			for (int j = 0; j < n; j++) {
                int min = m + 1;
                // k loop to find connection between prev -> cur
                for (int k = 0; k < n; k++) {
                    if (graph[k][j]) {
                        if (dp[i-1][k] < min) {
                            min = dp[i-1][k];
                            prev[i][j] = k;
                        }
                    }
                }
                
                dp[i][j] = min + ( names[j].equals(targetPath[i]) ? 0 : 1 );
            }
```
We simply iterate all Cities as each City can be used multiple times. If only one usage is allowed, we just need to replace above code to a backtracking DFS. The return value of the dfs function is dp value at (i, j). The backtracking idea can be got from any question with backtracking tag, like 79. Word Search. 
	 
	 
