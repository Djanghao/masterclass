# Easy Video Explanation 🔥 || Floyd Warshall Algorithm ✅

**Author:** ayushnemmaniwar12
**Votes:** 26
**Link:** [https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4600676/](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i/solutions/4600676/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Floyd Warshall Algorithm

# ***Easy Video Explanation***

https://youtu.be/dmdnA_yBc90


# Approach
<!-- Describe your approach to solving the problem. -->
Our code calculates the count of pairs of nodes at a specific distance in an undirected graph with 'n' nodes. It initializes a grid with initial distances between nodes, updates it using Floyd-Warshall algorithm, and then counts pairs at each 


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*N*N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N*N)
    

# Code


```C++ []
class Solution {
public:
    vector<int> countOfPairs(int n, int x, int y) {
        vector<vector<int>> grid(n+1, vector<int>(n+1, 1000));
        
        for(int j = 1; j < n; j++) {
            grid[j][j+1] = 1;
            grid[j+1][j] = 1;
        }
        grid[x][y] = 1;
        grid[y][x] = 1;
        
        for(int k = 1; k <= n; k++) {
            for(int i = 1; i <= n; i++) {
                for(int j = 1; j <= n; j++) {              
                   grid[i][j] = min(grid[i][j], grid[i][k] + grid[k][j]);                
                }
            }
        }
        
        vector<int> result(n);
        for(int i = 1; i <= n; i++) {
            for(int j = 1; j <= n; j++) {

                if(i != j) {
                    int val = grid[i][j];
                    result[val-1]++;
                }

            }
        }
        
        return result;
        
    }
};
```
```python []
class Solution:
    def countOfPairs(self, n, x, y):
        grid = [[1000] * (n + 1) for _ in range(n + 1)]

        for j in range(1, n):
            grid[j][j+1] = 1
            grid[j+1][j] = 1
        grid[x][y] = 1
        grid[y][x] = 1

        for k in range(1, n + 1):
            for i in range(1, n + 1):
                for j in range(1, n + 1):
                    grid[i][j] = min(grid[i][j], grid[i][k] + grid[k][j])

        result = [0] * n
        for i in range(1, n + 1):
            for j in range(1, n + 1):
                if i != j:
                    val = grid[i][j]
                    result[val - 1] += 1

        return result

```
```Java []
import java.util.Arrays;

public class Solution {
    public int[] countOfPairs(int n, int x, int y) {
        int[][] grid = new int[n+1][n+1];
        for (int[] row : grid) {
            Arrays.fill(row, 1000);
        }

        for (int j = 1; j < n; j++) {
            grid[j][j+1] = 1;
            grid[j+1][j] = 1;
        }
        grid[x][y] = 1;
        grid[y][x] = 1;

        for (int k = 1; k <= n; k++) {
            for (int i = 1; i <= n; i++) {
                for (int j = 1; j <= n; j++) {
                    grid[i][j] = Math.min(grid[i][j], grid[i][k] + grid[k][j]);
                }
            }
        }

        int[] result = new int[n];
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i != j) {
                    int val = grid[i][j];
                    result[val-1]++;
                }
            }
        }

        return result;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00