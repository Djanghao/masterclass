# Go Solution

**Author:** 0xedb
**Votes:** 1
**Link:** [https://leetcode.com/problems/single-row-keyboard/solutions/908694/](https://leetcode.com/problems/single-row-keyboard/solutions/908694/)

---

```go
func calculateTime(keyboard string, word string) int {
    count, cur := 0, 0
 
    keys := map[rune]int{}
    
    for i, v := range keyboard {
        keys[v] = i
    }
    
    for _, v := range word {
        temp := keys[v]
        count += int(math.Abs(float64(cur) - float64(temp)))
        cur = temp
        
    }
     
    
    return count
}
```