# [Java/C++/Python] Sort Solution

**Author:** lee215
**Votes:** 73
**Link:** [https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/3256371/](https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/3256371/)

---

# **Intuition**
Sort the input.
<br>

# **Explanation**
`last` is the right most end of the current group.
For each `r` in `ranges`,
if `last < r[0]`, `r[0]` starts a new group,
can be either the first or the second group,
so `res` should be doubled.
Also we need to update `last = max(last, r[1])`.

Finally we return resulst `res`.
<br>

# **Complexity**
Time `O(sort)`
Space `O(sort)`
<br>

**Java**
```java
    public int countWays(int[][] ranges) {
        int res = 1, last = -1, mod = (int)1e9 + 7;
        Arrays.sort(ranges, (a, b) -> a[0] - b[0]);
        for (int[] r: ranges) {   
            if (last < r[0])
                res = res * 2 % mod;
            last = Math.max(last, r[1]);
        }
        return res;
    }
```

**C++**
```cpp
    int countWays(vector<vector<int>>& ranges) {
        int res = 1, last = -1, mod = 1e9 + 7;
        sort(ranges.begin(), ranges.end());
        for (auto r: ranges) {   
            if (last < r[0])
                res = res * 2 % mod;
            last = max(last, r[1]);
        }
        return res;
    }
```

**Python**
```py
    def countWays(self, A: List[List[int]]) -> int:
        pre = -1
        res = 0
        for a,b in sorted(A):
            res += pre < a
            pre = max(pre, b)
        return pow(2, res, 10**9+7)
```
