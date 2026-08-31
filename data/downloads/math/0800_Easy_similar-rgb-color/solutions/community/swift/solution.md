# [Swift] Simple Solution

**Author:** alptekin35
**Votes:** 1
**Link:** [https://leetcode.com/problems/similar-rgb-color/solutions/554642/](https://leetcode.com/problems/similar-rgb-color/solutions/554642/)

---

```
class Solution {
    func similarRGB(_ color: String) -> String {
        let dp = ["00", "11", "22", "33", "44", "55", "66", "77", "88", "99", "aa", "bb", "cc", "dd", "ee", "ff"];
        var res = "#"
        let arr = Array(color)
        for i in stride(from: 1, to: arr.count, by: 2){
            let hex = String(arr[i..<i+2])
            var num = Int.max
            var rgb = ""
            for j in dp{
                let ctrl = abs(Int(hex, radix: 16)! - Int(j, radix: 16)!)
                if ctrl < num{
                    num = ctrl
                    rgb = j
                }
            }
            res += rgb
        }
        return res
    }
}

```