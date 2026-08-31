# Go bottom up with comments - constant memory- Beats 100% compute and memory

**Author:** czubakowski
**Votes:** 6
**Link:** [https://leetcode.com/problems/triangle/solutions/1389954/](https://leetcode.com/problems/triangle/solutions/1389954/)

---

The idea is to go bottom-up from the bottom of the triangle.  We do this by looking starting at the 2nd to last row of the triangle and for each cell, finding the min step of the next row. Then we store that min step + cell value at the current row location.  Once we're done with the row, we move up, so by the time we're at the top of the triangle, we have the minimal sum stored in the [0][0] location.

```
func minimumTotal(triangle [][]int) int {
    // We can take a Greedy approach starting at the bottom and storing it on the next row up
    
    // Note: r starts a len-2 because the last row is len-1 and we'll be looking down one row!
    for r := len(triangle)-2; r>=0; r-- {
        for c := range triangle[r] {
            // figure out what's the min sum for this node by looking at the possible 2 spots in the next row
            // ie: get the greedy min next step on the next row and add it to the current [r][c] in the triangle
            triangle[r][c] += min(triangle[r+1][c], triangle[r+1][c+1])
        }
    }
    // at this point, the min sum should be at the top 
    return triangle[0][0]
}

func min(i, j int) int {
    if i < j {
        return i
    }
    return j
}
```