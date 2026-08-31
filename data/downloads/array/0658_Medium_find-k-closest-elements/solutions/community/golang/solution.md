# solution by golang

**Author:** Routeman
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/1708301/](https://leetcode.com/problems/find-k-closest-elements/solutions/1708301/)

---

```
func findClosestElements(arr []int, k int, x int) []int {
    for len(arr) > k {
        if abs(arr[0] - x) > abs(arr[len(arr) - 1] - x) {
            arr = arr[1:]
        } else {
            arr = arr[:len(arr)-1]
        }
    }
    
    return arr
}

func abs(a int) int {
    if a < 0 {
        return -a
    }
    return a
}
```