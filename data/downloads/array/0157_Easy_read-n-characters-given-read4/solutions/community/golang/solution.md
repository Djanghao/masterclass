# Golang Idiomatic Solution

**Author:** xplorer
**Votes:** 1
**Link:** [https://leetcode.com/problems/read-n-characters-given-read4/solutions/823287/](https://leetcode.com/problems/read-n-characters-given-read4/solutions/823287/)

---

```
var solution = func(read4 func([]byte) int) func([]byte, int) int {
    return func(buf []byte, n int) int {
            var data []byte
            b := make([]byte, 4)
            totalChars := 0
            readChars := 4
            for readChars == 4 {
                readChars = read4(b)
                data = append(data, b[:readChars]...)
                totalChars += readChars
            }
            return copy(buf, data[:min(totalChars, n)])
    }
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
```