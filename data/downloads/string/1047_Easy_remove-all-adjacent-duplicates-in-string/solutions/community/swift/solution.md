# Swift - 144ms (84.21%) - 21mb (100%)

**Author:** sege
**Votes:** 4
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/607379/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/solutions/607379/)

---

```
func removeDuplicates(_ S: String) -> String {
        var result: String = ""
        
        for char in S {
            if result.isEmpty {
                result += String(char)
            }
            else if let peek = result.last {
                if char == peek {
                    result.removeLast()
                }
                else {
                    result += String(char)
                }
            }
        }
        
        return result
    }
```