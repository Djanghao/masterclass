# [Java/C++/Python] O(1)

**Author:** lee215
**Votes:** 39
**Link:** [https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4024786/](https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/solutions/4024786/)

---

# **Explanation**
Check the minimum step we `need = max(abs(sx - fx), abs(sy - fy))`.
If `need > 0`, we check if `t >= need`.
In case we can reach ealier, we can stay around  its adjacent cells.

If `need == 0`, the target cell is the start cell.
If `t == 1`, we will go out of the current cell, and can't reach.
Otherwise we can go back to the start cell.
<br>

# **Complexity**
Time `O(1)`
Space `O(1)`
<br>

**Java**
```java
    public boolean isReachableAtTime(int sx, int sy, int fx, int fy, int t) {
        int need = Math.max(Math.abs(sx - fx), Math.abs(sy - fy));
        return need > 0 ? t >= need : t != 1;
    }
```

**C++**
```cpp
    bool isReachableAtTime(int sx, int sy, int fx, int fy, int t) {
        int need = max(abs(sx - fx), abs(sy - fy));
        return need > 0 ? t >= need : t != 1;
    }
```

**Python**
```py
    def isReachableAtTime(self, sx: int, sy: int, fx: int, fy: int, t: int) -> bool:
        need = max(abs(sx - fx), abs(sy - fy))
        return t >= need if need else t != 1
```
