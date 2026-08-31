# [Python/Java] Walking through example with DP approach, builds on LC #62. Unique Paths

**Author:** supervaka
**Votes:** 4
**Link:** [https://leetcode.com/problems/kth-smallest-instructions/solutions/2976648/](https://leetcode.com/problems/kth-smallest-instructions/solutions/2976648/)

---

I recommend solving [unique-paths](https://leetcode.com/problems/unique-paths/) first (with a bottom-up dp approach). We will use it to create the dp table.

Specifically, we will build a dp table where $dp[i][j]$ denotes the number of unique paths to reach the bottom-right corner, starting from indexes i, j

For example, 
destination = [2, 3], k = 3
will have the following dp table:
```
10  6   3   1

4   3   2   1 
  
1   1   1   1
```
<pre>
Lets look at dp[0][0],
There are 10 unique paths
    if we move right, we then have 6 unique paths left
        ["HHHVV", "HHVHV", "HHVVH", "HVHHV", "HVHVH", "HVVHH"]
    if we move down, we then have 4 unique paths left
        ["VHHHV", "VHHVH", "VHVHH", "VVHHH"]
</pre>

The 6 paths on moving right are lexicographically smaller than the 4 paths on moving down

We want the 3rd smallest path(we are given k=3). So we choose to move right since the 3rd smallest path will be amongst the 6 smallest paths.

```
10__6   3   1
    ^    
4   3   2   1 
  
1   1   1   1
```
We are now at dp[0][1] = 6, moving right will mean our path will be amongst the 3 smallest paths, so we move right.
```
10__6___3   1
        ^
4   3   2   1 
  
1   1   1   1
```
We are now at dp[0][2] = 3, we don't want to move right since then our path will be amongst the 1 smallest path(s), so we don't do that(since k = 3, we want the 3rd smallest path).
We move down instead.

There is one thing to note when moving down. 
Again, all the paths when moving right are lexicographically smaller than all the paths when moving down.
So you could imagine that all the unique paths when moving down are all "shifted" in lex order by the number of paths on the right.

You could also view this as a subproblem where we are looking at the unique paths starting from indexes i, j

We can encode this into our implementation by subtracting our k value by dp[i][j+1] 
so in this case:
```
k := k - dp[i][j+1]
   = k - dp[0][3]
   = 3 - 1 # so now k is 2
```


```  
k = 2
10__6___3   1
        |
4   3   2   1 
        ^
1   1   1   1
```
We are now at dp[1][2] = 2, k = 2, we don't want to move right since then  path will be the 1st smallest path(inside the subproblem perspective).
So we move down.

```  
k = 1
10__6___3   1
        |
4   3   2   1 
        |
1   1   1   1
        ^
```
We are now at dp[2][2] = 1, k = 1
Once we reach the bottom row or right column, there is only one path we can choose.

Our final path is:
```  
10__6___3   1
        |
4   3   2   1 
        |
1   1   1___1
"HHVVH"
```
Which is indeed the 3rd smallest path out of ["HHHVV", "HHVHV", "HHVVH", "HVHHV", "HVHVH", "HVVHH", "VHHHV", "VHHVH", "VHVHH", "VVHHH"]

# High-level Recap
We build dp table of unique paths.
We traverse the dp table starting at dp[0][0].
We compare k with dp[i][j+1] to decide whether to move right or down.

# Code
```python []
class Solution:
    def kthSmallestPath(self, destination: List[int], k: int) -> str:
        m, n = destination[0] + 1, destination[1] + 1
        dp = [[0] * n for i in range(m)]
        for i in range(m): dp[i][n-1] = 1
        for j in range(n): dp[m-1][j] = 1
        for i in range(m-2, -1, -1):
            for j in range(n-2, -1, -1):
                dp[i][j] = dp[i+1][j] + dp[i][j+1]
        # ^ this is just LC #62. Unique Paths

        sb = []
        i, j = 0, 0
        while i < m-1 and j < n-1: 
            """ e.g dest = [2,3], k = 3
            10  6   3   1
            4   3   2   1   
            1   1   1   1
            """
            # move right
            if k <= dp[i][j+1]:
                j += 1
                sb.append('H')
            # move down
            else:
                k -= dp[i][j+1]
                i += 1
                sb.append('V')
        # if we reach the bottom row or right column, there is only one path left
        sb.append('V' * (m-1 - i) + 'H' * (n-1 - j))
        # print('\
'.join(['\	'.join([str(cell) for cell in row]) for row in dp]))
        return ''.join(sb)
```
```java []
class Solution {
    public String kthSmallestPath(int[] destination, int k) {
        int m = destination[0] + 1;
        int n = destination[1] + 1;
        int[][] dp = new int[m][n];
        for (int i = 0; i < m; i++) dp[i][n-1] = 1; 
        for (int j = 0; j < n; j++) dp[m-1][j] = 1; 
        for (int i = m-2; i >= 0; i--) {
            for (int j = n-2; j >= 0; j--) {
                dp[i][j] = dp[i+1][j] + dp[i][j+1];
            }
        } // ^ this is just LC #62. Unique Paths

        int i = 0;
        int j = 0;
        StringBuilder sb = new StringBuilder();
        while (i < m-1 && j < n-1) {
            // e.g dest = [2,3], k = 3
            //    10  6   3   1
            //    4   3   2   1   
            //    1   1   1   1

            // move right
            if (k <= dp[i][j+1]) {
                j++;
                sb.append('H');
            } 
            // move down
            else {
                k -= dp[i][j+1];
                i++;
                sb.append('V');
            }
        }
        // if we reach the bottom row or right column, there is only one path left
        for (; i < m-1; i++) sb.append('V');
        for (; j < n-1; j++) sb.append('H');
        //System.out.println(Arrays.deepToString(dp).replace("], ", "]\
"));
        return sb.toString();
    }
}
```
