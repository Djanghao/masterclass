# [GO] Hashmap solution

**Author:** harotobira
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-transforms-into-another-string/solutions/867559/](https://leetcode.com/problems/string-transforms-into-another-string/solutions/867559/)

---

Runtime: 0 ms, faster than 100.00% of Go online submissions for String Transforms Into Another String.
Memory Usage: 2.9 MB, less than 100.00% of Go online submissions for String Transforms Into Another String.
```
func canConvert(str1 string, str2 string) bool {
    if str1 == str2 {
        return true
    }
    
    conversions := make(map[byte]byte)
    
    for i := range str1{
        if v, ok := conversions[str1[i]]; ok{
            if v != str2[i]{
                return false
            }
            
            continue
        }
        
        if str1[i] == str2[i]{
            continue
        }
        
        conversions[str1[i]] = str2[i]
    }
    
    str2Runes := make(map[rune]bool)
    for _, r := range str2{
        str2Runes[r]=true
    }
    
    return len(str2Runes) != 26
}
```