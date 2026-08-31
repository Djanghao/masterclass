# Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/5829527/](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/5829527/)

---

# Intuition
The situation revolves around assigning hats to people such that no two people wear the same hat and each person can only wear specific hats. To solve this, we need to consider the constraints of each person\u2019s preferences and explore all valid combinations of hat assignments.

# Approach
We use dynamic programming with a bitmask to represent the state of hat assignments, where each bit in the mask indicates whether a person has been assigned a hat, updating the number of ways hats can be assigned based on the preferences of each hat type.

# Complexity
- Time complexity:
 O(n * 2^n), where n is the number of people, because we iterate through all possible states of hat assignments.

- Space complexity:
O(2^n), as we store the number of ways for each possible state using a bitmask.

# Code
```typescript []
function numberWays(hats: number[][]): number {
    const MOD = 10 ** 9 + 7;
    const n = hats.length;
    const m = 1 << n; // Total states for bitmask representation
    const ans: number[] = new Array(m).fill(0);
    const hatPreferences: number[][] = Array.from({ length: 41 }, () => []);

    // Base case: one way to assign no hats
    ans[0] = 1;

    // Populate hatPreferences to track which people can wear each hat
    for (let person = 0; person < n; person++) {
        for (const hat of hats[person]) {
            hatPreferences[hat].push(person);
        }
    }

    // Dynamic programming to calculate number of ways to assign hats
    for (let hat = 1; hat <= 40; hat++) {
        for (let state = m - 1; state >= 0; state--) {
            for (const person of hatPreferences[hat]) {
                // Check if the person is already wearing a hat in the current state
                if ((state & (1 << person)) > 0) {
                    ans[state] = (ans[state] + ans[state ^ (1 << person)]) % MOD;
                }
            }
        }
    }

    // Return the number of ways for the state where all people are assigned a hat
    return ans[m - 1];
}

```