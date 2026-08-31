# The simplest Go solution

**Author:** dacozai
**Votes:** 4
**Link:** [https://leetcode.com/problems/short-encoding-of-words/solutions/1098241/](https://leetcode.com/problems/short-encoding-of-words/solutions/1098241/)

---

```go
func minimumLengthEncoding(words []string) int {
    sort.Slice(words, func(i, j int) bool {
        return len(words[i]) > len(words[j])
    })
    resp := words[0]+"#"
    
    for i := 1; i< len(words);i++{
        if strings.Contains(resp, words[i]+"#") {
            continue
        }
        resp += words[i]+"#"
    }
    return len(resp)
}
```