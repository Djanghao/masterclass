# Go O(n)

**Author:** tuanbieber
**Votes:** 5
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/2164119/](https://leetcode.com/problems/contains-duplicate-ii/solutions/2164119/)

---

```
func containsNearbyDuplicate(nums []int, k int) bool {
    m := make(map[int]int)
    
    for i, num := range nums {
        if value, ok := m[num]; ok {
            if absInt(i, value) <= k {
                return true
            } else {
                m[num] = i
            }
        } else {
            m[num] = i
        }
    }
    
    return false
}

func absInt(a, b int) int {
    if a - b < 0 {
        return b - a
    }
    
    return a - b
}
```