# Simple Go solution with backtracking

**Author:** mike1808
**Votes:** 3
**Link:** [https://leetcode.com/problems/expression-add-operators/solutions/954157/](https://leetcode.com/problems/expression-add-operators/solutions/954157/)

---

```golang
import (
    "strconv"
)


func addOperators(num string, target int) []string {
    out := []string{}
    
    var backtrack func(string, string, int, int)
    
    backtrack = func(num, prefix string, val, last int) {
        if len(num) == 0 {
            if val == target {
                out = append(out, prefix)
            }
            return
        }
        
        for i := 1; i <= len(num); i++ {
            str := num[:i]
            digit, _ := strconv.Atoi(str)
            
			// prevent numbers starting with 0 except the number 0 itself
            if num[0] == '0'&& i != 1 {
                continue
            }
            
			// for the first call
            if prefix == "" {
                backtrack(num[i:], str, digit, digit)
            } else {
                backtrack(num[i:], prefix + "+" + str, val + digit, digit)
                backtrack(num[i:], prefix + "-" + str, val - digit, -digit)
                backtrack(num[i:], prefix + "*" + str, val - last + last * digit, last * digit)
            }
        }
    }
    
    backtrack(num, "", 0, 0)
    
    return out
}
```