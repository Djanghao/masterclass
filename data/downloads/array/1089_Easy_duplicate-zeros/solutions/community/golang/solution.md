# Go simple solution beats 100%/100%, O(n) complexity, O(1) space

**Author:** virtyaluk
**Votes:** 10
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/589488/](https://leetcode.com/problems/duplicate-zeros/solutions/589488/)

---

```go
func duplicateZeros(arr []int)  {
    zeros := 0

    for _, v := range arr {
        if v == 0 {
            zeros++
        }
    }

    for i := len(arr) - 1; i >= 0; i-- {
        if arr[i] == 0 {
            if zeros + i < len(arr) {
                arr[zeros + i] = 0
            }
            
            if zeros - 1 + i < len(arr) {
                arr[zeros - 1 + i] = 0
            }
            
            zeros--
        } else if i + zeros < len(arr) {
            arr[zeros + i] = arr[i]
        }
    }
}
```