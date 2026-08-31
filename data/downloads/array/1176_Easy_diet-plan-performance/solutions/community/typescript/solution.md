# Easy: just moving window.

**Author:** subramanya4shenoy
**Votes:** 0
**Link:** [https://leetcode.com/problems/diet-plan-performance/solutions/5971170/](https://leetcode.com/problems/diet-plan-performance/solutions/5971170/)

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
```typescript []
function dietPlanPerformance(calories: number[], k: number, lower: number, upper: number): number {
    // windowSize = k
    let point= 0;
    let sum = calories.slice(0, k).reduce((acc, c) => acc+c , 0);
    if(sum < lower) point--;
    if(sum > upper) point++;

    for(let i=k; i<calories.length; i++) {
        sum = sum - calories[i-k] + calories[i];
        if(sum < lower) point--;
        if(sum > upper) point++;
    }

    return point;
};
```