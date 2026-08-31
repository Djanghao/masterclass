# Go Stack clear solution

**Author:** qube
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/2012135/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/2012135/)

---

```
func removeDuplicates(s string, k int) string {
    stack := []rune{}
    for _, r := range s {
        stack = append(stack, r)
        if len(stack) >= k {
            i := len(stack)-k
            for i < len(stack) && stack[i] == stack[len(stack)-1] { i++ } // check if last k runes from the stack are the same
            if i == len(stack) { stack = stack[:len(stack)-k] } // if so, remove them
        }
    }
    return string(stack)
}
```