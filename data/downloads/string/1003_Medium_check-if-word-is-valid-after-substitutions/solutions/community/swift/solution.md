# [Swift] Stack Solution O(N)

**Author:** alptekin35
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/491793/](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/491793/)

---

```
class Solution {
    func isValid(_ S: String) -> Bool {
        var stack:[Character] = []
        for item in S{
            if item == "c"{
                let prev2 = stack.popLast()
                let prev1 = stack.popLast()
                if prev1 == "a" && prev2 == "b"{
                    continue
                }else{
                    return false
                }
            }else{
                stack.append(item)
            }
        }
        return stack.isEmpty
    }
}
```