# golang, go, 100%, the simplest idiomatic solution

**Author:** brk0v
**Votes:** 1
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/445512/](https://leetcode.com/problems/read-n-characters-given-read4-ii-call-multiple-times/solutions/445512/)

---

```go
var solution = func(read4 func([]byte) int) func([]byte, int) int {
    // implement read below.
    var data []byte

    return func(buf []byte, n int) int {
        b := make([]byte, 4)
        
        for len(data) < n {
            c := read4(b)
            if c == 0 {
                break
            }
            
            data = append(data, b[:c]...)
        }
        
        c := min(len(data), n)
        copy(buf, data[:c])
        data = data[c:]

        return c
    }
}

func min(a,b int) int {
    if a < b {
        return a
    }
    return b
}
```