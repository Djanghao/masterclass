# [Java/C++/Python] Recursion

**Author:** lee215
**Votes:** 26
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4518792/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4518792/)

---

# **Explanation**
When `x > y`, we have 4 options.
- plus then divide 5
- minus then divide 5
- plus then divide 11
- minus then divide 11
<br>

# **Complexity**
Time `O(4^log5(x))`
Space `O(log5(x))`
<br>

**Java**
```java
    public int minimumOperationsToMakeEqual(int x, int y) {
        if (x <= y)
            return y - x;
        int res = x - y;
        res = Math.min(res, minimumOperationsToMakeEqual(x / 5, y) + 1 + x % 5);
        res = Math.min(res, minimumOperationsToMakeEqual(x / 5 + 1, y) + 1 + 5 - x % 5);
        res = Math.min(res, minimumOperationsToMakeEqual(x / 11, y) + 1 + x % 11);
        res = Math.min(res, minimumOperationsToMakeEqual(x / 11 + 1, y) + 1 + 11 - x % 11);
        return res;
    }
```

**C++**
```cpp
    int minimumOperationsToMakeEqual(int x, int y) {
        if (x <= y)
            return y - x;
        int res = x - y;
        res = min(res, minimumOperationsToMakeEqual(x / 5, y) + 1 + x % 5);
        res = min(res, minimumOperationsToMakeEqual(x / 5 + 1, y) + 1 + 5 - x % 5);
        res = min(res, minimumOperationsToMakeEqual(x / 11, y) + 1 + x % 11);
        res = min(res, minimumOperationsToMakeEqual(x / 11 + 1, y) + 1 + 11 - x % 11);
        return res;
    }
```

**Python**
```py
    def minimumOperationsToMakeEqual(self, x: int, y: int) -> int:
        if x <= y:
            return y - x
        res = x - y
        for v in [5, 11]:
            res = min(res, self.minimumOperationsToMakeEqual(x // v, y) + 1 + x % v)
            res = min(res, self.minimumOperationsToMakeEqual(x // 5 + 1, y) + 1 + v - x % v)
        return res
```
