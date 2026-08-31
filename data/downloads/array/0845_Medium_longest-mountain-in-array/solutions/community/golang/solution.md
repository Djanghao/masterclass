# Go one pass with comments

**Author:** dchooyc
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-mountain-in-array/solutions/4154160/](https://leetcode.com/problems/longest-mountain-in-array/solutions/4154160/)

---

```
func longestMountain(arr []int) int {
    res, n := 0, len(arr)

    for i := 0; i < n; {
        incline := 0
        // while element infront can be compared and it is bigger
        for i < n - 1 && arr[i] < arr[i + 1] {
            incline++
            i++
        }

        decline := 0
        // while element infront can be compared and it is smaller
        for i < n - 1 && arr[i] > arr[i + 1] {
            decline++
            i++
        }
        
        // if there was incline and then decline there was mountain
        if incline > 0 && decline > 0 {
            // include the starting element
            cur := incline + decline + 1
            if cur > res { res = cur }
        }

        // if it's the last element or the element infront is the same
        if i == n - 1 || arr[i] == arr[i + 1] {
            i++
        }
    }

    return res
}
```