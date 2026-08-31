# Go solution

**Author:** tuanbieber
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/2456280/](https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/2456280/)

---

```
func secondsToRemoveOccurrences(s string) int {
    var res int
    
    for strings.Contains(s, "01") {
        res++ 
        s = strings.Replace(s, "01", "10", -1)
    }
    
    return res
}

```