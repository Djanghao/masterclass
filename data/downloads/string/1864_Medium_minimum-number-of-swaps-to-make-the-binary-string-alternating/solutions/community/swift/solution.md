# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/1214536/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/1214536/)

---

Swift solution
```
class Solution {
    func minSwaps(_ s: String) -> Int {
        let s = s.map({ $0 == "0" ? 0 : 1 }), c = s.count, zeros = s.reduce(into: Int(0), { if $1 == 0 { $0 += 1 } })
        if zeros > (c + 1) / 2 || zeros < c / 2 {
            return -1            
        } else {
            var z0 = 0, z1 = 0
            for i in 0..<c {
                if i % 2 == s[i] {
                    z1 += 1
                } else {
                    z0 += 1
                }
            }
            return min(z0 % 2 == 0 ? z0 : Int.max, z1 % 2 == 0 ? z1 : Int.max) / 2
        }
    }
}
```