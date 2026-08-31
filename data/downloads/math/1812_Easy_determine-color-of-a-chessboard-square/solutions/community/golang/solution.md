# Go that beats 100%

**Author:** tuanbieber
**Votes:** 4
**Link:** [https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/2177397/](https://leetcode.com/problems/determine-color-of-a-chessboard-square/solutions/2177397/)

---

```
func squareIsWhite(c string) bool {
    s := fmt.Sprintf("%c", c[0])
    r, _ := strconv.Atoi(fmt.Sprintf("%c", c[1]))
    
    if s == "a" || s == "c" || s == "e" || s == "g" {
        if r % 2 == 0 {
            return true
        }
    } else {
        if r % 2 == 1 {
            return true
        } 
    }
    
    return false
}


```