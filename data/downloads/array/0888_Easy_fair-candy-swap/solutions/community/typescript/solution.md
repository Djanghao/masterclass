# Easy solution

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/5944627/](https://leetcode.com/problems/fair-candy-swap/solutions/5944627/)

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
function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  
    const sumA = aliceSizes.reduce((acc, x) => acc + x, 0);
    const sumB = bobSizes.reduce((acc, x) => acc + x, 0);
    const delta = (sumA - sumB) / 2;
    
    const setB = new Set(bobSizes);
    
    for (let x of aliceSizes) {
        
        const y = x - delta;
        if (setB.has(y)) {
            return [x, y];
        }
    }

    
};
```