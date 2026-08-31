# Time: O(N) | Space: O(1)

**Author:** rojas
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/5525237/](https://leetcode.com/problems/missing-ranges/solutions/5525237/)

---

# Complexity

- Time complexity: $O(N)$

- Space complexity: $O(1)$

# Code

```typescript
function findMissingRanges(nums: number[], lower: number, upper: number): number[][] {
    const ranges: number[][] = [];

    for (const num of nums) {
        if (lower <= num - 1) {
           ranges.push([lower, num - 1]);
        }
        lower = num + 1;
    }
    
    if (lower <= upper) {
        ranges.push([lower, upper]);
    }
    
    return ranges;
};
```