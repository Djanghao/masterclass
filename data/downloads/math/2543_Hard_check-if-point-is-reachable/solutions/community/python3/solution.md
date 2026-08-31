# [Java/Python 3] Check if the GCD has only factor 2 w/ explanation and analysis.

**Author:** rock
**Votes:** 15
**Link:** [https://leetcode.com/problems/check-if-point-is-reachable/solutions/3082013/](https://leetcode.com/problems/check-if-point-is-reachable/solutions/3082013/)

---

**Intuition**

Notice there is double operations for either `x` or `y`- coordinates and the corresponding result must be even. Therefore, if the target coordinates is odd, we can only have `1` option: `+/-`. 

Hence we can simplify the operation if we return from target to source.

Also the following operation hint Euclidean Algorithm:
`(x, y - x)`
`(x - y, y)`
or
`(x, y + x)`
`(x + y, y)`

Based on the above we can implement the following algorithm.

----
Let us **reverse the procedure and start from target to source**, if either of the target coordinates is divisible by `2`, remove all factor `2`s from it then check if they are co-prime now; If yes, return `true`, otherwise return `false`.

We also can compute the `GCD` first, then check if it has only factor `2`s, and this makes code shorter.

```java
    public boolean isReachable(int x, int y) {
        while (y != 0) {
            int tmp = x % y;
            x = y;
            y = tmp;
        }
        while (x % 2 == 0) {
            x /= 2;
        }
        return x == 1;
    }
```
```python
    def isReachable(self, x: int, y: int) -> bool:
        g = gcd(x, y)
        while g % 2 == 0:
            g //= 2
        return g == 1
```

Or further simplify the above as follows: 
```java
    public boolean isReachable(int x, int y) {
        while (y != 0) {
            int tmp = x % y;
            x = y;
            y = tmp;
        }
        return Integer.bitCount(x) == 1;
    }
```
```python
    def isReachable(self, x: int, y: int) -> bool:
        return gcd(x, y).bit_count() == 1
```

**Analysis:**

Both the dividing `2` and `gcd`(Euclidean Algorithm) operations cost time `O(log(max(x, y)))`, therefore

Time: `O(log(max(x, y)))`, space: `O(1)`.

----

**Q & A**
*Q1*: You have reversed 2*x by x//2. Then why (x-y) is still holding good? Shouldn't it be x+y?
*A1*: Actually, *x + y* or *x - y* will NOT change their `GCD`.  It is because `gcd(x + m * y, y) = gcd(x, n * x + y) = gcd(x, y)`, where `m` and `n` are both integers that can be positive, negative or zero.

*Proof:*

Use contradiction to prove `gcd(x + m * y, y) = gcd(x, y)` as follow:

Let `g = gcd(x, y)`, then `x = a * g, y = b * g` and `a` and `b` co-prime.

`x + m * y = a * g + m * b * g = (a + m * b) * g`
`y = b * g `

if `gcd(a + m * b, b) = g' > 1`, then `a + m * b = p * g'` and`b = q * g'`, therefore `a + m * b = a + m * q * g' = p * g'`, so `a = (p - m * q) * g'`, which indicates that `a` and `b` have a `GCD` of `g' > 1` and hece `a` and `b` not co-prime, which contradicts the previous assumption `a` and `b` co-prime.

Similarly we can prove that `gcd(x, n * x + y) = gcd(x, y)`

**End of Q & A**