# TS Solution

**Author:** ahmedhhamdy
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/5962400/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/5962400/)

---

Generate all the cells:

We use a nested loop to iterate through all the rows and columns. For each cell, we push its coordinates 

[i,j] into the cells array.
Sort the cells by distance:

We sort the cells array using the sort method and provide a comparison function. This function calculates the distance for each 

\u2223r\u2212rCenter\u2223+\u2223c\u2212cCenter\u2223. 

The sort function arranges the cells based on their distances from the center cell.

Return the sorted cells.


# Complexity
- Time complexity: 12ms
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: 60.08mb
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
    let cells = []

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            cells.push([i, j])
        }
    }

    return cells.sort((a, b) => {
        const  distA = Math.abs(a[0] - rCenter) + Math.abs(a[1] - cCenter)
        const  distB = Math.abs(b[0] - rCenter) + Math.abs(b[1] - cCenter)
        return distA - distB
    })
};

```