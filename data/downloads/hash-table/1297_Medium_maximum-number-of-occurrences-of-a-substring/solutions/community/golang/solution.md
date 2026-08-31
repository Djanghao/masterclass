# Golang | O(N) time, O(1) mem | Always choose minSize + Explain

**Author:** linhduong
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/1694173/](https://leetcode.com/problems/maximum-number-of-occurrences-of-a-substring/solutions/1694173/)

---

if any substring S' with size `d` is valid and has occurence `c`, then any substring of S' is also valid and has occurrence at least `c`. So, we just need to choose `minSize` as sliding window.

```go
func maxFreq(s string, maxLetters int, minSize int, maxSize int) int {
    var count [26]byte
    
    m := make(map[string]int)
    unique := 0
    for i := range s {
        if i >= minSize {
            if ch := s[i - minSize] - 'a'; count[ch] == 1 {
                count[ch] = 0
                unique--
            } else {
                count[ch]--
            }    
        }
        
        if ch := s[i] - 'a'; count[ch] == 0 {
            count[ch] = 1 
            unique++
        } else {
            count[ch]++
        }
        
        if i + 1 >= minSize && unique <= maxLetters {
             m[s[i + 1 - minSize:i+1]]++
        }
    }
    
    max := 0
    for _, v := range m {
        if v > max {
            max = v
        }
    }
    
    return max
} 
```