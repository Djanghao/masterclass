# Golang. O(n). Fast and pretty simple code.

**Author:** District_12
**Votes:** 0
**Link:** [https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/4027951/](https://leetcode.com/problems/evaluate-the-bracket-pairs-of-a-string/solutions/4027951/)

---

```
import (
  "strings"
)

func evaluate(s string, knowledge [][]string) string {
  if len(s) == 1 {
    return s
  }

  k := make(map[string]string, len(knowledge))

  for i:=0; i<len(knowledge); i++ {
    key := knowledge[i][0]
    v := knowledge[i][1]
    k[key] = v
  }

  var ans []string

  lptr := -1 
  rptr := 0

  for i:=0; i<len(s); i++ {
    if s[i] == '(' {
      if lptr == -1 && i != 0 {
        ans = append(ans, s[lptr+1:i])
      }
      if rptr != 0 {
        ans = append(ans, s[rptr+1:i])
      }
      lptr = i
      continue
    } else if s[i] == ')' {
      rptr = i
      key := s[lptr+1:rptr]
      val, ok := k[key]; if !ok {
        ans = append(ans, "?")
      } else {
        ans = append(ans, val)
      }
    }
    if i == len(s)-1 {
      if lptr == -1 {
        return s
      }
      if rptr < i {
        ans = append(ans, s[rptr+1:i+1])
      }
    }
  }
  return strings.Join(ans, "")
}
```