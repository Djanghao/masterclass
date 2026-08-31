# JS/TS Solution

**Author:** giogokul13
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/6066199/](https://leetcode.com/problems/guess-number-higher-or-lower-ii/solutions/6066199/)

---

# Complexity
## Time complexity: O(N ^ 3)
- The time complexity of the given function `getMoneyAmount` is O(n^3). This is because the function uses a nested loop structure where the outer loop iterates over the range from `start` to `end`, and for each iteration, it makes two recursive calls to `calculate`, which can also take O(n) time in the worst case. Since the function is called for every pair of `start` and `end` values, the overall complexity becomes O(n^3).

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

## Space complexity: O(N ^ 2)
- The space complexity is O(n^2). This is due to the `table` array that is created to store the results of subproblems, which has dimensions (n+1) x (n+1). Additionally, the recursion stack can go as deep as O(n) in the worst case, but the dominant factor in space complexity is the `table`, leading to an overall space complexity of O(n^2).

<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number} n
 * @return {number}
 */
var getMoneyAmount = function (n) {
    let table = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
    let calculate = function (start, end) {
        if (start >= end) return 0;

        if (table[start][end] != 0) return table[start][end];

        let res = Number.MAX_SAFE_INTEGER;
        for (let i = start; i <= end; i++) {
            let temp = i + Math.max(calculate(start, i - 1), calculate(i + 1, end));
            res = Math.min(res, temp);
        }
        table[start][end] = res;
        return res;
    }

    return calculate(1, n);
};
```