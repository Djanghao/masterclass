# C++ | Clean and Concise | O(NLogN) ✅

**Author:** prantik0128
**Votes:** 25
**Link:** [https://leetcode.com/problems/erect-the-fence/solutions/2829276/](https://leetcode.com/problems/erect-the-fence/solutions/2829276/)

---


Upvote if you like it! \uD83D\uDC4D

**Code:**
```
class Solution {
public:
    vector<vector<int>> outerTrees(vector<vector<int>>& trees) {
      int n = trees.size();
      if (n <= 3) return trees;
      sort(trees.begin(), trees.end(), [](const vector<int>& a, const vector<int>& b) {
        return a[0] < b[0] || (a[0] == b[0] && a[1] < b[1]);
      });
      vector<vector<int>> hull;
      for (int i = 0; i < n; ++i) {
        while (hull.size() >= 2 && cross(hull[hull.size() - 2], hull.back(), trees[i]) < 0) {
          hull.pop_back();
        }
        hull.push_back(trees[i]);
      }
      hull.pop_back();
      for (int i = n - 1; i >= 0; --i) {
        while (hull.size() >= 2 && cross(hull[hull.size() - 2], hull.back(), trees[i]) < 0) {
          hull.pop_back();
        }
        hull.push_back(trees[i]);
      }
      hull.pop_back();
      sort(hull.begin(), hull.end());
      hull.erase(unique(hull.begin(), hull.end()), hull.end());
      return hull;
    }
private:
    int cross(const vector<int>& a, const vector<int>& b, const vector<int>& c) {
      return (b[0] - a[0]) * (c[1] - a[1]) - (b[1] - a[1]) * (c[0] - a[0]);
    }
};
```
----
**Time Complexity : O(NLogN)
Space Complexity: O(N)**