# Swift 0ms without use str.lowercased()

**Author:** wxxsw
**Votes:** 9
**Link:** [https://leetcode.com/problems/to-lower-case/solutions/327428/](https://leetcode.com/problems/to-lower-case/solutions/327428/)

---

```swift
class Solution {
    func toLowerCase(_ str: String) -> String {
		var result = ""
        for s in str {
            if let ascii = s.asciiValue, ascii >= 65 && ascii <= 90 {
                result.append(Character(UnicodeScalar(ascii + 32)))
            } else {
                result.append(s)
            }
        }
        return result
    }
}
```