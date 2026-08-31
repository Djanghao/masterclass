# Go sort 24ms 100% solution

**Author:** tjucoder
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-values-from-labels/solutions/516821/](https://leetcode.com/problems/largest-values-from-labels/solutions/516821/)

---

```go
func largestValsFromLabels(values []int, labels []int, num_wanted int, use_limit int) int {
    helpSlice := make([][2]int, len(values))
    for i := range values {
        helpSlice[i] = [2]int{values[i], labels[i]}
    }
    sort.Slice(helpSlice, func(i, j int) bool {
        return helpSlice[i][0] > helpSlice[j][0]
    })
    helpMap := map[int]int{}
    current, summary := 0, 0
    for _, v := range helpSlice {
        if helpMap[v[1]] < use_limit {
            helpMap[v[1]]++
            current++
            summary += v[0]
        }
        if current == num_wanted {
            break
        }
    }
    return summary
}
```