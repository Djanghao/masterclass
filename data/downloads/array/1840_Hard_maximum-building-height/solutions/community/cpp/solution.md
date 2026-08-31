# [C++] O(n log n) Greedy + Sorting

**Author:** alexunxus
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-building-height/solutions/3134135/](https://leetcode.com/problems/maximum-building-height/solutions/3134135/)

---

# Intuition and Approach
<!-- Describe your first thoughts on how to solve this problem. -->

## First step: Make restrictions achievable!
Firstly, the restrictions may not hold true due to the constraint "the height differences between every two adjacent building should not exceed 1". For example:

```
0     2    15     2 <- restriction
1  2  3  4  5  6  7 <- position
```

The restriction at position 3 can be achieved by 
```
0     2    15     2 <- restriction
0  1  2  3  4  3  2 <- actual height
1  2  3  4  5  6  7 <- position
```
However, the restriction at position 5 is not achievable. We can first sort the restrictions by their horizontal position and scan from left to right and check if $(x_i, r_i) (x_{i+1}, r_{i+1})$ satisfies:
$$r_{i+1} <= r_{i} + (x_{i+1} - x_i)$$, if not, we should set $r_{i+1} = r_{i} + (x_{i+1} - x_i)$. 
By doing so, we can always guarantee when moving from lower x coordinate to higher ones, the higher restrictions is always "within the reach" of the previous one.

However, we should do the same check from right to left. So when finishing the left-to-right check, we have to do the right-to-left check:
$$r_{i} <= r_{i+1} + (x_{i+1} - x_i)$$, if not, we should set $r_{i} = r_{i+1} + (x_{i+1} - x_i)$. Then now all the restrictions are achieveable.(so I will now replace $r_i$, with $y_i$)

Finally there is some implementation details. For example, we should add (1, 0) as one of the constraint. In addition, we should also bound the postion at $n$ by a large integer(e.g. 1e9, think about why? hint: the restriction at 1 is 0).

## Second step: Find the maximal height between every adjacent buildings with restrictions
The next part is to fill the gap between two restricted position. For $(x_i, y_i), (x_{i+1}, y_{i+1})$, we hope we can keep building on the line 
$$y = x - x_i + y_i$$ to maximize the height within $[x_i, x_{i+1}]$.

From the opposite direction, we hope to build the houses on the trajectory
$$y = -(x - x_{i+1}) + y_{i+1}$$.

However, for position $x_i < x < x_{i+1}$, we should build it with height 
$$\\min(x - x_i + y_i, -(x - x_{i+1}) + y_{i+1})$$. An easy way is to find the intersection of these two lines. If they intersect beyound the interval, the highest building must lie on either $x_i$ or $x_{i+1}$. If they intersect within the interval, we should check the height of the intersection.
```    
        /
       / \\
      /   \\
    \u53E3     \\
    \u53E3      \u53E3
____\u53E3      \u53E3________
```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(n\\log n)$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(quicksort)$

# Code
```
struct Point {
    int x, y;
    Point() {x = y = 0;}
    Point(const int & _x, const int & _y) {
        x = _x, y = _y;
    }

    bool operator<(const Point & p) {
        return x == p.x?y <= p.y:x<p.x;
    }
};

class Solution {
public:
    int maxBuilding(int n, vector<vector<int>>& restrictions) {
        vector<Point> pts;
        for (auto & r: restrictions) {
            pts.push_back({r[0], r[1]});
        }
        pts.push_back({1, 0});
        ::sort(begin(pts), end(pts));
        if (pts.back().x != n) {
            pts.push_back({n, 1000000000});
        }
        
        int sz = pts.size();
        for (int i = 0; i < sz-1; ++i) {
            int xdiff = pts[i+1].x - pts[i].x;
            if (pts[i+1].y > pts[i].y + xdiff) {
                pts[i+1].y = pts[i].y + xdiff;
            }
        }
        for (int i = sz-2; i>= 0; --i) {
            int xdiff = pts[i+1].x - pts[i].x;
            if (pts[i].y > pts[i+1].y + xdiff) {
                pts[i].y = pts[i+1].y + xdiff;
            }
        }
        int h = 0;
        for (int i = 0; i < sz-1; ++i) {
            h = max(h, max(pts[i].y, pts[i+1].y));
            int x1 = pts[i].x, x2 = pts[i+1].x;
            int y1 = pts[i].y, y2 = pts[i+1].y;
            int twox = x1+x2+y2-y1;
            if (twox >= 2*x1 && twox <= 2*x2) {
                int mid = twox/2;
                int newy = y1 + mid - x1;
                h = max(newy, h);
            }
        }
        return h;
    }
};
```

## Optimized Two Pass Solution
```
struct Point {
    int x, y;
    Point() {x = y = 0;}
    Point(const int & _x, const int & _y) {x = _x, y = _y;}

    bool operator<(const Point & p) {
        return x == p.x?y <= p.y:x<p.x;
    }
};

class Solution {
public:
    int maxBuilding(int n, vector<vector<int>>& restrictions) {
        vector<Point> pts;
        for (auto & r: restrictions) {
            pts.push_back({r[0], r[1]});
        }
        pts.push_back({1, 0});
        ::sort(begin(pts), end(pts));
        if (pts.back().x != n) {
            pts.push_back({n, n-1});
        }

        int sz = pts.size(), hmax = 0;
        for (int i = 0; i < sz-1; ++i) {
            int h = pts[i].y + pts[i+1].x - pts[i].x;
            if (pts[i+1].y > h) {
                pts[i+1].y = h;
            }
        }
        for (int i = sz-2; i>= 0; --i) {
            int h = pts[i+1].y + pts[i+1].x - pts[i].x;
            if (pts[i].y < h) {
                h = (pts[i].y + h)/2;
            }
            hmax = max(h, hmax);
            pts[i].y = min(pts[i].y, h);
        }
        return hmax;
    }
};
```