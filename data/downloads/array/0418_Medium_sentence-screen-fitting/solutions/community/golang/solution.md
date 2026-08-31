# Golang DP

**Author:** tif
**Votes:** 1
**Link:** [https://leetcode.com/problems/sentence-screen-fitting/solutions/1466012/](https://leetcode.com/problems/sentence-screen-fitting/solutions/1466012/)

---

```
func wordsTyping(sentence []string, rows int, cols int) int {
    sizes := make([]int, len(sentence))
    for i := range sentence {
        sizes[i] = len(sentence[i])
        if len(sentence[i]) > cols {
            return 0
        }
    }
    
    dp := make([][]int, len(sentence))
    for i := 0; i < len(dp); i++ {
        count := 0
        num := 0
        j := i
        for {
            count += sizes[j]
            if count > cols {
                break
            }
            
            j++
            count++ // plus space
            if j == len(sizes) {
                j = 0
                num++
            }
        }
        
        dp[i] = []int{num, j}
    }
    

    var start, num, count int
    for i := 0; i < rows; i++ {
        count, start = dp[start][0], dp[start][1]
        num+=count
    } 
    
    return num
}
```