# ✔️ 100% Fastest Swift Solution

**Author:** sergeyleschev
**Votes:** 10
**Link:** [https://leetcode.com/problems/restore-ip-addresses/solutions/1926120/](https://leetcode.com/problems/restore-ip-addresses/solutions/1926120/)

---

```
class Solution {
    func restoreIpAddresses(_ s: String) -> [String] {
        if s.count > 12 || s.count < 4 { return [] }
        
        var chars = Array(s)     
        var res: [String] = []
        
        func backtarck(_ path: [Int], _ length: Int) {
            if path.count == 4 {
                if length == chars.count {
                    var string = ""
                    for (i, c) in chars.enumerated() {
                        string += String(c)
                        if i < length - 1 && path.contains(i + 1) {
                            string += "."
                        }
                    }
                    res.append(string)
                }
                return
            }
            
            var path = path
            for i in 1..<4 {
                if i + length > chars.count { break }
                
                if i >= 2 {
                    if Int(String(chars[length]))! == 0 { break }
                }
                
                if i == 3 {
                    if Int(String(chars[length]) + String(chars[length + 1]) + String(chars[length + 2]))! > 255 { break }
                }
                
                path.append(length + i)
                backtarck(path, length + i)
                path.remove(at: path.count - 1)
            }
        }
        
        backtarck([], 0)
        return res
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.