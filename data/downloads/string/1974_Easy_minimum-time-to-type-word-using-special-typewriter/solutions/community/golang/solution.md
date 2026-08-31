# Golang 100% fastest 100% easiest

**Author:** gene-rode
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/3273645/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/3273645/)

---


```
func minTimeToType(word string) (sum int) {
    cur := 0
    for _,v := range word {
        c := int(v - 97)
        sum += min(abs(c - cur), abs(abs(c - cur) - 26)) + 1
        cur = c
    }
    return sum
}
func min (a,b int) int {
    if a < b {return a }   
    return b
}
func abs(a int) int {
    if a < 0 { return -a} 
    return a
 }

```