# Go Solution by Iteration

**Author:** maroshim
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5454457/](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5454457/)

---

# Code
```
func validStrings(n int) []string {
    a := []string{ "0", "1" }
    for i := 1; i < n; i++ {    // length
        b := []string{}
        for _, s := range a {
            if s[len(s)-1] == '1' {
                b = append(b, s + "0")
            }
            b = append(b, s + "1")
        } 
        a = b
    }
    return a
}
```