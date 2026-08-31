# Typescript/Javascript One Liner Faster, Beats 100%

**Author:** kunalchitkara
**Votes:** 14
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/977722/](https://leetcode.com/problems/richest-customer-wealth/solutions/977722/)

---

```const maximumWealth = (accounts: number[][]): number => Math.max(...accounts.map(holder => holder.reduce((a, b) => a + b)));```