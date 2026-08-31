# Python3 DP solution with explanation - Paint Fence

**Author:** r0bertz
**Votes:** 12
**Link:** [https://leetcode.com/problems/paint-fence/solutions/762687/](https://leetcode.com/problems/paint-fence/solutions/762687/)

---

It's not too hard to figure out the pattern if you play with it.

Suppose `k == 3`, let's say the 3 colors are `a, b, c`.

If `n == 1`, then the result is `a b c`.
If `n == 2`, then the result is `ab ac ba bc ca cb aa bb cc`.

If `n > 2`, then the result can be derived by appending 2 posts with the same color that is different from the last one to the result of `n-2` and appending 1 post with a color that's different from the last one to the result of `n-1`.

For example, if `n == 3`, the result is:

`abb acc baa bcc caa cbb`

and

`aba abc aca acb bab bac bca bcb cab cac cba cbc aab aac bba bbc cca ccb`

```
class Solution:
    def numWays(self, n: int, k: int) -> int:
        arr = [0, k, k*k]
        while len(arr) <= n:
            arr.append(arr[-2]*(k-1) + arr[-1]*(k-1))
        return arr[n]
```