# Go easy

**Author:** dchooyc
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-three-strings-equal/solutions/4304667/](https://leetcode.com/problems/make-three-strings-equal/solutions/4304667/)

---

```
func findMinimumOperations(s1 string, s2 string, s3 string) int {
    i := 0

    for ; i < len(s1) && i < len(s2) && i < len(s3); i++ {
        a, b, c := s1[i], s2[i], s3[i]
        if !(a == b && b == c) { break }
    }

    if i > 0 {return len(s1) + len(s2) + len(s3) - (i * 3)}
    return -1
}
```