# 0 ms 100% faster, Easy You Understand

**Author:** Orcaa
**Votes:** 3
**Link:** [https://leetcode.com/problems/most-common-word/solutions/3139931/](https://leetcode.com/problems/most-common-word/solutions/3139931/)

---

# Code
```
func mostCommonWord(paragraph string, banned []string) string {
    s := strings.ToLower(paragraph) + " "

    str := make(map[string]int)
    s1 := ""
    for  _, v := range s {
        if v == ' ' || strings.Contains("!?',;.", string(v)) {
            if len(s1) != 0 {
                str[s1]++
                s1 = ""
            }
        }else {
            s1 += string(v)
        }
    }

    for _, v := range banned {
        delete(str, v)
    }


    res := ""
    max := 0
    for k, v := range str {
        if v > max {
            max = v
            res = k
        }
    }


    return res
}
```