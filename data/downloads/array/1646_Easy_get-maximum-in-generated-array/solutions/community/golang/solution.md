# Go just do it

**Author:** dchooyc
**Votes:** 3
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/1964066/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/1964066/)

---

```
func getMaximumGenerated(n int) int {
    if n < 2 {
        return n
    }
    
    a, max := make([]int, n + 1), 0
    
    a[0] = 0
    a[1] = 1
    
    for i := 2; i <= n; i++ {
        num := a[i / 2]
        
        if i % 2 == 1 {
            num += a[(i / 2) + 1]
        }
        
        a[i] = num
        
        if num > max {
            max = num
        }
    }
    
    return max
}
```