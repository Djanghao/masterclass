# [Golang] Simple solution using sorting

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4414514/](https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4414514/)

---

# Code
```
func maximizeSquareHoleArea(n int, m int, hBars []int, vBars []int) int {
  sort.Ints(hBars)
  // We'll identify the max number of consecutive horizontal and vertical bars we can remove
  hcurr, hmax := 1, 1
  for i := 1; i < len(hBars); i++ {
    if hBars[i] == hBars[i-1] + 1 {
      hcurr++
    } else {
      hcurr = 1
    }
    hmax = max(hmax, hcurr)
  }
  sort.Ints(vBars)
  vcurr, vmax := 1, 1
  for j := 1; j < len(vBars); j++ {
    if vBars[j] == vBars[j-1] + 1 {
      vcurr++
    } else {
      vcurr = 1
    }
    vmax = max(vmax, vcurr)
  }
  // Since we need a square shape, we have to remove the same number of
  // horizontal and vertical bars which is the minimum of these two.
  side := min(hmax, vmax)
  return (side+1) * (side+1) // return the area
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}

func min(a, b int) int {
  if a < b {
    return a
  }
  return b
}
```