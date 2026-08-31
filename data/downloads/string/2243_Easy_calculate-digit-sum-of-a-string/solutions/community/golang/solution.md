# Golang: recursion - runtime 0 ms, Beats 100%

**Author:** 9bany
**Votes:** 1
**Link:** [https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/3672884/](https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/3672884/)

---


# Code
```
func digitSum(s string, k int) string {
    if len(s) <= k { return s }
    result := split(s, k)
    return digitSum(stringCount(result), k)
}

func stringCount(strs []string) (result string) {
    for _, elements := range strs {
        sum := 0 
        for _, item := range elements {
            i, _ := strconv.Atoi(string(item))
            sum += i
        }
        result += fmt.Sprint(sum)
    }
    return
}

func split(s string, k int) (result []string) {
    if len(s) <= k { return []string{s} }
    result = append(result, s[:k])
    result = append(result, split(s[k:], k)...)
    return
}
```