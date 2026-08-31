# Go prefix sum

**Author:** dchooyc
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/2098440/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/2098440/)

---

```
func isCovered(ranges [][]int, left int, right int) bool {
    a := make([]int, 52)
    
    for _, v := range ranges {
        start, end := v[0], v[1] + 1
        
        a[start]++
        a[end]--
    }
    
    for i := 1; i < 51; i++ {
        a[i] += a[i - 1]
    }
    
    for i := left; i <= right; i++ {
        if a[i] < 1 {
            return false
        }
    }
    
    return true
}
```