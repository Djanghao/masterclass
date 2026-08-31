# Idiomatic Golang Solution

**Author:** xplorer
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/915296/](https://leetcode.com/problems/maximize-distance-to-closest-person/solutions/915296/)

---

```
func maxDistToClosest(seats []int) int {
    n := len(seats)
    prev := -1
    ans := 0
    
    for i := 0; i < n; i++ {
        if seats[i] == 1 {
            if prev == -1 {
                ans = i
            } else {
                ans = max(ans, (i - prev) / 2)        
            }
            prev = i
        }
    }
    ans = max(ans, n - prev - 1)
    return ans
}

func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}
```