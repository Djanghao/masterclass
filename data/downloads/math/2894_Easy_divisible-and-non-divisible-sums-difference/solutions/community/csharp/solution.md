# Simple O(1) solution.

**Author:** Drugged_Monkey
**Votes:** 2
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4645872/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4645872/)

---

# Intuition
I have to use sum of arithmetic series twice.

# Approach
Lets define some variables and consider first testcase `n = 10, m = 3`: 
`r` is `n % m` where `mod` operation e.g. `10 % 3 = 1`. 
`d` is `n / m` where `/` is integer division e.g. `10 / 3 = 3`.
`sa` is the sum of all numbers in the range `[1, n]` or sum of arithmetic series with `first` element equal to `1` and `last` element equal to `n` and `1` is constant value between adjacent terms. According to formula `sa` is equal to `(first + last) / 2.0 * n` or `(1 + n) / 2.0 * n`.
`sm` is the sum of numbers in the range `[1, n]` that **are divisible by** `m`. In this case `first` is `m` e.g. `3`. `last` is `n - n % m` or `n - r` e.g. `10 - 10 % 3 = 10 - 1 = 9` and finally number of such numbers between `1` and `n` will be `n / m` or `d` e.g. `3`.
`num1` is the sum of all integers in the range `[1, n]` that are **not divisible** by `m`. So `num1` is equal to the sum of all integers in the range `[1, n]` minus the sum of numbers in the range `[1, n]` that **are divisible by** `m` or `sa - sm`.
`num2` is the sum of numbers in the range `[1, n]`that **are divisible by** `m` or `sm`.
So `num1 - num2` is `(sa - sm) - sm`.
That's it.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
public sealed class Solution 
{
    public int DifferenceOfSums(int n, int m) 
    {
        var r = n % m;
        var d = n / m;

        var sa = (1 + n) * n / 2.0;
        var sm = (m + n - r) * d / 2.0;

        return (int)(sa - sm - sm);
    }
}
```