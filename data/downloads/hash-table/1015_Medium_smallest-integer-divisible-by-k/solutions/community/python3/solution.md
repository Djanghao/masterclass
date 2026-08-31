# [Python3] ✔️ Less Math, More Intuition ✔️ | 2 Accepted Solutions | Intuitive

**Author:** PatrickOweijane
**Votes:** 28
**Link:** [https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/1655649/](https://leetcode.com/problems/smallest-integer-divisible-by-k/solutions/1655649/)

---

**Important**: A number containing only `1`s cannot be divisible by `2` or `5`. You can easily convince yourself that this is true since:
* A number divisble by 2 can only end with `0`, `2`, `4`, `6`, or `8`.
* A number divisble by 5 can only end with `0`, or `5`.

\u2714\uFE0F **[Accepted] First Approach:** *Making use of Python Big Integer*
Here, we solve the problem as if overflow does not exist. In fact, Python supports arbitrarily large numbers. However, this comes at the cost of speed/memory, but anyways this is the naive way of doing it:
```
class Solution:
    def smallestRepunitDivByK(self, k: int) -> int:
        if not k % 2 or not k % 5: return -1
        n = length = 1
        while True:
            if not n % k: return length
            length += 1
            n = 10*n + 1
```

\u2714\uFE0F **[Accepted] Second Approach:** *Using some math*
To improve that, the trick to avoid overflow is that we only need to store the remainder. A small proof for that can be found below:

1. At every iteration, `n = kq + r` for some quotient `q` and remainder `r`.
2. Therefore, `10*n + 1` = `10(kq + r) + 1` = `10kq + 10r + 1`.
3. `10kq` is divisible by `k`, so for `10*n + 1` to be divisible by `k`, it all depends on if `10r + 1` is divisible by `k`.
4. Therefore, we only have to keep track of `r`!

```
class Solution:
    def smallestRepunitDivByK(self, k: int) -> int:
        if not k % 2 or not k % 5: return -1
        r = length = 1
        while True:
            r = r % k
            if not r: return length
            length += 1
            r = 10*r + 1
```