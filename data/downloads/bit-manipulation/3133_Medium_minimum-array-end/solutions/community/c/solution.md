# [Java/C++/Python] Bits Manipulation

**Author:** lee215
**Votes:** 103
**Link:** [https://leetcode.com/problems/minimum-array-end/solutions/5081947/](https://leetcode.com/problems/minimum-array-end/solutions/5081947/)

---

# **Solution 1**
Each time increment `a`, then `OR` with `x`,
So we get the next bigger valid element.

We do this `n - 1` times,
and return the result.

Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public long minEnd(int n, int x) {
        long a = x;
        while (--n > 0)
            a = (a + 1) | x;
        return a;
    }
```

**C++**
```cpp
    long long minEnd(int n, int x) {
        long long a = x;
        while (--n)
            a = (a + 1) | x;
        return a;
    }
```
<br>

# **Solution 2**
`O(n)` is only accepted in C++ and Java.
We can split all bits of `n - 1`
and fill them into empty bits of `x`.

Time `O(70)`
Space `O(1)`
<br>

**C++**
```C++
    long long minEnd(int n, int x) {
        n--;
        long long a = x, b;
        for (b = 1; n > 0; b <<= 1) {
            if ((b & x) == 0) {
                a |= (n & 1) * b;
                n >>= 1;
            }
        }
        return a;
    }
```
**Java**
```java
    public long minEnd(int n, int x) {
        n--;
        long a = x;
        for (long b = 1; n > 0; b <<= 1) {
            if ((b & x) == 0) {
                a |= (n & 1) * b;
                n >>= 1;
            }
        }
        return a;
    }
```
**Python**
```py
    def minEnd(self, n: int, x: int) -> int:
        n -= 1
        b = 1
        for i in range(64):
            if b & x == 0:
                x |= (n & 1) * b
                n >>= 1
            b <<= 1
        return x
```
