# Solved using area formula & overlapping check

**Author:** aagarciga
**Votes:** 2
**Link:** [https://leetcode.com/problems/rectangle-area/solutions/2824427/](https://leetcode.com/problems/rectangle-area/solutions/2824427/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using area formula: $$(x2-x1)*(y2-y1)$$

# Approach
<!-- Describe your approach to solving the problem. -->
1. Calculate both areas A, B using area formula: $$(x2-x1)*(y2-y1)$$
2. Calculate overlap distances in both 2D axis using: Math.min() - Math.max() for each pair of points.
3. Use area formula with calculated overlap distances or 0 for non overlapping scenarios. 

In case of negative ovelap distances we know there is no overlapping between the areas.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
```typescript
function computeArea(ax1: number, ay1: number, ax2: number, ay2: number, bx1: number, by1: number, bx2: number, by2: number): number {
    // Using area formula: (x2-x1)*(y2-y1)
    const areaA = area(ax1, ay1, ax2, ay2);
    const areaB = area(bx1, by1, bx2, by2);
    const overlapDistanceAxisX = Math.min(ax2, bx2) - Math.max(ax1, bx1);
    const overlapDistanceAxisY = Math.min(ay2, by2) - Math.max(ay1, by1);
    // Using max with 0 for handling non overlaping scenario 
    const overlap = Math.max(overlapDistanceAxisX, 0) * Math.max(overlapDistanceAxisY, 0);
    return areaA + areaB - overlap;
};

const area = (x1:number,y1:number, x2:number, y2:number) => (x2-x1)*(y2-y1)
```

# Code (Javascript)
```javascript
/**
 * @param {number} ax1
 * @param {number} ay1
 * @param {number} ax2
 * @param {number} ay2
 * @param {number} bx1
 * @param {number} by1
 * @param {number} bx2
 * @param {number} by2
 * @return {number}
 */
var computeArea = function(ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) {
    return  ((ax2-ax1)*(ay2-ay1)) + 
            ((bx2-bx1)*(by2-by1)) - 
            (Math.max(Math.min(ax2, bx2) - Math.max(ax1, bx1), 0))*(Math.max(Math.min(ay2, by2) - Math.max(ay1, by1), 0))
};
```