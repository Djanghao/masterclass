# C# Brute Force Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/5747044/](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/solutions/5747044/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->brute-force solution, where we check each point for each query to determine if it lies within the circle. In this case, the brute-force approach involves calculating the squared distance for each point relative to the center of each circle.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  Initialization: Create an array answer to store the result for each query.
//  Iterate over queries: For each query, extract the circle's center (xi, yi) and its radius rj, and
//  calculate rj^2 (squared radius) to avoid computing square roots.
//  Iterate over points: for each point (xi, yi), calculate the squared distance between the point and the 
//  circle's center. If the squared distance is less than or equal to rj^2, the point is considered inside 
//  the circle or on its border.
//  Count Points: For each query, count how many points lie within or on the border of the circle and store 
//  the result in the 'answer' array.
//  Return the Result: After processing all queries, return the answer array.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(n * m), where 'n' is the number of points and
'm' is the number of queries.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(m), where 'm' is the number of queries.
___

# Code
```csharp []
public class Solution {
    public int[] CountPoints(int[][] points, int[][] queries) {
        int[] answer = new int[queries.Length];
        
        // Iterate over each query
        for (int i = 0; i < queries.Length; i++) {
            int xj = queries[i][0];
            int yj = queries[i][1];
            int rj = queries[i][2];
            int radiusSquared = rj * rj;
            
            // Count points inside this circle
            int count = 0;
            foreach (var point in points) {
                int xi = point[0];
                int yi = point[1];
                
                // Calculate squared distance from the center of the circle
                int distanceSquared = (xj - xi) * (xj - xi) + (yj - yi) * (yj - yi);
                
                // If the point is inside or on the border of the circle
                if (distanceSquared <= radiusSquared) {
                    count++;
                }
            }
            
            // Store the count for this query
            answer[i] = count;
        }
        
        return answer;
    }
}
```