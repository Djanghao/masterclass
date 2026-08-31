# Simple LIS Approach | O(nlogn)

**Author:** ThatsRajeev
**Votes:** 8
**Link:** [https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5786867/](https://leetcode.com/problems/length-of-the-longest-increasing-path/solutions/5786867/)

---



# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem revolves around finding the maximum path length through a specific point, such that the point `(x_k, y_k)` is in the middle of the path. A path can be constructed by selecting points that are strictly to the left and below `(x_k, y_k)` and points strictly to the right and above `(x_k, y_k)`.

This can be mapped to two **Longest Increasing Subsequences (LIS)**:
1. One on the points to the left and below.
2. Another on the points to the right and above.

Once we find the LIS for both sections, we can sum their lengths and add 1 for the middle point.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Sort Coordinates**: First, sort the coordinates by their x-values, and for points with the same x, sort them by decreasing y-values. This ensures that any potential subsequence does not have conflicting x or y constraints.
   
2. **Classify Points**: Classify the points into two groups:
   - Points strictly to the left and below the middle point `(x_k, y_k)`.
   - Points strictly to the right and above the middle point.

3. **Find LIS**: Use a **binary search-based LIS** method for both groups. The LIS gives the length of the longest subsequence of points with increasing y-values.

4. **Combine Results**: The result is the sum of the two LIS values plus one (to account for the middle point itself).

# Complexity
- **Time complexity**: 
  - Sorting the coordinates takes **O(n log n)**.
  - Finding the LIS for both groups is **O(m log m)**, where `m` is the number of points in each group. Since the sum of both groups is `n`, the LIS step also takes **O(n log n)**.
  
  Thus, the total time complexity is **O(n log n)**.

- **Space complexity**: 
  - The lists `coordinates1` and `coordinates2` use **O(n)** space.
  - The `dp` array for LIS also uses **O(n)** space.

  Thus, the total space complexity is **O(n)**.

# Code
```java
class Solution {
    public int maxPathLength(int[][] coordinates, int k) {
        int ncx = coordinates[k][0], ncy = coordinates[k][1];
        int n = coordinates.length;

        // Sort coordinates by x and if equal, by decreasing y
        Arrays.sort(coordinates, (a, b) -> {
            if (a[0] == b[0]) {
                return b[1] - a[1];
            }
            return a[0] - b[0];
        });

        List<Integer> coordinates1 = new ArrayList<>();
        List<Integer> coordinates2 = new ArrayList<>();

        // Classify points to the left & below and right & above (x_k, y_k)
        for (int i = 0; i < n; i++) {
            int x = coordinates[i][0];
            int y = coordinates[i][1];

            if (x < ncx && y < ncy) {
                coordinates1.add(y);
            }
            if (x > ncx && y > ncy) {
                coordinates2.add(y);
            }
        }

        // Array to store intermediate LIS lengths
        int[] dp = new int[n];

        // Calculate LIS for both parts
        int size1 = calculateLIS(coordinates1, dp);
        int size2 = calculateLIS(coordinates2, dp);

        // Combine results
        return size1 + size2 + 1;
    }

    // Helper function to calculate LIS using binary search
    private int calculateLIS(List<Integer> coordinates, int[] dp) {
        int size = 0;

        for (int i = 0; i < coordinates.size(); i++) {
            int y = coordinates.get(i);

            // Binary search for the position in dp array
            int pos = Arrays.binarySearch(dp, 0, size, y);
            if (pos < 0) pos = -(pos + 1);

            dp[pos] = y;

            if (pos == size) size++;
        }

        return size;
    }
}
```

---

This approach and solution should help others understand how to approach the problem of finding the maximum path length by leveraging LIS and the concept of partitioning coordinates based on a given point.