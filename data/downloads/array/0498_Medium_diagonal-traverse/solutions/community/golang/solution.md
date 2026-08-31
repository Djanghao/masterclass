# Go solution with comments

**Author:** sharno
**Votes:** 3
**Link:** [https://leetcode.com/problems/diagonal-traverse/solutions/4713096/](https://leetcode.com/problems/diagonal-traverse/solutions/4713096/)

---

# Intuition
We care about:
- Direction
- borders (in order)
    - right (has to come before left)
    - down (has to come before up)
    - left
    - up

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
func findDiagonalOrder(mat [][]int) []int {
    x, y := 0, 0
    rows := len(mat) - 1
    cols := len(mat[0]) - 1
    res := []int{}
    up := true
    for {
        // terminating condition
        if x + y > rows + cols {
            break
        }
        res = append(res, mat[x][y])

        // right border
        if up && y >= cols { // right border
            up = false
            x++
        } else if up && x <= 0 { // top border
            up = false
            y++
        } else if !up && x >= rows { // right border
            up = true
            y++
        } else if !up && y <= 0 { // bottom border
            up = true
            x++
        } else if up { // regular case going up
            x--
            y++
        } else { // regular case going down
            x++
            y--
        }
    }
    return res
}
```