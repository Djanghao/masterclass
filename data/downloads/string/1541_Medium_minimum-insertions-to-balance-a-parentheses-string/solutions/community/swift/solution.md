# Swift solution with explanation

**Author:** relativity5
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/2891555/](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/2891555/)

---

# Code
```
class Solution {
    func minInsertions(_ s: String) -> Int {
        var result = 0

        // pending need for ")" that can still change
        var needRightParentheses = 0

        for char in s {
            if char == "(" {
                if needRightParentheses % 2 == 0 {
                    // need two ")" for one "("
                    needRightParentheses += 2
                } else {
                    // but if there is already a ")", then it needs one less ")"
                    // consider the case: "()("
                    needRightParentheses += 1
                    result += 1
                }
            } else if char == ")" {
                needRightParentheses -= 1

                if needRightParentheses == -1 {
                    result += 1
                    needRightParentheses = 1
                }
            }
        }

        return result + needRightParentheses
    }
}
```