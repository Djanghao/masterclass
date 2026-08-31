# [Go] Easy solution

**Author:** harotobira
**Votes:** 2
**Link:** [https://leetcode.com/problems/bulls-and-cows/solutions/556720/](https://leetcode.com/problems/bulls-and-cows/solutions/556720/)

---

Runtime: 0 ms, faster than 100.00% of Go online submissions for Bulls and Cows.
Memory Usage: 2.2 MB, less than 100.00% of Go online submissions for Bulls and Cows.
```
func getHint(secret string, guess string) string {
    var countS, countG [10]int
    bulls, cows := 0,0
    for i := range secret{
        ns := int(secret[i] - '0')
        ng := int(guess[i] - '0')
        if ng == ns {
            bulls++
            continue
        }
        
        if countG[ns] > 0 {
            cows++
            countG[ns]--
        } else {
            countS[ns]++
        }
        
        if countS[ng] > 0 {
            cows++
            countS[ng]--
        } else {
            countG[ng]++
        }
    }
    
    return fmt.Sprintf("%dA%dB", bulls, cows)
}
```