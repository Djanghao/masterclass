# Two Pointers

**Author:** votrubac
**Votes:** 108
**Link:** [https://leetcode.com/problems/rotating-the-box/solutions/1210134/](https://leetcode.com/problems/rotating-the-box/solutions/1210134/)

---

We can use two pointers to simulate gravity for each row (or column after the rotation).

**C++ (204 ms)**
```cpp
vector<vector<char>> rotateTheBox(vector<vector<char>>& box) {
    int m = box.size(), n = box[0].size();
    vector<vector<char>> res(n, vector<char>(m, '.'));
    for (int i = 0; i < m; ++i)
        for (int j = n - 1, k = n - 1; j >= 0; --j)
            if (box[i][j] != '.') {
                k = box[i][j] == '*' ? j : k;
                res[k--][m - i - 1] = box[i][j];
            }

    return res;
}
```
**Java (8 ms)**
```java
public char[][] rotateTheBox(char[][] box) {
    int m = box.length, n = box[0].length;
    char [][] res = new char[n][m];
    for (int i = 0; i < m; ++i)
        for (int j = n - 1, k = n - 1; j >= 0; --j) {
            res[j][m - i - 1] = '.';
            if (box[i][j] != '.') {
                k = box[i][j] == '*' ? j : k;
                res[k--][m - i - 1] = box[i][j];
            }
        }
    return res;
}
```