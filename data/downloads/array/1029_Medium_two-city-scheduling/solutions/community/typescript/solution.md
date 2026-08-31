# JS/TS Easy solution with explanation

**Author:** ygdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-city-scheduling/solutions/5636451/](https://leetcode.com/problems/two-city-scheduling/solutions/5636451/)

---

# Solution
We sort the array by favouring the profitablity of choosing city A. How do we check it? Simply by comparing cost ratios of two comparable elements in the sort method.

Once it's done, we iterate through sorted array and adding city A costs from first hals, and city B from another half.

# Complexity
- Time complexity: $$O(n log n)$$ - due to `sort` method
- Space complexity: $$O(n)$$ - since `sort` method takes `n` space for callstack

# Code
```
function twoCitySchedCost(costs: number[][]): number {
    let total = 0;
    const half = costs.length / 2;

    costs.sort((a, b) => {
        const ratioA = a[0] - a[1];
        const ratioB = b[0] - b[1];
        return ratioA - ratioB
    })

    costs.forEach((cost, i) => {
        if(i < half) {
            total += cost[0];
        } else total += cost[1];
    })

    return total;
};
```