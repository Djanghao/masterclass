# [Java/C++/Python] Lowest Common Ancestor

**Author:** lee215
**Votes:** 108
**Link:** [https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/2923489/](https://leetcode.com/problems/cycle-length-queries-in-a-tree/solutions/2923489/)

---

# **Intuition**
Add an edge between `ai` and `bi`
and find the parents of `ai` and `bi`.
The two path will meet at the common ancestor with biggest value.

The key to this problem is to find the **Lowest Common Ancestor**
<br>

# **Explanation**
The left node has the value `2 * val`, and
The right node has the value `2 * val + 1`.

this means, no matter a node is left or right child,
its parent is `val / 2`.

For query `x` and `y`, we try to find their common ancestor.
If `x != y`, we hadn't found yet.
So we let the bigger node go up:
if `x > y, x = x / 2`,
if `x < y, y = y / 2`,
and this take on step.
We continue to do this until `x == y`.

The cycle length is the number of steps plus 1.
<br>

# **Complexity**
For each query:
Time `O(logX + logY)`
Space `O(1)`
<br>

**Java**
```java
    public int[] cycleLengthQueries(int n, int[][] queries) {
        int m = queries.length, res[] = new int[m];
        for (int i = 0; i < m; ++i) {
            res[i]++;
            int x = queries[i][0], y = queries[i][1];
            while (x != y) {
                if (x > y)
                    x /= 2;
                else
                    y /= 2;
                res[i]++;
            }
        }
        return res;
    }
```
**C++**
```cpp
    vector<int> cycleLengthQueries(int n, vector<vector<int>>& queries) {
        int m = queries.size();
        vector<int> res(m, 1);
        for (int i = 0; i < m; ++i) {
            int x = queries[i][0], y = queries[i][1];
            while (x != y) {
                if (x > y)
                    x /= 2;
                else
                    y /= 2;
                res[i]++;
            }
        }
        return res;
    }
```
**Python**
```py
    def cycleLengthQueries(self, n, queries):
        res = []
        for x,y in queries:
            res.append(1)
            while x != y:
                x, y = min(x, y), max(x, y) // 2
                res[-1] += 1
        return res
```
