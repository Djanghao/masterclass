# [TS/JS] Iterative solution with reduce()

**Author:** onontiony
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/5781304/](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/5781304/)

---

# Code
```typescript []
function maximumTop(nums: number[], k: number): number
{
    if (k & 1 && nums.length <= 1)
        // Trivial edge case
        return -1;

    return nums.reduce((prev, num, i) =>
        // Check if not past k and not one-off
        i <= k && i !== k - 1
            // Can be on top, assign to max if larger
            ? Math.max(num, prev)
            : prev,

        // Initial value
        0
    );
}
```
