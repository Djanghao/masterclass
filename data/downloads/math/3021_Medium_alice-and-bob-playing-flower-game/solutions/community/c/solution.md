# m * n / 2

**Author:** votrubac
**Votes:** 43
**Link:** [https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/4636832/](https://leetcode.com/problems/alice-and-bob-playing-flower-game/solutions/4636832/)

---

Alice wins when `x + y` is odd. This happens when either:
- `x` is odd and `y` is even, or
- `y` is odd and `x` is even.

We can compute the number of such combinations in O(1):
- `x` is odd `n / 2 + n % 2`  times, and even `n / 2` times.
- `y` is odd `m / 2 + m % 2`  times, and even `m / 2` times.

So, the formula is `m / 2 * (n / 2 + n % 2)  + n / 2 * (m / 2 + m % 2)`, which (thanks [heizit](https://leetcode.com/heizit/)) is reduced to `m * n / 2`.

**C++**
```cpp
long long flowerGame(long long n, long long m) {
    return m * n / 2;
}
```