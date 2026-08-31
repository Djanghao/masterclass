# 💥💥Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-position-for-a-service-centre/solutions/5837609/](https://leetcode.com/problems/best-position-for-a-service-centre/solutions/5837609/)

---

![image.png](./images/0.png)



# Intuition
The goal is to place a service center in a way that minimizes the total distance to all customers. Since distance is influenced by the coordinates of the customers, the ideal position often lies near the average of their locations.

# Approach
We start by calculating an average position of all customers and then use a gradient descent method to iteratively explore nearby positions, adjusting the center to minimize the total distance until improvements are minimal.

# Complexity
- Time complexity:
The time complexity is approximately O(N . M) where N is the number of customers and M is the number of iterations until convergence, which is usually small

- Space complexity:
O(1) for variables, plus O(N) for storing customer positions, making it efficient for the problem constraints.

# Code
```csharp []
public class Solution {
    public double GetMinDistSum(int[][] positions) {
        double xCenter = 0, yCenter = 0;
        foreach (var pos in positions) {
            xCenter += pos[0];
            yCenter += pos[1];
        }
        xCenter /= positions.Length;
        yCenter /= positions.Length;

        double minDistSum = GetDistanceSum(positions, xCenter, yCenter);
        double stepSize = 1.0; // Initial step size for gradient descent
        double tolerance = 1e-7; // Precision tolerance

        while (stepSize >= tolerance) {
            bool improved = false;

            // Try moving in each direction
            for (double dx = -stepSize; dx <= stepSize; dx += stepSize) {
                for (double dy = -stepSize; dy <= stepSize; dy += stepSize) {
                    if (dx == 0 && dy == 0) continue; // Skip the origin (no movement)
                    
                    double newX = xCenter + dx;
                    double newY = yCenter + dy;
                    double newDistSum = GetDistanceSum(positions, newX, newY);
                    
                    if (newDistSum < minDistSum) {
                        minDistSum = newDistSum;
                        xCenter = newX;
                        yCenter = newY;
                        improved = true;
                    }
                }
            }

            if (!improved) {
                stepSize *= 0.5; // Reduce the step size if no improvement
            }
        }

        return minDistSum;
    }

    private double GetDistanceSum(int[][] positions, double x, double y) {
        double sum = 0;
        foreach (var pos in positions) {
            double dist = Math.Sqrt(Math.Pow(pos[0] - x, 2) + Math.Pow(pos[1] - y, 2));
            sum += dist;
        }
        return sum;
    }
}

```