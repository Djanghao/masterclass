# ✅Beats 100% - C++, JAVA, Python, JavaScript || Easiest Solutions with explanation || 2 Approaches

**Author:** Vivekkrsk
**Votes:** 14
**Link:** [https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4432837/](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4432837/)

---


---


# **Please Upvote If It Is Helpfull**


---

# Approach
<!-- Describe your approach to solving the problem. -->

1. **Sort Points by X-Coordinates:** The code begins by sorting the `points` vector based on their x-coordinates. This ensures that points are arranged from left to right, which is crucial for calculating widths accurately.

2. **Initialize Maximum Width:** It initializes `ans` to 0, which will store the maximum width found so far.

3. **Iterate Through Sorted Points:** A loop iterates through the sorted points, starting from the second point. This is because the width is calculated between pairs of points.

4. **Calculate Width and Update Maximum:** For each pair of consecutive points (current and previous), it calculates the width by subtracting the x-coordinate of the previous point from the x-coordinate of the current point. This difference represents the horizontal distance between them. The `ans` variable is updated if this width is greater than the current maximum width.

5. **Return Maximum Width:** After iterating through all pairs, the code returns the `ans` variable, which holds the largest width found among all pairs of points in the vertical area.


# Complexity
- Time complexity:O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int maxWidthOfVerticalArea(vector<vector<int>>& points) {
        sort(points.begin(), points.end());
        
        int ans = 0;
        for (int i = 1; i < points.size(); i++) {
            ans = max(ans, points[i][0] - points[i - 1][0]);
        }
        
        return ans;
    }
};
```
```java []
class Solution {
public:
    int maxWidthOfVerticalArea(vector<vector<int>>& points) {
        Arrays.sort(points, (p1, p2) -> Integer.compare(p1[0], p2[0])); // Sort by x-coordinates
        
        int maxWidth = 0;
        for (int i = 1; i < points.length; i++) {
            maxWidth = Math.max(maxWidth, points[i][0] - points[i - 1][0]);
        }
        
        return maxWidth;
    }
};
```
```python []
class Solution(object):
    def maxWidthOfVerticalArea(self, points):
        """
        :type points: List[List[int]]
        :rtype: int
        """
        points.sort(key=lambda p: p[0])  # Sort by x-coordinates

        maxWidth = 0
        for i in range(1, len(points)):
            maxWidth = max(maxWidth, points[i][0] - points[i - 1][0])

        return maxWidth
        
```
```javascript []
/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort((a, b) => a[0] - b[0]); // Sort by x-coordinates

    let maxWidth = 0;
    for (let i = 1; i < points.length; i++) {
        maxWidth = Math.max(maxWidth, points[i][0] - points[i - 1][0]);
    }

    return maxWidth;
};
```
```ruby []
# @param {Integer[][]} points
# @return {Integer}
def max_width_of_vertical_area(points)
  points.sort_by! { |p| p[0] }  # Sort by x-coordinates

  max_width = 0
  1.upto(points.length - 1) do |i|
    max_width = [max_width, points[i][0] - points[i - 1][0]].max
  end

  max_width
end
```
```go []
func maxWidthOfVerticalArea(points [][]int) int {
    sort.Slice(points, func(i, j int) bool { return points[i][0] < points[j][0] }) // Sort by x-coordinates

    maxWidth := 0
    for i := 1; i < len(points); i++ {
        maxWidth = max(maxWidth, points[i][0] - points[i-1][0])
    }

    return maxWidth
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

```


# Approach
<!-- Describe your approach to solving the problem. -->

 **Here's the approach in 5 points:**

1. **Collect Unique X-Coordinates:**
   - Creates a `set` named `uniqueX` to store unique x-coordinates from the input `points`.
   - Iterates through `points` and inserts each point's x-coordinate into `uniqueX`.

2. **Initialize Variables:**
   - Sets `maxDifference` to 0 to track the largest width found so far.
   - Sets `previousX` to `INT_MIN` to represent the absence of a previous x-coordinate.

3. **Iterate Through Unique X-Coordinates:**
   - Iterates through each distinct x-coordinate `x` in the `uniqueX` set.

4. **Calculate Width and Update Maximum:**
   - If `previousX` is not `INT_MIN` (meaning a previous x-coordinate exists), it calculates the width between the current and previous x-coordinates (`x - previousX`).
   - Updates `maxDifference` if the calculated width is larger than the current maximum.

5. **Return Maximum Width:**
   - After processing all unique x-coordinates, the code returns `maxDifference`, representing the largest width found in the vertical area.



# Complexity
- Time complexity:O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int maxWidthOfVerticalArea(vector<vector<int>>& points) {
        set<int> uniqueX; 
        
        for (const auto& point : points) {
            uniqueX.insert(point[0]); 
        }
        
        int maxDifference = 0;
        int previousX = INT_MIN;
        
        for (int x : uniqueX) {
            if (previousX != INT_MIN) {
                maxDifference = max(maxDifference, x - previousX); 
            }
            previousX = x;
        }
        
        return maxDifference;
    }
};
```
```java []
import java.util.HashSet;
import java.util.Set;

class Solution {
    public int maxWidthOfVerticalArea(int[][] points) {
        Set<Integer> uniqueX = new HashSet<>();

        for (int[] point : points) {
            uniqueX.add(point[0]);
        }

        int maxDifference = 0;
        int previousX = Integer.MIN_VALUE;

        for (int x : uniqueX) {
            if (previousX != Integer.MIN_VALUE) {
                maxDifference = Math.max(maxDifference, x - previousX);
            }
            previousX = x;
        }

        return maxDifference;
    }
}

```
```python []
def maxWidthOfVerticalArea(points):
    unique_x = set()

    for point in points:
        unique_x.add(point[0])

    max_difference = 0
    previous_x = float('-inf')  # Represents negative infinity

    for x in unique_x:
        if previous_x != float('-inf'):
            max_difference = max(max_difference, x - previous_x)
        previous_x = x

    return max_difference

        
```
```javascript []
/**
 * @param {number[][]} points
 * @return {number}
 */
function maxWidthOfVerticalArea(points) {
  const uniqueX = new Set();

  for (const point of points) {
    uniqueX.add(point[0]);
  }

  let maxDifference = 0;
  let previousX = Number.MIN_SAFE_INTEGER;

  for (const x of uniqueX) {
    if (previousX !== Number.MIN_SAFE_INTEGER) {
      maxDifference = Math.max(maxDifference, x - previousX);
    }
    previousX = x;
  }

  return maxDifference;
}

```
```ruby []
# @param {Integer[][]} points
# @return {Integer}
def max_width_of_vertical_area(points)
  unique_x = Set.new

  points.each { |point| unique_x.add(point[0]) }

  max_difference = 0
  previous_x = -Float::INFINITY  # Represents negative infinity

  unique_x.each do |x|
    if previous_x != -Float::INFINITY
      max_difference = [max_difference, x - previous_x].max
    end
    previous_x = x
  end

  max_difference
end

```
```go []
func maxWidthOfVerticalArea(points [][]int) int {
    uniqueX := make(map[int]struct{}) // Use a map to store unique x-coordinates

    for _, point := range points {
        uniqueX[point[0]] = struct{}{}
    }

    maxWidth := 0
    previousX := math.MinInt32 // Represents negative infinity

    for x := range uniqueX {
        if previousX != math.MinInt32 {
            maxWidth = max(maxWidth, x-previousX)
        }
        previousX = x
    }

    return maxWidth
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

```


---
![imgleetcode.png](./images/0.png)





