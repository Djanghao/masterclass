# Beats 100% runtime and memory | C# [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/5742447/](https://leetcode.com/problems/minimize-max-distance-to-gas-station/solutions/5742447/)

---

# Intuition
The problem is to place new gas stations in such a way that the maximum distance between any two adjacent gas stations is as small as possible. Think of it like trying to evenly distribute gas stations along a highway to minimize the longest gap between them.

# Approach
Binary Search: Guess the smallest possible maximum distance and adjust based on feasibility.

Feasibility Check: For each guess, see if you can place the required stations without exceeding that distance.

# Complexity
- Time complexity:
O(nlogM)

- Space complexity:
O(1)

# Code
```csharp []
public class Solution {
    public double MinmaxGasDist(int[] stations, int k) {
        double low = 0.0;
        double high = stations[stations.Length - 1] - stations[0];
        double epsilon = 1e-7;

        while (high - low > epsilon) {
            double mid = low + (high - low) / 2;
            if (CanPlaceStations(stations, k, mid)) {
                high = mid;  // Try for a smaller maximum distance
            } else {
                low = mid;  // Increase the maximum distance
            }
        }

        return low;
    }

    private bool CanPlaceStations(int[] stations, int k, double maxDist) {
        int neededStations = 0;

        for (int i = 0; i < stations.Length - 1; i++) {
            double distance = stations[i + 1] - stations[i];
            if (distance > maxDist) {
                neededStations += (int)Math.Ceiling(distance / maxDist) - 1;
            }
        }

        return neededStations <= k;
    }
}

```