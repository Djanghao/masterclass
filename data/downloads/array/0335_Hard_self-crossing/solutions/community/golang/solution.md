# Linear solution

**Author:** AxDI
**Votes:** 0
**Link:** [https://leetcode.com/problems/self-crossing/solutions/4297028/](https://leetcode.com/problems/self-crossing/solutions/4297028/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The line can cross at maximum last 8 lines. Then to solve the problem we need to save last 8 lines, and check did we cross them. Crossing can happen in 2 ways:
- 1) If they perpendicular to each other (cross method)
- 2) If they are collinear (on method)


# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
func isSelfCrossing(distance []int) bool {
    dir := [4][2]int{{0, 1}, {-1, 0}, {0, -1}, {1, 0}}
    var last [8][4]int
    sz := 0
    x, y, dx, dy := 0, 0, 0, 0

    newXY := func(x, dx, y, dy int){
        if sz < 8{
            last[sz][0] = x
            last[sz][1] = dx
            last[sz][2] = y
            last[sz][3] = dy
            sz++
            return
        }
        for i := 1; i < sz; i++{
            last[i-1][0] = last[i][0]
            last[i-1][1] = last[i][1]
            last[i-1][2] = last[i][2]
            last[i-1][3] = last[i][3]
        }
        last[sz-1][0] = x
        last[sz-1][1] = dx
        last[sz-1][2] = y
        last[sz-1][3] = dy
    }

    for i, d := range distance{
        dx, dy = x + dir[i&3][0]*d, y + dir[i&3][1]*d

        for j := sz-3; j >= 0; j--{
            if (sz - j) & 1 == 1 {
                if cross(x, dx, y, dy, last[j][0], last[j][1], last[j][2], last[j][3]) {
                    return true
                }
            }else{
                if on(x, dx, y, dy, last[j][0], last[j][1], last[j][2], last[j][3]){
                    return true
                }
            }
        }
        newXY(x, dx, y, dy)
        x, y = dx, dy
    }
    return false
}

func cross(x1, x2, y1, y2, x3, x4, y3, y4 int) bool{
    //fmt.Println("cross", x1, x2, y1, y2, x3, x4, y3, y4)
    x1, x2 = min(x1, x2), max(x1, x2)
    y1, y2 = min(y1, y2), max(y1, y2)
    x3, x4 = min(x3, x4), max(x3, x4)
    y3, y4 = min(y3, y4), max(y3, y4)

    if x1 == x2{
        x1, x2, x3, x4 = x3, x4, x1, x2
        y1, y2, y3, y4 = y3, y4, y1, y2
    }
    
    return x1 <= x3 && x3 <= x2 && y3 <= y2 && y2 <= y4
}

func on(x1, x2, y1, y2, x3, x4, y3, y4 int) bool{
    //fmt.Println("on", x1, x2, y1, y2, x3, x4, y3, y4)
    x1, x2 = min(x1, x2), max(x1, x2)
    y1, y2 = min(y1, y2), max(y1, y2)
    x3, x4 = min(x3, x4), max(x3, x4)
    y3, y4 = min(y3, y4), max(y3, y4)
    
    b1 := x1 <= x3 && x3 <= x2 && x2 <= x4
    b2 := x3 <= x1 && x1 <= x4 && x4 <= x2

    b3 := y1 <= y3 && y3 <= y2 && y2 <= y4
    b4 := y3 <= y1 && y1 <= y4 && y4 <= y2

    return (b1 || b2) && (b3 || b4)
}

func min(a, b int) int{
    if a < b{
        return a
    }
    return b
}

func max(a, b int) int{
    if a > b{
        return a
    }
    return b
}
```