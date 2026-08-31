# DP

**Author:** votrubac
**Votes:** 45
**Link:** [https://leetcode.com/problems/count-number-of-balanced-permutations/solutions/6000532/](https://leetcode.com/problems/count-number-of-balanced-permutations/solutions/6000532/)

---

We count numbers, and then distribute them between odd and even positions using DP.

Let's pick "000111122" as an example. Initially, we have 4 even and 5 odd positions, and the balanced sum is `8 / 2 == 4`.

We can distribute zero between odd/even positions as follows:
- 0/3:
	- There are `comb(5, 3) = 10` ways to put 3 zeros into 5 odd positions.
	- The result is `10 * dp(0 + 1, 4 - 0, 5 - 3, 4 - 0)`.
- 1/2:
	- There are `comb(4, 1) = 4` ways to put 1 zero into 4 even positions.
	- There are `comb(5, 2) = 10` ways to put 2 zeros into 5 odd positions.
	- The result is `4 * 10 * dp(1, 3, 3, 4)`.
- 2/1:
	- There are `comb(4, 2) = 6` ways to put 2 zeros into 4 even positions.
	- There are `comb(5, 1) = 5` ways to put 1 zero into 5 odd positions.
	- The result is `6 * 5 * dp(1, 2, 4, 4)`.
- 3/0:
	- There are `comb(4, 3) = 4` ways to put 3 zeros into 4 even positions.
	- The result is `4 * dp(1, 1, 5, 4)`. 

We continue the recursion to distribute `1` and `2`. After distributing all numbers, we return `1` if the balanced sum is zero, and `0` otherwise.

To make it fast, we memoise by:
- Current number [0..9].
- Remaining odd [0..40] positions.
- Remaining even positions  - only for convenience, it can be derived.
- Remaining balanced sum [0..360] (`80 * 9 / 2`).

The time and space complexity is O(n ^ 2). The `comb` values can be pre-computed/memoised in O(n ^ 2).

**Python 3**
```python
class Solution:
    def countBalancedPermutations(self, num: str) -> int:
        cnt = Counter(int(ch) for ch in num)
        total = sum(int(ch) for ch in num)

        @cache
        def dfs(i, odd, even, balance):
            if odd == 0 and even == 0 and balance == 0:
                return 1
            if i < 0 or odd < 0 or even < 0 or balance < 0:
                return 0
            res = 0
            for j in range(0, cnt[i] + 1):
                res += comb(odd, j) * comb(even, cnt[i] - j) * dfs(i - 1, odd - j, even - cnt[i] + j, balance - i * j)
            return res % 1000000007

        return 0 if total % 2 else dfs(9, len(num) - len(num) // 2, len(num) // 2, total // 2)
```