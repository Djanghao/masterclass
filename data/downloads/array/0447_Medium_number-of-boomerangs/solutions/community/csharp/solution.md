# Greedy approach

**Author:** buiphonghau2018
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-boomerangs/solutions/5111722/](https://leetcode.com/problems/number-of-boomerangs/solutions/5111722/)

---



# Code
```
public class Solution {
    double CalculateDistance(double x1, double y1, double x2, double y2) {
        double xDiff = x2 - x1;
        double yDiff = y2 - y1;
        return Math.Sqrt(xDiff * xDiff + yDiff * yDiff);
    }
    public int NumberOfBoomerangs(int[][] points) {
        double[][] distances = new double[points.Length][];
        for (int i = 0; i < points.Length; i++) {
            distances[i] = new double[points.Length];
            for (int j = 0; j < points.Length; j++) {
                distances[i][j] = CalculateDistance(points[i][0], points[i][1], points[j][0], points[j][1]);
            }
        }
        int count = 0;
        for (int i = 0; i < points.Length; i++) {
            for (int j = 0; j < distances.Length - 1; j++) {
                for (int k = j + 1; k < distances.Length; k++) {
                    if (distances[i][j] == distances[i][k]) {
                        count += 2;
                    }
                }
            }
        }
        return count;
    }
}
```