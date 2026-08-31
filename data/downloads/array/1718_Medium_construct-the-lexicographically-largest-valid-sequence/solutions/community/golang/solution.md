# Golang | Recursion Search with early termination | 0ms

**Author:** linhduong
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/1627872/](https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/solutions/1627872/)

---

```
func constructDistancedSequence(n int) []int {
    ans := make([]int, 2 * n - 1)
    flag := make([]bool, n + 1) 
    
    find(ans, flag, 0)
    
    for i := range ans {
        if ans[i] == 0 {
            ans[i] = 1
            break
        }
    }
    
    return ans
}

func find(a []int, flag []bool, ind int) bool {
    if ind + 1 == len(a) {
        return true
    }
    
    if a[ind] != 0 {
        return find(a, flag, ind + 1)
    }
    
    for i := len(flag) - 1; i >= 1; i-- {
        if flag[i] {
            continue
        }
        
        if i == 1 {
            a[ind], flag[1] = 1, true
            if find(a, flag, ind + 1) {
                return true
            }
            a[ind], flag[1] = 0, false
        } else if ind + i < len(a) && a[ind + i] == 0 {
            a[ind], a[ind + i], flag[i] = i, i, true
            if find(a, flag, ind + 1) {
                return true
            }
            a[ind], a[ind + i], flag[i] = 0, 0, false
        }
    }
    
    return false
}
```