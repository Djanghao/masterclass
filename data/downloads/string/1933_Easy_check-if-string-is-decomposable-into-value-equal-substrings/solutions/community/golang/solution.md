# [Go] Simple & Short Solution

**Author:** Samuel3Shin
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/3766308/](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/3766308/)

---

# Code
```
func isDecomposable(s string) bool {
    cnt := 1
    prev := s[0]
    arr := []int{0, 0, 0}
    for i:=1; i<len(s); i++ {
        if s[i]==prev {
            cnt++
        } else {
            arr[cnt % 3]++
            cnt = 1
        }
        prev = s[i]
    }
    arr[cnt % 3]++
    return arr[1]==0 && arr[2]==1
}
```