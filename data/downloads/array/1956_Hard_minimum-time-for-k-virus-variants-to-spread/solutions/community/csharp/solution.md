# Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-for-k-virus-variants-to-spread/solutions/5941798/](https://leetcode.com/problems/minimum-time-for-k-virus-variants-to-spread/solutions/5941798/)

---

![image.png](./images/0.png)


# Intuition
Find a point on a grid where a specific number of virus variants can meet in the shortest time possible. The viruses spread in all four cardinal directions, and each point can be influenced by multiple variants. Understanding the concept of Manhattan distance helps visualize how far each virus can spread from its origin point.

# Approach
Determine the bounding box of the points, iterate through all possible points within this box, calculate the Manhattan distances from each point to all virus origins, sort these distances, and find the k-th smallest distance to identify the minimum time for k variants to converge.

# Complexity
- Time complexity:
O(n * m * (n log n)), where n is the number of points and m is the area of the bounding box. This accounts for iterating through the grid and sorting the distances for each point.

- Space complexity:
 O(n), used for storing the distances for each point in the grid.

# Code
```csharp []
class Solution {
    // Calculate the Manhattan distance between two points
    private int CalculateManhattanDistance(int[] point1, int[] point2) {
        return Math.Abs(point1[0] - point2[0]) + Math.Abs(point1[1] - point2[1]);
    }

    // Main function to find the minimum number of days for k virus variants to spread
    public int MinDayskVariants(int[][] points, int k) {
        // Initialize boundaries for the bounding box
        int left = 100, right = 0, top = 0, bottom = 100;

        // Determine the bounding box for the given points
        foreach (var point in points) {
            left = Math.Min(left, point[0]);   // Find the minimum x-coordinate
            right = Math.Max(right, point[0]); // Find the maximum x-coordinate
            bottom = Math.Min(bottom, point[1]); // Find the minimum y-coordinate
            top = Math.Max(top, point[1]);      // Find the maximum y-coordinate
        }

        // Initialize the minimum distance to a very large value
        int minDistance = int.MaxValue;

        // Check all possible (x, y) positions within the bounding box
        for (int x = left; x <= right; x++) {
            for (int y = bottom; y <= top; y++) {
                // List to store distances from the current point (x, y) to all virus points
                List<int> distances = new List<int>();
                
                // Calculate Manhattan distances to each point
                foreach (var point in points) {
                    distances.Add(CalculateManhattanDistance(new[] { x, y }, point));
                }

                // Sort the distances to find the k-th smallest distance
                distances.Sort();
                // Update the minimum distance found
                minDistance = Math.Min(minDistance, distances[k - 1]);
            }
        }

        // Return the minimum distance for k virus variants to spread
        return minDistance;
    }
}

```