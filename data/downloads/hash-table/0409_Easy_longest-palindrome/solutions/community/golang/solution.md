# [Go] simple solution using map

**Author:** nightybear
**Votes:** 9
**Link:** [https://leetcode.com/problems/longest-palindrome/solutions/792329/](https://leetcode.com/problems/longest-palindrome/solutions/792329/)

---

my solution using map.

```go
func longestPalindrome(s string) int {
    count := make(map[byte]int)
    for i:=0; i<len(s);i++{
        ch := s[i]
        if _, ok := count[ch]; !ok {
            count[ch] = 1
        } else {
            count[ch] += 1
        }
    }
    
    ans := 0
    for _, val := range count {
        ans += val / 2 * 2
        if ans % 2 == 0 && val % 2 == 1 {
            ans += 1
        }
    }
    
    return ans
}
```