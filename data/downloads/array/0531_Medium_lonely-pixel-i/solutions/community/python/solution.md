# Python 3 pure iterative (Hash set)

**Author:** idontknoooo
**Votes:** 9
**Link:** [https://leetcode.com/problems/lonely-pixel-i/solutions/782592/](https://leetcode.com/problems/lonely-pixel-i/solutions/782592/)

---

- `row`: set of column indices, where there exists at least 1 row that has only 1 *B* pixel at column `i`
- `col[i]`: total number of *B* at column `i`
- A valid lonely pixel is when `col[i] == 1` (meaning only 1 row at `i`th column has *B* pixel) and `i` exists in `row` (meaning `picture[r][i]` is the only *B* pixel for some row `r`).
```
class Solution:
    def findLonelyPixel(self, picture: List[List[str]]) -> int:
        m, n = len(picture), len(picture[0])
        col = [0] * n
        row = set()
        for i in range(m):
            cnt = 0
            for j in range(n):
                if picture[i][j] == 'B':
                    c = j
                    cnt += 1
                    col[j] += 1
            if cnt == 1: row.add(c)
        ans = 0        
        for i, c in enumerate(col):
            if c == 1 and i in row:
                ans += 1
        return ans       
```