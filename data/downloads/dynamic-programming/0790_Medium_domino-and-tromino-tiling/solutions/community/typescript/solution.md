# Typescript DP solution with explanation in comments (Runtime 90%)

**Author:** tmythicator
**Votes:** 2
**Link:** [https://leetcode.com/problems/domino-and-tromino-tiling/solutions/4379585/](https://leetcode.com/problems/domino-and-tromino-tiling/solutions/4379585/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
See comments in code
# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$ (could be optimized)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function numTilings(n: number): number {
    // Base cases:
    // 1: 2x1 => 1(verical d) = 1 way
    // 2: 2x2 => 1(vertical dd) + 1(horizontal dd) = 2 ways
    // 3: 2x3 => 1(tr+tr) + 1 (vertical ddd) + 3 (vertical d + horizontal dd) = 5 ways

    /* Recursive formula explanation:
    Each i in f(n-i) refers to i empty columns starting from the right, that can be filled with missing domino.
    In cases of f(n-1) till f(n-2) we only have 1 possible combination to fill the gap, hence multiplier is 1
    i=1 -> one vertical domino (once)
    i=2 -> two horizontal domino (once)
    In cases of f(n-3) till the last one, we use 2 distinct combinations with trominos (it could be placed in two positions)
    i=3 -> two tromino (two possibilities)
    i=4 -> two tromino + domino (two possibilities)
    i=5 -> two tromino + two domino (two possibilities)
    So we conclude the number of unique combinations on 2xn field, fully filled:
    1. f(n) = f(n-1) + f(n-2) + 2*f(n-3) + 2*f(n-4) + ... + 2*f(0);
    Lets get f(n-1) = f(n-2) + f(n-3) + 2*f(n-4) + ... + 2*f(0)
    2. => f(n) - f(n-1) = f(n-1) + f(n-3);
    3. => f(n) = 2*f(n-1) + f(n-3)
    */
    const MOD = 10 ** 9 + 7;
    const memo = new Array(n);
    memo[1] = 1
    memo[2] = 2
    memo[3] = 5
    for (let i = 4; i <= n; i++) {
        memo[i] = (2 * memo[i - 1] + memo[i - 3]) % MOD;
    }
    return memo[n];
};
```