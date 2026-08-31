# [Java/C++/Python] O(1) Solution

**Author:** lee215
**Votes:** 44
**Link:** [https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4916808/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4916808/)

---

# **Intuition**
We will increment `a` times to `a + 1`,
and then copy `b` timees to sum,
so that `(a + 1) * (b + 1) >= k`.

So the question is:
Find `min(a + b)`, so that `(a + 1) * (b + 1) >= k`.
<br>

# **Intuition 2**
For same value of `a + b`,
to make `ab` biggest,
we need to make `a == b`.
So if `a == b`, `(b + 1) * (b + 1)  >= k`
So if `a == b + 1`, `a * (a + 1)  >= k`.
<br>

# **Explanation**
`int a = sqrt(k)`.
if `a * a == k`, then return `a + a - 2`
if `a * (a + 1) >= k`, then return `a + a - 1`
if `(a + 1) * (a + 1) >= k`, then return `a + a`
<br>

# **Explanation 2**
`b = ceil(k / a)`
with interger division:, `b = (k - 1) / a + 1`
then we return `a + b - 2`
<br>

# **Complexity**
Time `O(sqrt)`
Space `O(sqrt)`
<br>

**Java**
```java
    public int minOperations(int k) {
        int a = (int) Math.sqrt(k);
        return a + (k - 1) / a - 1;
    }
```

**C++**
```cpp
    int minOperations(int k) {
        int a = sqrt(k);
        return a + (k - 1) / a - 1;
    }
```

**Python**
```py
    def minOperations(self, k: int) -> int:
        v = isqrt(k)
        return v + (k - 1) // v - 1
```
