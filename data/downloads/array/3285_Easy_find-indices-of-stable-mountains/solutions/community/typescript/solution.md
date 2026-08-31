# Find Stable Mountain Peaks Above Threshold

**Author:** traezeeofor
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/5884954/](https://leetcode.com/problems/find-indices-of-stable-mountains/solutions/5884954/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I iterated through the height array starting from the second element and compared each previous height to the given threshold. If the previous height was greater than the threshold, I added the current index to the stable array. Finally, I returned the stable array containing all such indices.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function stableMountains(height: number[], threshold: number): number[] {
    let stable: number[] = [];

    for (let i = 1; i < height.length; i++) {
      if (height[i - 1] > threshold) {
        stable.push(i);
      }
    }
    return stable;
};
```