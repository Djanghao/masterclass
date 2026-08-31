# Solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/color-the-triangle-red/solutions/3445841/](https://leetcode.com/problems/color-the-triangle-red/solutions/3445841/)

---

```C++ []
class Solution {
 public:
  vector<vector<int>> colorRed(const int n) {
    constexpr int rows_per_group = 4;
    vector<vector<int>> ret;
    int row = n;
    for (; row >= rows_per_group; row -= rows_per_group) {
      for (int current_row = row, current_col = 1; current_col <= 2 * current_row - 1; current_col += 2) {
        ret.emplace_back(vector<int>{current_row, current_col});
      }
      ret.emplace_back(vector<int>{row - 1, 2});
      for (int current_row = row - 2, current_col = 3; current_col <= 2 * current_row - 1; current_col += 2) {
        ret.emplace_back(vector<int>{current_row, current_col});
      }
      ret.emplace_back(vector<int>{row - 3, 1});
    }
    for (; row >= 1; --row) {
      ret.emplace_back(vector<int>{row, 1});
      if (2 * row - 1 != 1) {
        ret.emplace_back(vector<int>{row, 2 * row - 1});
      }
    }
    return ret;
  }
};
```

```Python3 []
class Solution:
  def colorRed(self, n: int) -> List[List[int]]:
    ans = []
    tipSize = n % 4

    if tipSize >= 1:
      ans.append([1, 1])

    for i in range(2, tipSize + 1):
      ans.append([i, 1])
      ans.append([i, 2 * i - 1])

    for i in range(tipSize + 1, n, 4):
      ans.append([i, 1])

      for j in range(1, i + 1):
        ans.append([i + 1, 2 * j + 1])
      ans.append([i + 2, 2])
      
      for j in range(i + 2 + 1):
        ans.append([i + 3, 2 * j + 1])

    return ans
```

```Java []
class Solution {
    public int[][] colorRed(int n) {
        List<int[]> res = new ArrayList<>();
        for (int i = n; i - 4 >= 0; i -= 4) {
            for (int j = 1; j <= 2 * i - 1; j += 2) res.add(new int[]{i, j});
            res.add(new int[]{i - 1, 2});
            for (int j = 2 * (i - 2) - 1; j > 2; j -= 2) res.add(new int[]{i - 2, j});
            res.add(new int[]{i - 3, 1});
        }
        int t = n % 4;
        if (t >= 1) res.add(new int[]{1, 1});
        if (t >= 2) {
            res.add(new int[]{2, 1});
            res.add(new int[]{2, 3});
        }
        if (t >= 3) {
            res.add(new int[]{3, 1});
            res.add(new int[]{3, 5});
        }
        return res.toArray(new int[res.size()][]);
    }
}
```
