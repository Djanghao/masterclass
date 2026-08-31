# ✅ [Swift, C++, Python, Java]: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 1
**Link:** [https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/4047206/](https://leetcode.com/problems/min-cost-to-connect-all-points/solutions/4047206/)

---

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Swift
```
class Solution {
    func minCostConnectPoints(_ points: [[Int]]) -> Int {
        var dist = Array(repeating: Int.max, count: points.count)
        var (ans, points) = (0, points)
        
        for i in 0..<points.count - 1 {
            for j in i + 1..<points.count {
                dist[j] = min(dist[j], abs(points[i][0] - points[j][0]) +
                                           abs(points[i][1] - points[j][1]))
                if dist[j] < dist[i + 1] {
                    points.swapAt(j, i + 1)
                    dist.swapAt(j, i + 1)
                }
            }
            ans += dist[i + 1]
        }
        return ans
    }
}
```
# C++
```
class Solution {
 public:
  int minCostConnectPoints(vector<vector<int>>& points) {
    // dist[i] := min distance to connect points[i]
    vector<int> dist(points.size(), INT_MAX);
    int ans = 0;

    for (int i = 0; i < points.size() - 1; ++i) {
      for (int j = i + 1; j < points.size(); ++j) {
        // Try to connect points[i] with points[j].
        dist[j] = min(dist[j], abs(points[i][0] - points[j][0]) +
                                   abs(points[i][1] - points[j][1]));
        // Swap points[j] (point with min dist) with points[i + 1].
        if (dist[j] < dist[i + 1]) {
          swap(points[j], points[i + 1]);
          swap(dist[j], dist[i + 1]);
        }
      }
      ans += dist[i + 1];
    }

    return ans;
  }
};
```
# Python
```
class Solution:
  def minCostConnectPoints(self, points: List[int]) -> int:
    # dist[i] := min distance to connect points[i]
    dist = [math.inf] * len(points)
    ans = 0

    for i in range(len(points) - 1):
      for j in range(i + 1, len(points)):
        # Try to connect points[i] with points[j].
        dist[j] = min(dist[j], abs(points[i][0] - points[j][0]) +
                      abs(points[i][1] - points[j][1]))
        # Swap points[j] (point with min dist) with points[i + 1].
        if dist[j] < dist[i + 1]:
          points[j], points[i + 1] = points[i + 1], points[j]
          dist[j], dist[i + 1] = dist[i + 1], dist[j]
      ans += dist[i + 1]

    return ans
```
# Java
```
class Solution {
  public int minCostConnectPoints(int[][] points) {
    // dist[i] := min distance to connect points[i]
    int[] dist = new int[points.length];
    Arrays.fill(dist, Integer.MAX_VALUE);
    int ans = 0;

    for (int i = 0; i < points.length - 1; ++i) {
      for (int j = i + 1; j < points.length; ++j) {
        // Try to connect points[i] with points[j].
        dist[j] = Math.min(dist[j], Math.abs(points[i][0] - points[j][0]) +
                                        Math.abs(points[i][1] - points[j][1]));
        // Swap points[j] (point with min dist) with points[i + 1].
        if (dist[j] < dist[i + 1]) {
          final int[] tempPoint = points[j];
          points[j] = points[i + 1];
          points[i + 1] = tempPoint;
          final int tempDist = dist[j];
          dist[j] = dist[i + 1];
          dist[i + 1] = tempDist;
        }
      }
      ans += dist[i + 1];
    }

    return ans;
  }
}
```