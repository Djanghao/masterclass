# Golang | O(N) time, O(1) mem

**Author:** linhduong
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/1938010/](https://leetcode.com/problems/number-of-ways-to-select-buildings/solutions/1938010/)

---

```go
func numberOfWays(s string) (ans int64) {
    countZero := 0
    for i := range s {
        if s[i] == '0' {
            countZero++
        }
    }
    countOne := len(s) - countZero
   
    numZero, numOne := 0, 0
    for i := range s {
        if s[i] == '0' {
            numZero++
            ans += int64(numOne * (countOne - numOne))
        } else {
            numOne++
            ans += int64(numZero * (countZero - numZero))
        }
    }
    
    return
}
```