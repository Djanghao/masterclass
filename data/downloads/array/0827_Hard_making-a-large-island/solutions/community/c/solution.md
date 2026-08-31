# Paint the picture

**Author:** votrubac
**Votes:** 456
**Link:** [https://leetcode.com/problems/making-a-large-island/solutions/127015/](https://leetcode.com/problems/making-a-large-island/solutions/127015/)

---

For each ```1``` in the grid, we paint all connected ```1``` with the next available color (2, 3, and so on).

We also remember the size of the island we just painted with that color.

Then, we analyze all ```0``` in the grid, and sum sizes of connected islands (based on the island color). 

> Note that the same island can connect to  ```0``` more than once.
 
The picture below demonstrates this idea (the answer is highlighted):
<p align="center">
  <img src="https://s3-lc-upload.s3.amazonaws.com/users/votrubac/image_1525310120.png">
</p>

**C++**
```cpp
int get(int i, int j, vector<vector<int>>& g) {
  return (min(i, j) < 0 || i >= g.size() || j >= g[0].size()) ? 0 : g[i][j];
}
int paint(int i, int j, int clr, vector<vector<int>>& g) {
  if (get(i, j, g) != 1)
    return 0;
  g[i][j] = clr;
  return 1 + paint(i + 1, j, clr, g) + paint(i - 1, j, clr, g) +
             paint(i, j + 1, clr, g) + paint(i, j - 1, clr, g);
}
int largestIsland(vector<vector<int>>& g, int res = 0) {
  vector<int> sizes = {0, 0};  // sentinel values; colors start from 2.
  for (auto i = 0; i < g.size(); ++i)
    for (auto j = 0; j < g[i].size(); ++j)
      if (g[i][j] == 1)
	    sizes.push_back(paint(i, j, sizes.size(), g));
  for (auto i = 0; i < g.size(); ++i)
    for (auto j = 0; j < g[i].size(); ++j)
      if (g[i][j] == 0) {
        unordered_set<int> s = { get(i + 1, j, g), get(i - 1, j, g),
                                 get(i, j + 1, g), get(i, j - 1, g) };
        res = max(res, accumulate(begin(s), end(s), 1, [&](int sum, int col) {
          return sum + sizes[col];
        }));
      }
  return res == 0 ? g.size() * g[0].size() : res;
}
```
Just to compare, below is a brute-force solution (accepted) that calculates the size of an island after flipping ```0```. It's  shorter, but runtime is above 400 ms. It would probably be a good idea so stick to a simpler solution to save time during contests.

> Update: the runtime of this solution is close to 2,000 ms now. 

**C++**
```cpp
int paint(int i, int j, int c, vector<vector<int>>& g, bool flip = false) {
  if (!flip && (min(i, j) < 0 || i >= g.size() || j >= g[0].size() ||
                g[i][j] == 0 || g[i][j] == c))
    return 0;
  g[i][j] = g[i][j] == 0 ? 0 : c;
  return 1 + paint(i + 1, j, c, g) + paint(i - 1, j, c, g) +
         paint(i, j + 1, c, g) + paint(i, j - 1, c, g);
}
int largestIsland(vector<vector<int>>& g, int res = 0) {
  for (int i = 0; i < g.size(); ++i)
    for (int j = 0; j < g[i].size(); ++j)
      if (g[i][j] == 0) {
        res = max(res, paint(i, j, 2, g, true));
        paint(i, j, 1, g, true);
      }
  return res == 0 ? g.size() * g[0].size() : res;
}
```