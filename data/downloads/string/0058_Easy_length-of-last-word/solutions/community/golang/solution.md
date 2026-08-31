# Golang | Go | 0ms | 100% faster

**Author:** singhsaubhik
**Votes:** 11
**Link:** [https://leetcode.com/problems/length-of-last-word/solutions/1863802/](https://leetcode.com/problems/length-of-last-word/solutions/1863802/)

---

```
func lengthOfLastWord(s string) int {
    n := len(s)
    count := 0
    
    for i:=n-1; i>=0; i-- {
        if count == 0 && s[i] == ' ' {
            continue
        }else {
            if s[i] == ' ' {
                break
            }
            
            count++
        }
    }
    
    return count
}
```