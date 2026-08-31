# TS Solution

**Author:** ahmedhhamdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/alternating-groups-i/solutions/6004782/](https://leetcode.com/problems/alternating-groups-i/solutions/6004782/)

---

Wrapping Index Calculation: (i - 1 + n) % n and (i + 1) % n are used to wrap around the array when accessing previous and next elements.

Comparison: Each element is compared to its previous and next elements to identify groups where it\u2019s different from both neighbors.

# Complexity
- Time complexity: 74ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 52.03mb
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function numberOfAlternatingGroups(colors: number[]): number {
    let n = colors.length
    let count = 0
    
    for (let i = 0; i < n; i++) {
      if (colors[(i - 1 + n) % n] !== colors[i] && colors[(i + 1) % n] !== colors[i]) {
        count++
      }
    }
  
  return count
};

```