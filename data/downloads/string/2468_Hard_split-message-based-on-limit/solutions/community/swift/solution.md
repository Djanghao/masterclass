# [Swift] Split Message Based on Limit

**Author:** jameseunson
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-message-based-on-limit/solutions/3907532/](https://leetcode.com/problems/split-message-based-on-limit/solutions/3907532/)

---

# Code
```
class Solution {
    func splitMessage(_ message: String, _ limit: Int) -> [String] {
        let n = message.count
        let ma = Array(message)

        // 1. calculate minimum number of parts        
        var (parts, a) = (1, 1)
        while(a + n + parts * (3 + String(parts).count) > parts * limit) {
            if(3 + String(parts).count * 2 >= limit) {
                return []
            }
            parts += 1
            a += String(parts).count
        }

        // 2. create strings by greedily consuming message up to limit
        var answer = [String]()
        var count = 1
        var i = 0
        while(i < n) {
            let q = "<" + String(count) + "/" + String(parts) + ">"
            count += 1
            var p = ""
            for j in 0..<limit - q.count where (i+j) < n {
                p += String(ma[i+j])
            }
            i += p.count
            p += q
            answer.append(p)
        }
        return answer
    }
}
```