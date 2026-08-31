# Clean Javascript - 4 Lines - Beats 98%

**Author:** Sunlit
**Votes:** 108
**Link:** [https://leetcode.com/problems/triangle/solutions/342223/](https://leetcode.com/problems/triangle/solutions/342223/)

---

Clean Javascript, 4 lines, beats 98%.

Start at the second to last row, then add the smallest element under the current element. Continue till you reach the top.

```javascript
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    for (let i = triangle.length-2; i >= 0; i--)
        for (let j = 0; j < triangle[i].length; j++)
            triangle[i][j] += Math.min(triangle[i+1][j], triangle[i+1][j+1])
    return triangle[0][0]
}
```

For example, for a small triangle this is what the algorithm will do:

**Starting Triangle**
```
  1
 2 3    <-- Algorithm starts here, at the second to last row
4 5 6
```

**Step 1**
```
  1
 6 8    <-- 2 + min(4, 5) and 3 + min(5, 6)
4 5 6
```

**Step 2**
```
  7    <-- 1 + min(6, 8)
 6 8
4 5 6
```

**Step 3**
Finally, return `triangle[0][0]` and you have the answer. It's quite elegant, beautiful in a way. Each layer passes on knowledge from the previous layer, until you reach the top. It is the most efficient solution because it's done in O(1) memory and O(elements) time. Every element is processed exactly once.