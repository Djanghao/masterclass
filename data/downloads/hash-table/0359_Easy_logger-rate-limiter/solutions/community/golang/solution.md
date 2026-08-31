# go solution w/ comments

**Author:** carti
**Votes:** 2
**Link:** [https://leetcode.com/problems/logger-rate-limiter/solutions/2243846/](https://leetcode.com/problems/logger-rate-limiter/solutions/2243846/)

---

```go
type Logger struct {
    cache map[string]int
}


func Constructor() Logger {
    return Logger{ map[string]int{} }
}


func (this *Logger) ShouldPrintMessage(timestamp int, message string) bool {
    // check if this message has been printed before
    if lastTimestamp, ok := this.cache[message]; ok {
        // let's make sure was printed at least 10s ago
        if timestamp - lastTimestamp >= 10 {
            // can print
            this.cache[message] = timestamp
            return true
        } else {
            // can't print
            return false
        }
    } else {
        // it's fine, we can print, but should store timestamp too
        this.cache[message] = timestamp
        return true
    }
}
```