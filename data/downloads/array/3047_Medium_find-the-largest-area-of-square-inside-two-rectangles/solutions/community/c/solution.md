# C++ Use helper struct to simplify problem | O(n^2)

**Author:** Adamm93
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4862425/](https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles/solutions/4862425/)

---

```c++
class Solution {
  struct Rectangle {
    int xl, xr;
    int yb, yt;
    
    Rectangle() : xl(0), yb(0), xr(0), yt(0) {}
    Rectangle(int a, int b, int c, int d) : xl(a), yb(b), xr(c), yt(d) {}
    
    inline int width() const { return abs(xr - xl); }
    inline int height() const { return abs(yt - yb); }
    
	// Check if the rectangles intersect and store the intersecting rectangle in region
    inline bool intersects(const Rectangle& other, Rectangle& region) const {
	  // rectangles must not overlap if the left side is to the right of the right side of the other and vice versa
	  // similarly for the top and bottom
      if (xl > other.xr || yb > other.yt ||
          other.xl > xr || other.yb > yt) return false;
	  // the intersecting region must be maximum of the bottom left coords and the minimum of the top right coords
      region = Rectangle(max(xl, other.xl), max(yb, other.yb), min(xr, other.xr), min(yt, other.yt));
      return true;
    }
  };
public:
    long long largestSquareArea(vector<vector<int>>& bottomLeft, vector<vector<int>>& topRight) {
      int n = bottomLeft.size();
      long long res = 0;
      Rectangle region;
	  // check every unique pair of rectangles - O(n^2) pairs
      for (int i = 0; i < n; i++) {
        Rectangle a(bottomLeft[i][0], bottomLeft[i][1], topRight[i][0], topRight[i][1]);
        for (int j = i + 1; j < n; j++) {          
          Rectangle b(bottomLeft[j][0], bottomLeft[j][1], topRight[j][0], topRight[j][1]);
          if (a.intersects(b, region)) {
		    // the largest intersecting square must have dimensions of the smaller of the width and height
            long long dim = min(region.width(), region.height());
            res = max(dim, res);
          }
        }
      }
	  // Return the area of the square with the largest dimension 
      return res*res;
    }
};
```