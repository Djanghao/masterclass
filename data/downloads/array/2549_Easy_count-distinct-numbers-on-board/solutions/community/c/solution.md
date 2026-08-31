# [Java/C++/Python] return n - 1

**Author:** lee215
**Votes:** 67
**Link:** [https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/3111651/](https://leetcode.com/problems/count-distinct-numbers-on-board/solutions/3111651/)

---

# **Conclusion**
If `n > 1`, we can get 2,3,4...n finally.
If `n == 1`, we can only get 1.
<br>

# **Intuition**
"for 10^9 days", it's quite a long duration.
And `n` is much smaller than the number of days.

It's a brain-teaser,
the duration is long enough to generate all cards.
<br>

# **Prove**
Assume `n` is on the board,
`n % (n - 1) == 1` if `n > 2`,
so `n - 1` will be on the board,
then `n - 2` will be on the board,
same for `n - 3`,`n - 4` .... `3`, `2`.

So for any `n > 1`,
`2,3,4...n` will be on the board finally,
we return `n - 1`

For `n = 1` at first,
nothing happens,
we return 1.

So we can `return n > 1 ? n - 1 : 1;`
also we can `return max(n - 1, 1);`
<br>

# **Complexity**
Time `O(1)`
Space `O(1)`
<br>

**Java**
```java
    public int distinctIntegers(int n) {
        return Math.max(n - 1, 1);
    }
```

**C++**
```cpp
    int distinctIntegers(int n) {
        return max(n - 1, 1);
    }
```

**Python**
```py
    def distinctIntegers(self, n):
        return max(n - 1, 1)
```
