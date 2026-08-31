# Simple 100% TypeScript Solution

**Author:** NKeil
**Votes:** 1
**Link:** [https://leetcode.com/problems/knight-dialer/solutions/4336984/](https://leetcode.com/problems/knight-dialer/solutions/4336984/)

---

# Overview
Method: Bottom-up DP

Time: O(N)

Space: O(N)

# Code
```
function knightDialer(n: number): number {
    const MOD = 10 ** 9 + 7;
    const moves = {
        0: [4, 6],
        1: [6, 8],
        2: [7, 9],
        3: [4, 8],
        4: [0, 3, 9],
        5: [],
        6: [0, 1, 7],
        7: [2, 6],
        8: [1, 3],
        9: [2, 4],
    } as const;

    const totals = new Array(10).fill(1);

    for (let i = 1; i < n; ++i) {
        const prevTotals = [...totals];
        for (let num = 0; num < 10; ++num) {
            totals[num] = moves[num].reduce(
                (a, move) => prevTotals[move] + a, 
                0,
            ) % MOD;
        }
    }
    return totals.reduce((a, num) => a + num, 0) % MOD;
};
```