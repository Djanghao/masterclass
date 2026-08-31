# Integer O(n^3) in C++/Rust/Go

**Author:** vadimpiven
**Votes:** 2
**Link:** [https://leetcode.com/problems/max-points-on-a-line/solutions/3018636/](https://leetcode.com/problems/max-points-on-a-line/solutions/3018636/)

---

# Intuition
Taking two points construct equation for line through these two points $$(y_2 - y_1) * (x - x_1) = (x_2 - x_1) * (y - y_1)$$, then for all remaining points check if they are on this line.

# Approach
Stick to integer numbers to get rid of rounding problems.
It's possible to calculate integer coefficients of line (kx, ky, b) and map line to set of indexes of points laying on line, but for 300 dots it would be overkill.

# Complexity
- Time complexity:
$$O(n^3)$$ as there are three loops over input array

- Space complexity:
$$O(1)$$ as no addirional container is used

# Code in C++
```
class Solution {
public:
    int maxPoints(vector<vector<int>>& points) {
        const size_t n = points.size();
        if (n < 3) {
            return static_cast<int>(n);
        }

        int maxPointsOnLine = 2;
        for (size_t i = 0; i < n - 2; ++i) {
            for (size_t j = i + 1; j < n - 1; ++j) {
                const int x1 = points[i][0], y1 = points[i][1],
                          x2 = points[j][0], y2 = points[j][1];
                int pointsOnLine = 2;
                for (size_t k = j + 1; k < n; ++k) {
                    const int x = points[k][0], y = points[k][1];
                    if ((y2 - y1) * (x - x1) == (x2 - x1) * (y - y1)) {
                        ++pointsOnLine;
                    }
                }
                maxPointsOnLine = std::max(maxPointsOnLine, pointsOnLine);
            }
        }
        return maxPointsOnLine; 
    }
};
```

# Code in Rust
```
impl Solution {
    pub fn max_points(points: Vec<Vec<i32>>) -> i32 {
        let n = points.len();
        if n < 3 {
            return n as i32
        }

        let mut maxPointsOnLine = 2;
        for i in 0 .. n - 2 {
            for j in i + 1 .. n - 1 {
                let (x1, y1) = (points[i][0], points[i][1]);
                let (x2, y2) = (points[j][0], points[j][1]);
                let mut pointsOnLine = 2;
                for k in j + 1 .. n {
                    let (x, y) = (points[k][0], points[k][1]);
                    if (y2 - y1) * (x - x1) == (x2 - x1) * (y - y1) {
                        pointsOnLine += 1;
                    }
                }
                maxPointsOnLine = std::cmp::max(maxPointsOnLine, pointsOnLine);
            }
        }
        maxPointsOnLine
    }
}
```

# Code in Go
```
func maxPoints(points [][]int) int {
    n := len(points)
    if n < 3 {
        return n
    }

    maxPointsOnLine := 2
    for i := 0; i < n - 2; i++ {
        for j := i + 1; j < n - 1; j++ {
            x1, y1 := points[i][0], points[i][1]
            x2, y2 := points[j][0], points[j][1]
            pointsOnLine := 2
            for k := j + 1; k < n; k++ {
                x, y := points[k][0], points[k][1]
                if (y2 - y1) * (x - x1) == (x2 - x1) * (y - y1) {
                    pointsOnLine++
                }
            }
            if pointsOnLine > maxPointsOnLine {
                maxPointsOnLine = pointsOnLine
            }
        }
    }
    return maxPointsOnLine
}
```