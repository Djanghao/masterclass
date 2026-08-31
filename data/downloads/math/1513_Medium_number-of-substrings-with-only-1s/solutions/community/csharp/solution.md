# One-liner solution with LINQ.

**Author:** Drugged_Monkey
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/5171649/](https://leetcode.com/problems/number-of-substrings-with-only-1s/solutions/5171649/)

---

# Approach
Small clarification:
`1111111` - lets say I found a string containing only `1` of length `7`. How many smaller substrings it contains?

`1111111` - `1` of length `7`
`111111_`
`_111111` - `2` of length `6`
`11111__`
`_11111_`
`__11111` - `3` of length `5`
`1111___`
`_1111__`
`__1111_`
`___1111` - `4` of length `4`
`111____`
`_111___`
`__111__`
`___111_`
`____111` - `5` of length `3`
`11_____`
`_11____`
`__11___`
`___11__`
`____11_`
`_____11` - `6` of length `2`
`1______`
`_1_____`
`__1____`
`___1___`
`____1__`
`_____1_` 
`______1`- `7` of length `1`

so for a `string` of length `7` the answer will be `1 + 2 + 3 + 4 + 5 + 6 + 7 = 28` or according to **Johann Karl Friedrich Gauss** `(1 + n) * n / 2` where `n` is length of the `string`. Now the only thing I need is to split the `string` using `0` as delimiter, apply Gauss's formula to every `string` from previous operation and finally sum the results. That's it.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
public sealed class Solution 
{
    private readonly static int mod = 1_000_000_007;

    public int NumSub(string str) =>
        (int)str
            .Split('0', StringSplitOptions.RemoveEmptyEntries)
            .Select(s => (long)(1 + s.Length) * s.Length / 2)
            .Aggregate(0L, (sum, cur) => (sum + cur) % mod);
}
```