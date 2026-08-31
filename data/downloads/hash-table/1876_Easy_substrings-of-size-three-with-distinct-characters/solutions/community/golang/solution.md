# Go solution

**Author:** tuanbieber
**Votes:** 4
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/2464237/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/2464237/)

---

```
func countGoodSubstrings(s string) int {
    charSet, count, left := make([]byte, 26), 0, 0
    
    for right := 0; right < len(s); right++ {
        charSet[s[right] - 'a']++
        
        for right - left + 1 > 3 {
            charSet[s[left] - 'a']--
            left++
        }
        
        if right-left+1 == 3 {
            charCount := 0
            
            for i := 0; i < 26; i++ {
                if charSet[i] > 0 {
                    charCount++
                }    
            }
            
            if charCount == 3 {
                count++
            }
        }
    }
    
    return count
}
```