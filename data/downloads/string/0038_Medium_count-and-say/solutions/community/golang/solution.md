# Go solution using string builder - 0ms, beats 100% speed/memory

**Author:** FcoManueel
**Votes:** 8
**Link:** [https://leetcode.com/problems/count-and-say/solutions/422076/](https://leetcode.com/problems/count-and-say/solutions/422076/)

---

Go strings are immutable, so whenever we attempt to update a string within a loop we are actually creating a new string on every iteration.
For this problem we only require to _append_/_write_ to the string while we are working with it, so there's a helper from the Go standard library that comes handy: `strings.Builder`. 
You can take a look at its code at https://golang.org/src/strings/builder.go

```go
import (
    "strconv"
    "strings"
)

func countAndSay(n int) string {
    seq := ""
    for i:=0; i<n; i++ {
        seq = countAndSayHelper(seq)
    }
    return seq
}

func countAndSayHelper(prev string) string {
    if prev == "" {
        return "1"
    }
    var result strings.Builder
    count := 1
    for i:=1; i < len(prev); i++ {
        if prev[i] == prev[i-1] {
            count++
        } else {
            result.WriteString(strconv.Itoa(count)) 
            result.WriteByte(prev[i-1])
            count = 1
        }
    }
    result.WriteString(strconv.Itoa(count)) 
    result.WriteByte(prev[len(prev)-1])
    return result.String()
}
```