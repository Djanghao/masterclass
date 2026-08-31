# Golang Easy Solution

**Author:** Orcaa
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/3096139/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/3096139/)

---

# Code
```
func numDifferentIntegers(word string) int {
    num := make(map[string]int)
    
    s := ""
    for i, v := range word {
        if v >= '0' && v <= '9' {
            s += string(v)
        }else{
            if len(s) != 0 {
                n := removeZero(s)
                num[n]++
            }
            s = ""
        }
        if i == len(word)-1 && len(s) != 0 {
            n := removeZero(s)
            num[n]++
        }
    }
    
    
    return len(num)
}

func removeZero(s string) string {
    if s[0] != '0' {
        return s
    }
    
    str := ""
    for i, v := range s{
        if v != '0' {
            str = s[i:]
            break
        }
    }
    
  return str
}
```