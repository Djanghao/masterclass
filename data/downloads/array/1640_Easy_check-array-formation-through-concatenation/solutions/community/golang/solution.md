# [ Go ] Using map

**Author:** haladonu
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/918604/](https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/918604/)

---

Idea is to store the first element of piece as key and other elements as value in the map and then use this information to validate the piece order in the given array

```
func canFormArray(arr []int, pieces [][]int) bool {
    m := make(map[int][]int)
    
    for _, p := range pieces {
        m[p[0]] = p[1:]
    }
    
    for i :=0; i < len(arr); {
        piece, ok := m[arr[i]]
        
        if !ok {
            return false
        }
        
        i++
        for _, p := range piece {
            if p != arr[i] {
                return false
            }
            i++
        }
    }
    
    return true
}
```