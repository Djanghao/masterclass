# DP Bottom-Up

**Author:** seredenko99
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-house-ii/solutions/4746297/](https://leetcode.com/problems/paint-house-ii/solutions/4746297/)

---

# Complexity
- Time complexity:  $$O(n*k)$$ where $$k$$ is num of colors and $$n$$ 
- Space complexity: $$O(1)$$

# Code
```
function minCostII(costs: number[][]): number {
    for (let house = 1; house < costs.length; house++) {
        for (let color = 0; color < costs[house].length; color++) {
            costs[house][color] += Math.min(...costs[house - 1].filter((_, i) => i !== color));
        }
    }

    return Math.min(...costs.at(-1));
};
```