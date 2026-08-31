# C# Dynamic Programming Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/5487272/](https://leetcode.com/problems/minimum-score-triangulation-of-polygon/solutions/5487272/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->Use a 2D array dp where dp[i][j] represents the minimum score to triangulate the polygon from vertex i to vertex j.
Initialize the diagonal values of dp to zero because a polygon with less than three vertices cannot form a triangle.
Iterate over the possible lengths of the sub-polygons and compute the minimum score for each sub-polygon using previously computed values.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Initialization:
//  *'int n = values.Length;': Get the number of verticies
//  *'int[,] dp = new int[n, n];': Create a 2D array to store the minimum scores.
//  Dynamic Programming:
//  *Iterate over the lengths of sub-polygons from 2 to n-1.
//  *For each sub-polygon (i, j), compute the minimum score by trying all possible vertices k that can 
//  form a triangle with vertices i and j.
//  *Update dp[i, j] with the minimum score obtained.
//  Result: The result is stored in 'dp[0, n-1]', which represents the minimum score for triangulating the
//  entire polygon.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n^3).
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(n^2).
___

# Code
```
public class Solution {
    public int MinScoreTriangulation(int[] values) {
        int n = values.Length;
        int[,] dp = new int[n, n];

        for (int length = 2; length < n; length++) {
            for (int i = 0; i < n - length; i++) {
                int j = i + length;
                dp[i, j] = int.MaxValue;
                for (int k = i + 1; k < j; k++) {
                    int score = values[i] * values[j] * values[k] + dp[i, k] + dp[k, j];
                    dp[i, j] = Math.Min(dp[i, j], score);
                }
            }
        }

        return dp[0, n - 1];
    }
}
```