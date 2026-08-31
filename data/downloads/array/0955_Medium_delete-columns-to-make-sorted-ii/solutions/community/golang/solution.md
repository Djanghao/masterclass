# Golang | 0ms | O(N * String_Len)

**Author:** linhduong
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted-ii/solutions/1760165/](https://leetcode.com/problems/delete-columns-to-make-sorted-ii/solutions/1760165/)

---

```go
func minDeletionSize(strs []string) int {
    n := len(strs)
    if n == 1 {
        return 0
    }
    
    slen := len(strs[0])
    
    set, newSet := make([][]string, 0, n), make([][]string, 0, n)
    set = append(set, strs)
   
    ans := 0
    for i := 0; i < slen; i++ {
        newSet = newSet[:0]
       
        ok := true
        for _, s := range set {
            newSet, ok = checkAndPartition(s, i, newSet)
            if !ok {
                break
            }
        } 
        
        if ok {
            set, newSet = newSet, set
            if len(set) == 0 {
                break
            }
        } else {
            ans++
        }
    }
    
    return ans
}

func checkAndPartition(strs []string, index int, parts [][]string) ([][]string, bool) {
    n := len(strs)
    for i := 1; i < n; i++ {
        if strs[i][index] < strs[i-1][index] {
            return parts, false
        }
    }
    
    for i := 1; i < n; {
        if ch := strs[i][index]; ch == strs[i-1][index] { // found
            j := i
            for j < n && strs[j][index] == ch {
                j++
            }
            
            parts = append(parts, strs[i-1:j])
            
            i = j + 1
        } else {
            i++
        }
    } 
    
    return parts, true 
}
```