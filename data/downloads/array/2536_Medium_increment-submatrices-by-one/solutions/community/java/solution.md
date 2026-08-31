# 🔥 Brute force, optimization, optimization x2

**Author:** byegates
**Votes:** 9
**Link:** [https://leetcode.com/problems/increment-submatrices-by-one/solutions/3099720/](https://leetcode.com/problems/increment-submatrices-by-one/solutions/3099720/)

---

# Intuition
- Brute force is too costly
- At 1 dimension, any range addition, can be represented as addition and reduction at left boundary and right boundary+1
    - Whats range addition? (1d)
    - [1,5,2] means increase each value between index 1 and 5 by 2
        - this problem is a speicifc case, where all deltas are 1
    - That means put 2 at index 1 and -2 at index 6(5+1, if exist) then do prefix sum
    - multi range additions can be combined together into one array, and do one last pre fix sum
        - why? Try it.
- At 2 dimensions, it's actually the same
- For detail regarding range addition refer to [370. Range Addition](https://leetcode.com/problems/range-addition/), from 1d to 2d


# [Brute Force, 502ms](https://leetcode.com/problems/increment-submatrices-by-one/submissions/878740844/)
TC: O(n^2*L), L is length of query
SC: O(1)
```java
class Solution {
    public int[][] rangeAddQueries(int n, int[][] Q) {
        int[][] res = new int[n][n];
        for (var q : Q) {
            int r0 = q[0], c0 = q[1], r1 = q[2]+1, c1 = q[3]+1;
            for (int i = r0; i < r1; i++) for (int j = c0; j < c1; j++)
              res[i][j]++;
        }
        return res;
    }
}
```
# [row level optimization, 21 ms](https://leetcode.com/problems/increment-submatrices-by-one/submissions/885321637/)
TC: O(n*L+n^2)
SC: O(1)
```java
class Solution {
    public int[][] rangeAddQueries(int n, int[][] queries) {
        int[][] res = new int[n][n];
        for (var q : queries) {
            int r0 = q[0], c0 = q[1], r1 = q[2]+1, c1 = q[3]+1;
            for (int i = r0; i < r1; i++) {
                res[i][c0]++;
                if (c1 < n) res[i][c1]--;
            }
        }

        for (var row : res)
            for (int j = 1; j < n; j++)
                row[j] += row[j-1];

        return res;
    }
}
```
# [2d, 7ms](https://leetcode.com/problems/increment-submatrices-by-one/submissions/885379542/)
TC: O(2*n^2)
SC: O(1)
```java
class Solution {
    public int[][] rangeAddQueries(int n, int[][] Q) {
        int[][] res = new int[n][n];
        for (var q : Q) {
            int r0 = q[0], c0 = q[1], r1 = q[2]+1, c1 = q[3]+1;
            res[r0][c0]++;
            if (c1 < n) res[r0][c1]--;
            if (r1 < n) {
                res[r1][c0]--;
                if (c1 < n) res[r1][c1]++;
            }
        }

        for (int i = 0; i < n; i++) for (int j = 1; j < n; j++)
            res[i][j] += res[i][j-1];

        for (int i = 1; i < n; i++) for (int j = 0; j < n; j++)
            res[i][j] += res[i-1][j];

        return res;
    }
}
```

Please ignore below unless you want to know what "not fun" is.
# [2d, 11 ms, just for (NOT) fun](https://leetcode.com/problems/increment-submatrices-by-one/submissions/885312579/)
TC: O(L+n^2)
SC: O(n+L)
```java
class Solution {
    record Row (int d, int c0, int c1) {}
    public int[][] rangeAddQueries(int n, int[][] Q) {
        List<Row>[] rows = new List[n];
        for (int i = 0; i < n; i++) rows[i] = new ArrayList<>();

        for (var q : Q) {
            int r0 = q[0], c0 = q[1], r1 = q[2]+1, c1 = q[3]+1;
            rows[r0].add(new Row(1, c0, c1));
            if (r1 < n) rows[r1].add(new Row(-1, c0, c1));
        }

        int[][] res = new int[n][n];
        int[] diff = new int[n];
        for (int i = 0; i < n; i++) {
            for (var r : rows[i]) {
                diff[r.c0] += r.d;
                if (r.c1 < n) diff[r.c1] -= r.d;
            }

            res[i][0] = diff[0];
            for (int j = 1; j < n; j++) res[i][j] += res[i][j-1] + diff[j];
        }

        return res;
    }
}
```