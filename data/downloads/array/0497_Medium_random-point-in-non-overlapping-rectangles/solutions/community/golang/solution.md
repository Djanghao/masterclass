# Go prefix sum and binary search

**Author:** dchooyc
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/3250889/](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles/solutions/3250889/)

---

```
type Solution struct {
    n, total int
    rects [][]int
    prefixsum []int
}


func Constructor(rects [][]int) Solution {
    n := len(rects)
    prefixsum := make([]int, n)

    for i, rect := range rects {
        length := rect[2] - rect[0] + 1
        width := rect[3] - rect[1] + 1
        area := length * width
        prefixsum[i] = area

        if i > 0 {
            prefixsum[i] += prefixsum[i - 1]
        }
    }

    return Solution{n, prefixsum[n - 1], rects, prefixsum}
}


func (this *Solution) Pick() []int {
    point := random(1, this.total)
    index := bSearch(this.prefixsum, point)
    rect := this.rects[index]
    return []int{random(rect[0], rect[2]), random(rect[1], rect[3])}
}


func random(min, max int) int {
    return min + rand.Intn(max - min + 1)
}


func bSearch(a []int, target int) int {
    lo, hi := 0, len(a) - 1

    for lo < hi {
        mid := lo + ((hi - lo) >> 1)

        if a[mid] < target {
            lo = mid + 1
        } else {
            hi = mid
        }
    }

    return lo
}
```