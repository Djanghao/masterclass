# [Java] Count row and col

**Author:** ysz951
**Votes:** 3
**Link:** [https://leetcode.com/problems/lonely-pixel-i/solutions/1083295/](https://leetcode.com/problems/lonely-pixel-i/solutions/1083295/)

---

```
class Solution {
    public int findLonelyPixel(char[][] picture) {
        int m = picture.length, n = picture[0].length;
        int[] row = new int[m];
        int[] col = new int[n];
        int res = 0;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                row[i] += picture[i][j] == 'W' ? 1 : 0;
                col[j] += picture[i][j] == 'W' ? 1 : 0;
            }
        }
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (picture[i][j] == 'B' && row[i] == n - 1 && col[j] == m - 1) {
                    res++;
                }
            }
        }
        return res;
    }
}
```