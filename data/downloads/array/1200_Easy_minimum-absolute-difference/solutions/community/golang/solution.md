# Go O(NlogN)

**Author:** tuanbieber
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/2217169/](https://leetcode.com/problems/minimum-absolute-difference/solutions/2217169/)

---

```
func minimumAbsDifference(arr []int) [][]int {
    var res [][]int
    
    sort.Ints(arr)
    minDiff := arr[1] - arr[0]
    
    for i := 1; i < len(arr) - 1; i++ {
        if arr[i+1] - arr[i] < minDiff {
            minDiff = arr[i+1] - arr[i]
        }
    }
    
    for i := 0; i < len(arr) - 1; i++ {
        if arr[i+1] - arr[i] == minDiff {
            res = append(res, []int{arr[i], arr[i+1]})
        }
    }
    
    return res
}
```