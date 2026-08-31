# C++ beat 100% time&space, simple hash

**Author:** edwardwang618
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-distinct-islands-ii/solutions/2899314/](https://leetcode.com/problems/number-of-distinct-islands-ii/solutions/2899314/)

---

# Code
```
class Solution {
 public:
  using PII = pair<int, int>;
  int numDistinctIslands2(vector<vector<int>>& g) {
    const double eps = 1e-10;
    int m = g.size(), n = g[0].size();
    vector<double> hashs;
    vector<PII> v;
    for (int i = 0; i < m; i++)
      for (int j = 0; j < n; j++)
        if (g[i][j] == 1) {
          v.clear();
          dfs(i, j, v, g);
          double h = get_hash(v);
          bool found = false;
          for (double x : hashs)
            if (abs(x - h) < eps) {
              found = true;
              break;
            }

          if (!found) hashs.push_back(h);
        }

    return hashs.size();
  }

  double get_hash(vector<PII>& v) {
    double h = 0;
    for (int i = 0; i < v.size(); i++)
      for (int j = i + 1; j < v.size(); j++) {
        auto [x1, y1] = v[i];
        auto [x2, y2] = v[j];
        int dx = x1 - x2, dy = y1 - y2;
        h += sqrt(dx * dx + dy * dy);
      }
    return h;
  }

  void dfs(int x, int y, vector<PII>& v, vector<vector<int>>& g) {
    g[x][y] = 0;
    v.push_back({x, y});
    static int d[] = {-1, 0, 1, 0, -1};
    for (int i = 0; i < 4; i++) {
      int nx = x + d[i], ny = y + d[i + 1];
      if (0 <= nx && nx < g.size() && 0 <= ny && ny < g[0].size() &&
          g[nx][ny] == 1)
        dfs(nx, ny, v, g);
    }
  }
};
```