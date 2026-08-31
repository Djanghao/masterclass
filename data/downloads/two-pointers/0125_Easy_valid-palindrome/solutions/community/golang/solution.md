# Go solution

**Author:** gsalomao
**Votes:** 43
**Link:** [https://leetcode.com/problems/valid-palindrome/solutions/1975477/](https://leetcode.com/problems/valid-palindrome/solutions/1975477/)

---

Runtime: 0 ms, faster than 100.00% of Go online submissions for Valid Palindrome.
Memory Usage: 2.8 MB, less than 71.27% of Go online submissions for Valid Palindrome.

```
func isPalindrome(s string) bool {
    f := func(r rune) rune {
        if !unicode.IsLetter(r) && !unicode.IsNumber(r) {
            return -1
        }
        
        return unicode.ToLower(r)
    }
    s = strings.Map(f, s)
    
    i, j := 0, len(s)-1
    
    for i < j {
        if s[i] != s[j] {
            return false
        }
        
        i = i+1
        j = j-1
    }
    
    return true
}
```