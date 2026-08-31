# Recursive Solution

**Author:** youssefsoua
**Votes:** -1
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4519383/](https://leetcode.com/problems/minimum-number-of-operations-to-make-x-and-y-equal/solutions/4519383/)

---

# Dynamic Programming (Recursive): Minimum Operations to Equalize x and y

This code is an implementation of a dynamic programming problem, where the goal is to find the minimum number of operations to make `x` equal to `y`. The operations allowed are subtracting 1, dividing by 11, and dividing by 5.

## Approach

### Base Case

If `x` is less than or equal to `y`, the function returns the difference `y - x`, which represents the minimum number of operations needed to make `x` equal to `y` (by subtracting 1 from `x` repeatedly).

### Memoization

The function uses a Map (`memo`) to store the minimum number of operations for each value of `x`. If the value is already computed, it returns the stored value. This technique avoids redundant computations and improves the efficiency of the solution.

### Recursive Calls

The function makes recursive calls to find the minimum number of operations for `x - 1`, `x / 11`, and `x / 5`. For each divisor (11 and 5), if `x` is not divisible by the divisor, it finds the nearest multiple of the divisor and makes a recursive call for that value.

### Finding the Nearest Multiple

The `nearestMultiple` function finds the nearest multiple of the divisor to `x`. If `x` modulo the divisor is greater than or equal to half of the divisor, it adds the difference between the divisor and `x` modulo the divisor to `x`. Otherwise, it subtracts `x` modulo the divisor from `x`. The number of operations is the absolute value of the difference.

### Updating the Result

After each recursive call, the function updates the result if the current number of operations is less than the previously stored result.

### Storing the Result

Finally, the function stores the result in the memo and returns it.

This approach ensures that all possible operations are considered, and the minimum number of operations is found. The use of memoization makes the solution efficient by avoiding redundant computations. The time complexity is O(N log N), and the space complexity is O(N), where N is the value of `x`.


# Code
```
function minimumOperationsToMakeEqual(x: number, y: number, memo = new Map<number, number>()): number {
    // If the value is already computed, return it
    if (memo.has(x)) return memo.get(x);
    // If x is less than or equal to y, return the difference
    if (x <= y) return y - x;

    let result = Infinity;
    const divisors = [11, 5];

    // Try subtracting 1 from x
    result = Math.min(result, 1 + minimumOperationsToMakeEqual(x - 1, y, memo));

    for (const divisor of divisors) {
        if (x % divisor === 0) {
            // If x is divisible by the divisor, try dividing x by the divisor
            result = Math.min(result, 1 + minimumOperationsToMakeEqual(x / divisor, y, memo));
        } else {
            // If x is not divisible by the divisor, find the nearest multiple of the divisor
            let [ops, val] = nearestMultiple(x, divisor);
            result = Math.min(result, 1 + ops + minimumOperationsToMakeEqual((x + val) / divisor, y, memo));
        }
    }

    // Store the computed value in the memo
    memo.set(x, result);

    return result;
}

function nearestMultiple(x: number, divisor: number): number[] {
    let val: number = 0;
    // Find the nearest multiple of the divisor
    if (x % divisor >= divisor / 2) {
        val = divisor - (x % divisor);
    } else {
        val = -x % divisor;
    }
    // The number of operations is the absolute value of val
    let ops = Math.abs(val);
    return [ops, val];
}

```