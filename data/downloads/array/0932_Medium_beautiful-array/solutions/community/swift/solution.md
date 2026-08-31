# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/beautiful-array/solutions/3196915/](https://leetcode.com/problems/beautiful-array/solutions/3196915/)

---

```
class Solution {
    func beautifulArray(_ n: Int) -> [Int] {

        let s = n / 2 + n % 2
        var o = [1]
        var d = 1
        var m = 0
        var j = 0

        while o.count < s {

            var i = 0
            d *= 2
            
            while o.count < s, i < o.count {
                if o[i] + d > n {
                    i += 1
                }
                else {
                    o.insert(o[i] + d, at: i + 1)

                    if o[i] + d > m {
                        m = o[i] + d
                        j = i + 1
                    }

                    i += 2
                }
            }
        }

        var e = o.map { $0 + 1 }
        if n % 2 == 1 { e.remove(at: j) }

        return o + e
    }
}
```