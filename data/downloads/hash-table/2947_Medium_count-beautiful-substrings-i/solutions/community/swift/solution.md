# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4364954/](https://leetcode.com/problems/count-beautiful-substrings-i/solutions/4364954/)

---

```
class Solution {
    func beautifulSubstrings(_ s: String, _ k: Int) -> Int {
        
        var vow = [0]
        var con = [0]
        var res = 0

        for c in s {
            if "aeiou".contains(c) {
                vow.append(vow.last! + 1)
                con.append(con.last!)
            }
            else {
                vow.append(vow.last!)
                con.append(con.last! + 1)
            }
        }

        for i in 1..<vow.count - 1 {
            for j in 1 + i..<vow.count {
                
                let v = vow[j] - vow[i - 1]
                let c = con[j] - con[i - 1]

                if v == c, (v * c) % k == 0 { res += 1 }
            }
        }

        return res
    }
}
```