# [Java/C++/Python] Easy and Concise

**Author:** lee215
**Votes:** 29
**Link:** [https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/2850445/](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/solutions/2850445/)

---


# **Explanation**
If `n == 1`, no need to cut,
return 0.

If `n` is odd like `n == 3`,
cannot cut on diameter.
need to cut one by one,
return `n`

If `n` is even like `n == 6`,
we can cut on diameter.
It's same as cut into `n = 3` but cut on diameter,
so return `n / 2`.

Can summary up the above rules by enumerating some `n`.
<br>

# **Complexity**
Time `O(1)`
Space `O(1)`
<br>

**Java**
```java
    public int numberOfCuts(int n) {
        if (n == 1) return 0;
        return n % 2 > 0 ? n : n / 2;
    }
```

**C++**
```cpp
    int numberOfCuts(int n) {
        if (n == 1) return 0;
        return n % 2 ? n : n / 2;
    }
```

**Python**
```py
    def numberOfCuts(self, n):
        if n == 1: return 0
        return n if n % 2 else n // 2
```
