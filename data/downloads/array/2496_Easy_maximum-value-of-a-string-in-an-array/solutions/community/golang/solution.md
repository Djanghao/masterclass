# ez boy ,tutor?    0ms bro

**Author:** fahmi45
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/3046096/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/3046096/)

---


# Code
```
func maximumValue(strs []string) int {
    res := 0

    for _, v := range strs{
        for i,s := range v{
            if s >= 'a'{
                if len(v) > res{
                    res = len(v)
                }
                break
            }else if i == len(v)-1{
                a,_ := strconv.Atoi(v)
                if a > res {res = a}
            }
        }
    }
    return res
}
```