# easy not medium Div + 1, 70ms(Beats 100%) 52.24MB(33.33%)

**Author:** morris367
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/4785306/](https://leetcode.com/problems/number-of-ways-to-buy-pens-and-pencils/solutions/4785306/)

---

# Intuition
like explanation
div + 1

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function waysToBuyPensPencils(total: number, cost1: number, cost2: number): number {
  let max: number = Math.floor(total / cost1);
  let ans: number = 0;

  for (let i: number = 0; i <= max; i++)
    ans += Math.floor((total - cost1 * i) / cost2) + 1;

  return ans;
};
```

![Screenshot 2024-02-26 at 9.45.55 PM.png](./images/0.png)
