# Fastest solution

**Author:** pchchv
**Votes:** 0
**Link:** [https://leetcode.com/problems/perfect-rectangle/solutions/6014603/](https://leetcode.com/problems/perfect-rectangle/solutions/6014603/)

---

- Time: 16ms (Beats 100%)
- Space: 9MB (Beats 22%)
```golang
func rightArea(cnt map[[2]int]int, area, minX, minY, maxX, maxY int) bool {
    if area != (maxX - minX) * (maxY-minY) {
        return false
    }

    if cnt[[2]int{minX, minY}] != 1 || cnt[[2]int{minX, maxY}] != 1 ||
    cnt[[2]int{maxX, maxY}] != 1 || cnt[[2]int{maxX, minY}] != 1 {
        return false
    }

    return true
}

func isRectangleCover(rectangles [][]int) bool {
    var area int
    count := map[[2]int]int{}
    minX, minY := rectangles[0][0], rectangles[0][1]
    maxX, maxY := rectangles[0][2], rectangles[0][3]
    for _, r := range rectangles {
        area += (r[2] - r[0]) * (r[3] - r[1])
        minX, minY = min(minX, r[0]), min(minY, r[1])
        maxX, maxY = max(maxX, r[2]), max(maxY, r[3])
        count[[2]int{r[0], r[1]}]++
        count[[2]int{r[0], r[3]}]++
        count[[2]int{r[2], r[3]}]++
        count[[2]int{r[2], r[1]}]++
    }

    if rightArea(count, area, minX, minY, maxX, maxY) {
        delete(count, [2]int{minX, minY})
        delete(count, [2]int{minX, maxY})
        delete(count, [2]int{maxX, maxY})
        delete(count, [2]int{maxX, minY})
    } else {
        return false
    }

    for _, c := range count {
        if c != 2 && c != 4 {
            return false
        }
    }

    return true
}
```