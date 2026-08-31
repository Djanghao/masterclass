# Go golang clean solution

**Author:** Leaf_Peng
**Votes:** 6
**Link:** [https://leetcode.com/problems/goal-parser-interpretation/solutions/964059/](https://leetcode.com/problems/goal-parser-interpretation/solutions/964059/)

---

>Runtime: 0 ms, faster than 100.00% of Go online submissions for Goal Parser Interpretation.
Memory Usage: 2.1 MB, less than 60.00% of Go online submissions for Goal Parser Interpretation.

```go
func interpret(command string) string {
    ans, i, n := "", 0, len(command)
    for i < n {
        if command[i:i+1] == "G" {
            ans += "G"; i++
        } else if command[i:i+2] == "()" {
            ans += "o"; i += 2
        } else {
            ans += "al"; i += 4
        }
    }
    return ans
}
```