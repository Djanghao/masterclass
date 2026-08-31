# Go O(n) recursive 0 ms with fast bit flags and explanation

**Author:** vashik
**Votes:** 4
**Link:** [https://leetcode.com/problems/longest-nice-substring/solutions/1078592/](https://leetcode.com/problems/longest-nice-substring/solutions/1078592/)

---

```
func longestNiceSubstring(s string) string {
    var lower, upper int32  // 2 * 24 bits for letter presence flags
    
    if len(s) <= 1 {  // recursion stops here
        return ""
    }
    for _,c := range s {  // go over the string to set upper and lower letter flags
        if c < rune('a') { // isupper relying on c being a latin letter
            upper |= 1 << (c - rune('A'))  // set the bit for 'seen the letter in upper case'
        } else {  // islower
            lower |= 1 << (c - rune('a'))  // set the bit for 'seen the letter in lower case'
        }
    }
    for i,c := range s {
        var bit int32  // bit corresponding to the letter
        if c < rune('a') {
            bit = 1 << (c - rune('A'))
        } else {
            bit = 1 << (c - rune('a'))
        }
        if (upper & bit) != (lower & bit) {  // the letter was not seen in upper or lower case
            // use recursion to find nice substring to the left of the letter
            ns1 := longestNiceSubstring(s[:i])  
            // use recursion to find nice substring to the right of the letter
            ns2 := longestNiceSubstring(s[i+1:])
            // return longest of the nice substrings
            if len(ns1) < len(ns2) {
                return ns2
            }
            return ns1
        }
    }
    // entire string is nice: saw every letter in both cases
    return s
}
```