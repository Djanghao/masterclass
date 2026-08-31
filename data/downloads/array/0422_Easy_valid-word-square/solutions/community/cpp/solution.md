# Solution

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/3353845/](https://leetcode.com/problems/valid-word-square/solutions/3353845/)

---

```C++ []
class Solution {
public:
    bool validWordSquare(vector<string>& w) {
        for(int i = 0; i < w.size(); i++)
            for(int j = 0; j < w[i].size(); j++)
                if(j >= w.size() || i >= w[j].size() || w[i][j] != w[j][i]) return false;
        return true;
    }
};
```

```Python3 []
class Solution:
    def validWordSquare(self, words: List[str]) -> bool:
        return words == list(map(''.join, itertools.zip_longest(*words, fillvalue='')))
```

```Java []
class Solution {
    public boolean validWordSquare(List<String> words) {
        int n = words.size();
        if (n != words.get(0).length())  return false;
        byte[][] grid = new byte[n][n];
        byte[] gridRow;
        for (int row = 0; row < n; row++) {
            String s = words.get(row);
            if (s.length() > n)  return false;
            gridRow = grid[row];
            s.getBytes(0, s.length(), gridRow, 0);
            for (int col = row; col >= 0; col--)
                if (gridRow[col] != grid[col][row])  return false;
        }
        return true;
    }
}
```
