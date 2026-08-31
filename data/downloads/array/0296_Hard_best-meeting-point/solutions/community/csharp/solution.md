# Easy Solution

**Author:** Shubham_T95
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-meeting-point/solutions/3200561/](https://leetcode.com/problems/best-meeting-point/solutions/3200561/)

---

# Intuition
The distance between two points can be calculated using the Manhattan distance formula. The idea is to calculate the distance of each 1 in the grid from a hypothetical meeting point and then find the sum of all these distances.

# Approach
We will first find the coordinates of all 1's in the grid. Then we will calculate the total distance for each point by finding the distance between that point and all other points in the grid. We will maintain a variable to store the minimum distance so far, and update it if the total distance for the current point is less than the minimum distance. Finally, we will return the minimum distance.

# Complexity
- Time complexity:
Time complexity: O(m^2*n^2) where m and n are the dimensions of the grid. This is because we are iterating through all possible meeting points and calculating the total distance for each point by finding the distance between that point and all other points in the grid.

Space complexity: O(m*n) to store the coordinates of all 1's in the grid.


# Code
```
public class Solution {
    public int MinTotalDistance(int[][] grid) {
        int m = grid.Length;
        int n = grid[0].Length;
        
        List<int> rows = new List<int>();
        List<int> cols = new List<int>();
        
        // Collect the x-coordinates and y-coordinates of the houses
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    rows.Add(i);
                    cols.Add(j);
                }
            }
        }
        
        // Find the median of the x-coordinates and y-coordinates
        int medianRow = FindMedian(rows);
        int medianCol = FindMedian(cols);
        
        // Compute the total travel distance
        int distance = 0;
        for (int i = 0; i < rows.Count; i++) {
            distance += Math.Abs(rows[i] - medianRow) + Math.Abs(cols[i] - medianCol);
        }
        
        return distance;
    }

    private int FindMedian(List<int> list) {
        list.Sort();
        int n = list.Count;
        if (n % 2 == 0) {
            return (list[n/2] + list[n/2 - 1]) / 2;
        } else {
            return list[n/2];
        }
    }

}
```