# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/3295211/](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/solutions/3295211/)

---

```
class Solution {
    func minimizeResult(_ e: String) -> String {
        
        func n(_ s: String) -> [[Int]] {
            (0...s.count).map { [Int(s.prefix($0)) ?? 1, Int(s.dropFirst($0)) ?? 1] }
        }

        let w = e.components(separatedBy: "+")
        
        let n1 = n(w[0])
        let n2 = n(w[1])
        
        var mi = Int.max
        var i1 = 0
        var i2 = 0

        for i in n1.indices {
            for j in n2.indices {

                let v = n1[i][0] * n2[j][1] * (n1[i][1] + n2[j][0])
                
                if v < mi {
                    mi = v
                    i1 = i
                    i2 = j
                }
            }
        }

        var res = "(\\(n1[i1][1])+\\(n2[i2][0]))"

        if n1.count > 2, i1 != 0 { res = "\\(n1[i1][0])" + res }
        if n2.count > 2, i2 != n2.count - 1 { res += "\\(n2[i2][1])" }

        return res
    }
}
```