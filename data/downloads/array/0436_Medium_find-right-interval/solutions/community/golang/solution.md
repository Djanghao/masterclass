# [golang] Sort + binary search with short explanation

**Author:** spektrokalter
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-right-interval/solutions/814512/](https://leetcode.com/problems/find-right-interval/solutions/814512/)

---

First, sorting implies loosing indices of original array. For that reason, keep each value and its index in original array in a tuple.

Then, sort the array by interval start points. Observe that now, for any interval, its "right" intervals come *after* that interval.

Also observe that first "right" interval has minimum start point to build "right" connection. *It* makes possible to find that interval by binary search.

```golang
func findRightInterval(intervals [][]int) []int {
        
        // [3]int:
        //   0: interval[0]
        //   1: interval[1]
        //   2: interval's index in intervals
        //
        sorted := make([][3]int, len(intervals))[:0]
        
        for ik, i := range intervals {
                sorted = append(sorted, [3]int{i[0], i[1], ik})
        }
        
        sort.Slice(
                sorted,
                func(i, j int) bool { return sorted[i][0] < sorted[j][0] },
        )
        
        out := make([]int, len(intervals))
        
        for i := 0; i < len(sorted); i++ {
                found := sort.Search(
                        len(sorted),
                        func(j int) bool { return sorted[i][1] <= sorted[j][0] },
                )
                if found == len(sorted) {
                        out[sorted[i][2]] = -1
                } else {
                        out[sorted[i][2]] = sorted[found][2]
                }
        }
        
        return out
}
```