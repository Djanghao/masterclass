# Compact Solution | time O(n) | space O(1) | Typescript

**Author:** zhr37
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/2110671/](https://leetcode.com/problems/number-of-smooth-descent-periods-of-a-stock/solutions/2110671/)

---

```
function getDescentPeriods(prices: number[]): number {
    let start = 0;
    return prices.reduce( (prev, curr, i) => {
        if (prices[i-1] !== curr + 1) start = i 
        return prev + i - start + 1
   }, 0);
};
```