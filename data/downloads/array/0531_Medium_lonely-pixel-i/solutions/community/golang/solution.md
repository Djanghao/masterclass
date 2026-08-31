# Go(lang) Solution

**Author:** 0xedb
**Votes:** 1
**Link:** [https://leetcode.com/problems/lonely-pixel-i/solutions/2090417/](https://leetcode.com/problems/lonely-pixel-i/solutions/2090417/)

---

```go
func findLonelyPixel(picture [][]byte) int {
    r := len(picture)
    c := len(picture[0])
    
    seenR := make([]int, r)
    seenC := make([]int, c)
    
    for i, val := range picture {
        for j := range val {
            if picture[i][j] == 'B' {
                seenR[i]++
                seenC[j]++
            }                        
        }
    }
    
    count := 0
    for i, val := range picture {
        for j := range val {
            if picture[i][j] == 'B' && seenR[i] == 1 && seenC[j] == 1 {
                count++
            }
        }        
    }
    
    return count
}
```