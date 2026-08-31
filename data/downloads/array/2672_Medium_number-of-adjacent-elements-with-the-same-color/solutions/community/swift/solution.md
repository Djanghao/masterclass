# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3886278/](https://leetcode.com/problems/number-of-adjacent-elements-with-the-same-color/solutions/3886278/)

---

```
class Solution {
    func colorTheArray(_ n: Int, _ q: [[Int]]) -> [Int] {

        var n = Array(repeating: 0, count: n)
        var r = [Int]()

        for q in q {
            r.append(r.last ?? 0)

            if n[q[0]] != 0 {
                if q[0] > 0, n[q[0] - 1] == n[q[0]] { r[r.count - 1] -= 1 }
                if q[0] < n.count - 1, n[q[0]] == n[q[0] + 1] { r[r.count - 1] -= 1 }
            }
            
            n[q[0]] = q[1]
            
            if q[0] > 0, n[q[0] - 1] == n[q[0]] { r[r.count - 1] += 1 }
            if q[0] < n.count - 1, n[q[0]] == n[q[0] + 1] { r[r.count - 1] += 1 }
        }

        return r
    }
}
```