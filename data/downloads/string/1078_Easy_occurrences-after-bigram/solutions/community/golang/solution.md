# Golang Solution streaming or split string

**Author:** kinfinity
**Votes:** 1
**Link:** [https://leetcode.com/problems/occurrences-after-bigram/solutions/1847428/](https://leetcode.com/problems/occurrences-after-bigram/solutions/1847428/)

---

## split string
Time: **O(2n)**
Space: **O(n)**

```Go
func findOcurrences(text string, first string, second string) []string {
    if len(first) + len(second) >= len(text) {
        return []string{}
    }
    
    res := []string{}
    
    ss := strings.Split(text, " ")

    for i := 0; i < len(ss) - 2; i++ {
        if ss[i] == first && ss[i+1] == second {
            res = append(res, ss[i+2])
        }
    }
    
    return res
}
```

## streaming string
Time: **O(n)**
Space:**O(1)**

```Go
func findOcurrences(text string, first string, second string) []string {
    if len(first) + len(second) >= len(text) {
        return []string{}
    }
    
    res := []string{}
    
    ss := []string{"", "", ""}

    i := 0
    for i < len(text) {
        for ; i < len(text) && text[i] == ' '; i++ {}
        
        j := i
        for ; j < len(text) && text[j] != ' '; j++ {}
        ss[0] = ss[1]
        ss[1] = ss[2]
        ss[2] = text[i:j]
        
        if ss[0] == first && ss[1] == second {
            res = append(res, ss[2])
        }
        i = j
    }
    
    return res
}
```