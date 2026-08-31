# C++ || Easy To Understand

**Author:** Vortexx2
**Votes:** 17
**Link:** [https://leetcode.com/problems/perfect-rectangle/solutions/2987814/](https://leetcode.com/problems/perfect-rectangle/solutions/2987814/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
If it is a valid rectangle, all interior points should have count 0, bootom left most and top right most point should have value 1, and top left and bottom right should have count -1. If it is different than this, it is not a perfect rectangle.


# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
 public:
  bool isRectangleCover(vector<vector<int>>& rectangles) {
    int n = rectangles.size();

    if (n == 1) return true;

    // maps all points to a respective calculation. If it is a valid rectangle,
    // all interior points should have count 0, bootom left most and top right
    // most point should have value 1, and top left and bottom right should have
    // count -1. If it is different than this, it is not a perfect rectangle.
    map<pair<int, int>, int> pointCounts;

    for (auto& rect : rectangles) {
      pointCounts[{rect[0], rect[1]}]++;
      pointCounts[{rect[2], rect[3]}]++;
      pointCounts[{rect[0], rect[3]}]--;
      pointCounts[{rect[2], rect[1]}]--;
    }

    int numMarks = 0;

    for (auto it = pointCounts.begin(); it != pointCounts.end(); it++) {
      if (it->second != 0) {

        // this condition is added because in not perfect 
        // rectangles, overlapping corners will cause the absolute
        // value of that corner to go beyond 1
        if (abs(it->second) != 1) return false;

        numMarks++;
      }
    }

    return numMarks == 4;
  }
};
```


Edit: Added comment for != 1 case.