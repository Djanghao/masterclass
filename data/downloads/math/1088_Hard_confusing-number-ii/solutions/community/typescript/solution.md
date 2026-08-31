# TypeScript Solution: (Beats 100%) ✔

**Author:** adhamniazy
**Votes:** 0
**Link:** [https://leetcode.com/problems/confusing-number-ii/solutions/3086735/](https://leetcode.com/problems/confusing-number-ii/solutions/3086735/)

---

# Intuition
Confusing numbers must only consist of digits 0, 1, 6, 8, and 9. We can enumerate each digit of a candidate number using DFS and check whether it's a confusing number or not.

We can change the input number `n` into a string and construct another candidate string with the same length using digits '0', '1', '6', '8', and '9'. We use DFS to construct the candidate string from left to right. For simplicity, we allow leading zeros when constructing the candidate. Since both strings have the same length, it means that comparing 2 strings has the same result as comparing the 2 equivalent numbers (so we don't need to cast string to int). During the construction, we can record whether the current prefix is smaller than `n` (or equal to `n`) and after the construction, we can check whether the candidate is a confusing number after removing the leading 0s.

# Code
```ts
function confusingNumberII(n: number): number {
    const valid: number[][] = [[0, 0], [1, 1], [6, 9], [8, 8], [9, 6]];
    return dfs(0, 0, 1, n, valid);
};

function dfs(num: number, rotated: number, order: number, n: number, valid: number[][]) {
    let count: number = 0;
    if (num !== rotated) count++;
    for (const [dig, rot] of valid) {
        if (num === 0 && dig === 0) continue;
        if (num * 10 + dig > n) break;
        count += dfs(num * 10 + dig, rot * order + rotated, order * 10, n, valid);
    }
    
    return count;
}
```