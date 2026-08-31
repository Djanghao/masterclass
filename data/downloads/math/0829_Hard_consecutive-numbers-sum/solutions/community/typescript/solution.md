# Simple O(n^(1/2)) Solution in TypeScript

**Author:** oneirocosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/consecutive-numbers-sum/solutions/3692020/](https://leetcode.com/problems/consecutive-numbers-sum/solutions/3692020/)

---

# Intuition
A lot of the details in this problem come down to using discrete math tricks to simplify the work that needs to be performed by the computer. The key is creating a general formula for the sum of `i` consecutive terms (taking advantage of the fact that `n` is strictly positive).

# Approach
When adding `i` consicutive terms beginning with `x`, the expression of the result is 
```ix + i(i+1)/2```
We can find this because `1 + 2 + 3 + ... + i = i(i+1)/2` is a known fact from discrete math.  Also, `i(i+1)/2` is guaranteed to be a whole number because either `i` or `i+1` is an even number which will be divisible by `2`.

When looking for numbers that add up to `n`, the formula is
```ix + i(i+1)/2 = n```
Since `i` is fixed for each check, we will need to check that
```n - i(i+1)/2``` is divisible by `i` to give a whole number value for `x`.


The highest value of `i` that is reasonable will be one where `i = 1` since that is the smallest possible value we are considering.  Putting that into our above equation, we find
```i + i(i+1)/2 = n```
This can be rearranged to
```i^2 + 3i - 2n = 0```
which has the positive solution
```i = (-3 + sqrt(9 + 8n))/2```
So this becomes the maximum reasonable value.

# Complexity
- Time complexity:
O(n^(1/2))

- Space complexity:
O(1)

# Code
```
function consecutiveNumbersSum(n: number): number {
    const max = Math.ceil((Math.sqrt(9 + 8 * n) - 3) / 2);
    let count = 0;
    for (let i = 1; i <= max; i++) {
        const divisor = n - (i * (i + 1) / 2);

        if (divisor % i == 0) {
            count++;
        }
    }
    return count;
};
```