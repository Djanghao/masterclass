# Swift Optimal solution

**Author:** laxansh
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-outermost-parentheses/solutions/638974/](https://leetcode.com/problems/remove-outermost-parentheses/solutions/638974/)

---

```
func removeOuterParentheses(_ S: String) -> String {
        var finalstr = ""
        var counter = 0
        for s in S {
            if s == "(" {
               if counter > 0 { 
                  finalstr.append(s) 
               }
               counter += 1
            } else if s == ")" {
               counter -= 1
               if counter > 0 { 
                   finalstr.append(s) 
               }
            }
        }
        return finalstr
    }
```