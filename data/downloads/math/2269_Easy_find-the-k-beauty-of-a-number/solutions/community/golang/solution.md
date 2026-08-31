# Go / GoLang | Time: O(n) / 0 ms / 100% | Space: O(n) / 2 MB / 100%

**Author:** aristorinjuang
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/2038913/](https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/2038913/)

---

```
func divisorSubstrings(num int, k int) int {
    result, s := 0, strconv.Itoa(num)
    
    for i := k - 1; i < len(s); i++ {
        sub := s[i - k + 1:i + 1]
        subNum, _ := strconv.Atoi(sub)
        if subNum > 0 && num % subNum == 0 {
            result++
        }
    }
    
    return result
}
```