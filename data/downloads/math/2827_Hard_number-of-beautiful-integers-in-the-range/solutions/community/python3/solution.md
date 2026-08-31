# Easy to understand | Digit DP | Python

**Author:** Avuvos
**Votes:** 11
**Link:** [https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/3932405/](https://leetcode.com/problems/number-of-beautiful-integers-in-the-range/solutions/3932405/)

---

we build our number digit by digit.
we need to keep track of a few parameters:
our `index` in the string, how many `odd` and `even` digits we picked up so far.
what is our number's `remainder` when divided by k.
are we `tight` to our maximal bound (so we dont count numbers larger than `high` for exmaple)
and finally is our number a `zero`. 

`dfs(n)` gets us the number of beautiful numbers in the range `[0, n]`
so what we want is `dfs(high) - dfs(low - 1)`

**Time Complexity:** let ` n = length of the string`, we have that:
` index, odd, even <= n`.
`remainder <= k`.
`tight, leadingZero <= 2`.
so the number of states in the DP is `O(n^3 * k * 4)`.
in each dfs call, we iterate over the digits, so at most 10 iterations.
so in total the time complexity is `O(n^3 * k * 4 * 10)`.
since `n <= 10` and `k <= 20` this runs very fast.

```
class Solution:
    def numberOfBeautifulIntegers(self, low: int, high: int, k: int) -> int:
        
        @cache
        def dfs(s, index, odd, even, remainder, tight, leadingZero):
            if index >= len(s):
                return remainder % k == 0 and odd == even
            
            bound = int(s[index]) if tight else 9
            ans = 0
            for digit in range(bound + 1):
                add_odd = digit % 2 == 1
                add_even = digit % 2 == 0
                
                if leadingZero and digit == 0:
                    add_even = 0
                    
                ans += dfs(s, index + 1,
                           odd + add_odd,
                           even + add_even,
                           (remainder*10 + digit) % k,
                           tight and digit == int(s[index]),
                           leadingZero and digit == 0)
            return ans
        
        return dfs(str(high), 0, 0, 0, 0, True, True) - dfs(str(low - 1), 0, 0, 0, 0, True, True)
```