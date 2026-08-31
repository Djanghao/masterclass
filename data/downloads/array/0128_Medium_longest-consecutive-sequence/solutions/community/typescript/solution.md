# ⛳️ Clean TypeScript solution | Beats 85.13%, O(n)

**Author:** AlexanderFSP
**Votes:** 6
**Link:** [https://leetcode.com/problems/longest-consecutive-sequence/solutions/4069154/](https://leetcode.com/problems/longest-consecutive-sequence/solutions/4069154/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function longestConsecutive(nums: number[]): number {
    const set = new Set(nums);
    let max = 0;

    for (const num of nums) {
        if (set.has(num + 1))
            continue;

        let counter = 1, current = num;

        while (set.has(--current))
            counter++;

        max = Math.max(counter, max);
    }

    return max;
};
```