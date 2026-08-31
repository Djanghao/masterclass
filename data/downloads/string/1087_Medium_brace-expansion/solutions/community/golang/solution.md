# Simple recursion

**Author:** user8180X
**Votes:** 0
**Link:** [https://leetcode.com/problems/brace-expansion/solutions/5544285/](https://leetcode.com/problems/brace-expansion/solutions/5544285/)

---

```
import "sort"
import "strings"

func expand(s string) []string {
    res := make([]string, 0)
    eval(s, &res)
    sort.Strings(res)
    return res
}

func eval(s string, res *[]string) {
    leftExprStart := strings.IndexRune(s, '{')
    leftExprEnd := strings.IndexRune(s, '}')

    if leftExprStart == -1 && leftExprEnd == -1 {
        *res = append(*res, s)
    } else {
        expr := s[leftExprStart+1:leftExprEnd]
        for _, c := range strings.Split(expr, ",") {
            eval(s[:leftExprStart] + string(c) + s[leftExprEnd+1:], res)
        }
    }
}
```