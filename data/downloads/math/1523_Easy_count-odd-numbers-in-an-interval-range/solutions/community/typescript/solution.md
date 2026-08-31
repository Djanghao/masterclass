# Simple JavaScript/TypeScript 1 line solution

**Author:** alexandresheva
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/2126438/](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/2126438/)

---

Simple and fast JS/TS solution:
```
function countOdds(low: number, high: number): number {
    return (low % 2 === 1) ? Math.floor((high - low) / 2) + 1 : Math.round((high - low) / 2);
};
```