# 🚀✅🚀 Beats 101% - 1266. Minimum Time Visiting All Points (C++/Python/Java)

**Author:** arshbhatia1551
**Votes:** 31
**Link:** [https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4356038/](https://leetcode.com/problems/minimum-time-visiting-all-points/solutions/4356038/)

---

#### Intuition
The problem essentially asks for the minimum time to traverse a sequence of points on a 2D plane following specific movement rules. We can calculate the time it takes to move between consecutive points and sum these times to get the total time.

#### Approach
1. We define a helper function toTime that calculates the time to move from one point to another. The time is the maximum of the absolute differences in x and y coordinates.
2. We iterate through the points, starting from the second point (index 1), and accumulate the time using the toTime function.
3. The final accumulated time is the answer.

### Complexity
* The time complexity is O(n), where n is the number of points, as we iterate through the points once.
* The space complexity is O(1) as we use a constant amount of extra space.

# **CODE**

#### **C++**
```
class Solution {
public:
    int toTime(std::vector<int>& from, std::vector<int>& to) {
        int xDiff = std::abs(from[0] - to[0]);
        int yDiff = std::abs(from[1] - to[1]);
        
        return std::max(xDiff, yDiff);
    }

    int minTimeToVisitAllPoints(std::vector<std::vector<int>>& points) {
        int time = 0;

        for (int i = 1; i < points.size(); i++) {
            time += toTime(points[i - 1], points[i]);
        }

        return time;
    }
};
```

#### **Python3**
```
class Solution(object):
    def toTime(self, from_point, to_point):
        x_diff = abs(from_point[0] - to_point[0])
        y_diff = abs(from_point[1] - to_point[1])

        return max(x_diff, y_diff)

    def minTimeToVisitAllPoints(self, points):
        time = 0

        for i in range(1, len(points)):
            time += self.toTime(points[i - 1], points[i])

        return time
```

#### **Java**
```
class Solution {
    
    public int toTime(int[] from, int[] to) {
        int xDiff = Math.abs(from[0] - to[0]);
        int yDiff = Math.abs(from[1] - to[1]);
        
        return Math.max(xDiff, yDiff);
    }
    
    public int minTimeToVisitAllPoints(int[][] points) {
        int time = 0;
    
        for (int i = 1; i < points.length; i++) {
            time += toTime(points[i - 1], points[i]);
        }
        
        return time;
    }
}
```
![image](./images/0.jpeg)

