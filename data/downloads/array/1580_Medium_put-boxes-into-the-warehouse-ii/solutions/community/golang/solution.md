# Golang, two pointers

**Author:** gvnpl
**Votes:** 0
**Link:** [https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/3729884/](https://leetcode.com/problems/put-boxes-into-the-warehouse-ii/solutions/3729884/)

---

```
func maxBoxesInWarehouse(b []int, w []int) int {
    sort.Slice(b, func(i, j int) bool {
        return b[i] > b[j]
    })    
    
    ans, l, r := 0, 0, len(w) - 1
    for _, v := range b {
        if l > r {
            break
        }
        if v <= w[l] {
            l += 1
            ans += 1
        } else if v <= w[r] {
            r -= 1
            ans += 1
        }
    }
    
    return ans 
}
```