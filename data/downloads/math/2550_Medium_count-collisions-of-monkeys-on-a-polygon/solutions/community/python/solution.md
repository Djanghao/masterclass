# [Java/C++/Python] Should be pow(2, n) - 4

**Author:** lee215
**Votes:** 89
**Link:** [https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/3111664/](https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon/solutions/3111664/)

---

# **Mismatch Definition**
"A collision happens if at least two monkeys reside on the same vertex after the movement."

If n is even and two monkeys exchange position,
this should not be defined a collision.

I think the preparer misunderstood the problem,
miss this corner case.

Shoule be **pow(2, n) - 4** for even,
instead of **pow(2, n) - 2**.
<br>

# **Explanation**
Each monkey can move in the clockwise or counter-clockwise direction,
so 2 choices for each of `n` monkeys.

There are `2 ^ n` number of ways.
If all monkey move in clockwise direction, no collision.
If all monkey move in counter-clockwise direction, no collision.
All other ways, collision happens.

So we need to `return (2 ^ n - 2) % mod`,
we can apply fast pow to calculate `base ^ n`:

if `n % 2 == 0`,
`base ^ n = (base * base) ^ (n / 2)`

if `n % 2 == 1`,
`base ^ n = (base * base) ^ ((n - 1) / 2) * base`
<br>

# **Complexity**
Time `O(logn)`
Space `O(1)`
<br>

**Java**
```java
    public int monkeyMove(int n) {
        long res = 1, base = 2, mod = (long)1e9 + 7;
        while (n > 0) {
            if (n % 2 == 1)
                res = res * base % mod;
            base = base * base % mod;
            n >>= 1;
        }
        return (int)((res - 2 + mod) % mod);
    }
```

**C++**
```cpp
    int monkeyMove(int n) {
        long res = 1, base = 2, mod = 1e9 + 7;
        while (n > 0) {
            if (n % 2)
                res = res * base % mod;
            base = base * base % mod;
            n >>= 1;
        }
        return (res - 2 + mod) % mod;
    }
```

**Python**
```py
    def monkeyMove(self, n):
        mod = 10 ** 9 + 7
        return (pow(2, n, mod) - 2) % mod
```
