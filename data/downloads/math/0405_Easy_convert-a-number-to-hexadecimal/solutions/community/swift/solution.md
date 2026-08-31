# Swift solution

**Author:** cl0ud_runner
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/89258/](https://leetcode.com/problems/convert-a-number-to-hexadecimal/solutions/89258/)

---

```
class Solution {
    func toHex(_ num: Int) -> String {
        if num == 0 {
            return "0"
        }

        let map = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
        var result = ""
        var num = num
        
        for _ in 0..<8 {
            result = map[num & 15] + result
            num >>= 4
        }
        
        return removeLeadingZero(result)
    }
    
    private func removeLeadingZero(_ str: String) -> String {
        return str.replacingOccurrences(of: "^0+(?!$)", with: "", options: .regularExpression, range: str.range(of: str))
    }
}
```