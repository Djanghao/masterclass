# Beat 100% of users

**Author:** Cesc99
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/4913877/](https://leetcode.com/problems/maximum-number-of-weeks-for-which-you-can-work/solutions/4913877/)

---

# Complexity
- Time complexity: o(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: o(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function numberOfWeeks(milestones: number[]): number {
    let maxNumberOfWeeks = 0;
    let maxItem = -Infinity;
    milestones.forEach((milestone) => {
        maxNumberOfWeeks += milestone
        maxItem = Math.max(maxItem, milestone)
    });
    return Math.min(maxNumberOfWeeks, (maxNumberOfWeeks - maxItem) * 2 + 1)
};
```