# Dynamic Programming approach

**Author:** krish102
**Votes:** 0
**Link:** [https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/3591979/](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/solutions/3591979/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Confused between bruteforce or Dynamic programming and after sometime got clarity on DP approach

# Approach
<!-- Describe your approach to solving the problem. -->
Via DP approach, at every cell in matrix, we need to calculate based on previous cells (top and left).

We have a new dimension "K", so that we store the cumulative sum % k  at any moment for that cell.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(mnk)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(mnk)$$

# Code
```
public class Solution {
    public int NumberOfPaths(int[][] grid, int k) {
        // I can think of bruteforce traversal of all paths.
        // And in this case Dynamic programming wont work because we need to find all the possible way
        // lets try bruteforce traversal and can see if there is better solution

        // Wait let me think again, in case of brute force, we end up calculating small set again and again.

        // so the DP can look like
        // ki in (1 to k) 
        // Count[(i,j), (sum+ki)%k] +=  count[(i-1,j), ki] 
        // Count[(i,j), (sum+ki)%k] +=  count[(i,j-1), ki] 
        // return count[(m-1, n-1), k]

        var m = grid.Length;
        var n = grid[0].Length;

        var count = new long[m*n, k];
        count[0, grid[0][0]%k] = 1;

        // initialize first row
        for(int i=1;i<n;i++) {
            for(int d=0;d<k;d++) {
                count[i, (grid[0][i]+d)%k] += count[i-1, d];
            }
        }

        // initialize first column
        for(int i=1;i<m;i++) {
            for(int d=0;d<k;d++) {
                count[i*n, (grid[i][0]+d)%k] += count[(i-1)*n, d];
            }
        }

        for(int i=1;i<m;i++) {
            for(int j=1;j<n;j++) {
                for(int d=0;d<k;d++) {
                    count[i*n+j, (grid[i][j]+d)%k] += count[(i-1)*n+j, d] + count[i*n+j-1, d];
                    count[i*n+j, (grid[i][j]+d)%k] %= 1000000007;
                }
            }
        }
        
        return (int)(count[m*n-1, 0]%(1000000007));
    }
}
```