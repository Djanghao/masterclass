# [C++] Polar coordinates generation

**Author:** cgsgak1
**Votes:** 7
**Link:** [https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/1113767/](https://leetcode.com/problems/generate-random-point-in-a-circle/solutions/1113767/)

---

```
class Solution {
    double r, x, y;
public:
    Solution(double radius, double x_center, double y_center) : r(radius), x(x_center), y(y_center) {
    }
    
    vector<double> randPoint() {
		 // sqrt makes uniform distribution, because the area of circle depends on radius^2
		 // dist is in range [0..r]
        double dist = sqrt((double)rand() / RAND_MAX) * r;
		// Angle is in range [0..2*Pi]
        double angle = (double)rand() / RAND_MAX * 2 * M_PI;
        
		// Transform polar coordinates to Cartesian coordinates
        return {x + dist * cos(angle), y + dist * sin(angle)};
    }
};
```