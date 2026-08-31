# Solution Typescript and Javascript

**Author:** amellalkameleddine
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/3193657/](https://leetcode.com/problems/minimum-penalty-for-a-shop/solutions/3193657/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function bestClosingTime(customers: string): number {

    let ans :number = 0;
    let profit: number = 0;
    let maxProfit: number = 0;

    for (let i = 0; i < customers.length; i++) {
      profit += customers[i] === 'Y' ? 1 : -1;
      if (profit > maxProfit) {
        maxProfit = profit;
        ans = i + 1;
      }
    }

 return ans;
};
```