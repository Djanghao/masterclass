# Typescript Approach [O(n*x) Time/ Space]

**Author:** kyratzakos
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/solutions/5903955/](https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/solutions/5903955/)

---

Based on etian6795's Java [Solution](https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/solutions/5903707/stirling-numbers-of-the-second-kind)

# Intuition
The function calculates the number of ways to choose subsets with specific properties using combinatorics, Stirling numbers, and factorials under modular arithmetic constraints.

# Approach
1. Combination Table: Initialize and compute combinations for subset choices.
2. Stirling Numbers Table: Calculate Stirling numbers for subsets of size `m`.
3. Factorials and Powers: Precompute factorials and powers of `y` to apply in the final formula.
4. Aggregate Result: Sum terms over possible subset sizes using precomputed tables.

# Complexity
- Time complexity:
$O(n\xD7x)$ for filling tables of combinations and Stirling numbers.

- Space complexity:
$O(n\xD7x)$ for storing DP tables, factorials, and power values.

# Code
```typescript []
const MOD = BigInt(1e9 + 7)

function numberOfWays(n: number, x: number, y: number): number {
    if (n === 0) return 1
    if (x === 0) return 0

    const comb: bigint[][] = Array.from({ length: x + 1 }, () => Array(x + 1).fill(BigInt(0)))
    comb[0][0] = BigInt(1)
    for (let i = 1; i <= x; i++) {
        comb[i][0] = BigInt(1)
        for (let j = 1; j <= i; j++) {
            comb[i][j] = (comb[i - 1][j - 1] + comb[i - 1][j]) % MOD
        }
    }

    const S: bigint[][] = Array.from({ length: n + 1 }, () => Array(x + 1).fill(BigInt(0)))
    S[0][0] = BigInt(1)
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= Math.min(i, x); j++) {
            S[i][j] = (S[i - 1][j - 1] + (BigInt(j) * S[i - 1][j]) % MOD) % MOD
        }
    }

    const fact: bigint[] = Array(x + 1).fill(BigInt(1))
    for (let i = 1; i <= x; i++) {
        fact[i] = (fact[i - 1] * BigInt(i)) % MOD
    }

    const powerY: bigint[] = Array(x + 1).fill(BigInt(1))
    for (let i = 1; i <= x; i++) {
        powerY[i] = (powerY[i - 1] * BigInt(y)) % MOD
    }

    let result = BigInt(0)
    for (let m = 1; m <= x && m <= n; m++) {
        const binom = comb[x][m]
        const stirling = S[n][m]
        const factorial = fact[m]
        const yPower = powerY[m]
        let term = ((binom * stirling) % MOD * factorial) % MOD
        term = (term * yPower) % MOD
        result = (result + term) % MOD
    }

    return Number(result)
}

```