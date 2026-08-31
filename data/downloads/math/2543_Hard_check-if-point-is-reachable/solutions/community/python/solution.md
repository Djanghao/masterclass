# [Java/C++/Python] 1-line GCD Solution

**Author:** lee215
**Votes:** 92
**Link:** [https://leetcode.com/problems/check-if-point-is-reachable/solutions/3082073/](https://leetcode.com/problems/check-if-point-is-reachable/solutions/3082073/)

---

# **Intuition**
Try go from `(x, y)` to `(1,1)`
Consider the reverse operation of
`(x, y - x)`
`(x - y, y)`
`(2 * x, y)`
`(x, 2 * y)`

that is
`(x, y + x)`
`(x + y, y)`
`(x / 2, y)` if `x % 2 == 0`
`(x, y / 2)` if `y % 2 == 0`
<br>

# **Necessary Condition**
Assume `x` and `y` have a common divisor `v` bigger than 2,
Since
`(x + y) % v == 0`
`(x / 2) % v == 0` if `x` is even
`(y / 2) % v == 0` if `y` is even
The new value always can be divided by `v`

No matter what operation we use, 
we can't reach `(1,1)`

To go from `(x,y)` to `(1,1)`,
we have the necessary condition :
`gcd(x,y) = 2 ^ k`
<br>

# **Sufficient Condition**
Assume `gcd(x,y) = 2 ^ k`
If `x` is even, we can go `(x / 2, y)`
If `y` is even, we can go `(x, y / 2)`
If both odd and `x < y`, we can go `(x, (x+y)/2)`
If both odd and `x > y`, we can go `((x+y)/2, y)`
`(x, y)` can continue go smaller,
until `(x, y)` both odd and `x == y`,
that is `x == y == 1`


# **Conclusion**
Based on the **Necessary Condition** and **Sufficient Condition**,
we conclude that
"`(1, 1)` can go forward to `(x, y)`"
equals to
"`(x, y)` can go back to `(1, 1)`"
equals
`gcd(x,y)` is pow of `2`.
<br>

# **Pow of 2**
Many ways to check if `x` is pow of `2`.

**Option 1**
We can continuely divide `x` by `2` and
check if stops at `1`.

**Option 2**
Also we can check `x` **lowbit** by `x & -x`.
<br>

# **Complexity**
Time `O(logX + logY))`
Space `O(1)`
<br>

# **Solution 1**
**Java**
Implement `gcd` or import `java.math.BigInteger`
```java
    public boolean isReachable(int x, int y) {
        int v = BigInteger.valueOf(x).gcd(BigInteger.valueOf(y)).intValue();
        while (v % 2 == 0)
            v /= 2;
        return v == 1;
    }
```
**C++**
```cpp
    bool isReachable(int x, int y) {
        int v = gcd(x, y);
        while (v % 2 == 0)
            v /= 2;
        return v == 1;
    }
```
<br>

# **Solution 2: Use lowbit**
**Java**
```java
    public boolean isReachable(int x, int y) {
        int v = BigInteger.valueOf(x).gcd(BigInteger.valueOf(y)).intValue();
        return v == (v & -v);
    }
```
**C++**
```cpp
    bool isReachable(int x, int y) {
        int v = gcd(x, y);
        return v == (v & -v);
    }
```
**Python**
```py
    def isReachable(self, x: int, y: int) -> bool:
        v = gcd(x, y)
        return v == (v & -v)
```
<br>

# **Solution 3: Use bit count**
**Java**
```java
	public boolean isReachable(int x, int y) {
		return BigInteger.valueOf(x).gcd(BigInteger.valueOf(y)).bitCount() == 1;
	}
```
**C++**
```cpp
    bool isReachable(int x, int y) {
        return __builtin_popcount(gcd(x, y)) == 1;
    }
```
**Python**
```py
    def isReachable(self, x: int, y: int) -> bool:
        return gcd(x, y).bit_count() == 1
```
