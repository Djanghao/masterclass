# clean, simple go solution

**Author:** carti
**Votes:** 15
**Link:** [https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/2229229/](https://leetcode.com/problems/final-value-of-variable-after-performing-operations/solutions/2229229/)

---

```go
func finalValueAfterOperations(operations []string) int {
    X := 0
    
    // map + and - to values
    values := map[byte]int{'+': 1, '-': -1}
    
    for _, operation := range operations {
        // only need to check middle character
        // and mapping of the byte
        X += values[operation[1]]
    }
    
    return X
}
```