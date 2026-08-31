# [Java/C++/Python] Bit count, 4 lines

**Author:** lee215
**Votes:** 25
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/3679281/](https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/solutions/3679281/)

---

# **Explanation**
Start from `k = 1`,
to check if `num = num1 - num2 * k` can be the sum of `k` pow sof 2.

The maximum operations is `num`, `num = (2 ^ 0) * num`.
The minimum operations is `num` bits count.

If `num.bit_count() <= k <= num`,
then `num` can be the sum of `k` pows of 2.
<br>

# **Complexity**
Time `O(60log(num1 + num2))`
Space `O(1)`
<br>

**Java**
```java
    public int makeTheIntegerZero(long x, long y) {
        for (int k = 1; k < 61; k++)
            if (Long.bitCount(x - k * y) <= k && k <= x - k * y)
                return k;
        return -1;
    }
```

**C++**
```cpp
    int makeTheIntegerZero(long x, long y) {
        for (int k = 1; k < 61; k++)
            if (__builtin_popcountll(x - k * y) <= k && k <= x - k * y)
                return k;
        return -1;
    }
```

**Python**
```py
    def makeTheIntegerZero(self, x: int, y: int) -> int:
        for k in range(1, 61):
            if (x - k * y).bit_count() <= k <= x - k * y:
                return k
        return -1
```
