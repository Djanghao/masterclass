# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/3261651/](https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/solutions/3261651/)

---

```
class Solution {
    func findLexSmallestString(_ s: String, _ a: Int, _ b: Int) -> String {

        var hist = Set<[Int]>()        
        var res = s

        func go(_ s: [Int] = s.map({ Int(String($0))! })) {

            guard !hist.contains(s) else { return }
            hist.insert(s)

            var nc = s
            var ns = [[Int]]()

            repeat {
                res = min(res, nc.map({ "\\($0)"}).joined())
                ns.append(nc.suffix(b) + nc.prefix(s.count - b))
                if hist.contains(ns.last!) { break }
                for i in stride(from: 1, to: nc.count, by: 2) { nc[i] = (nc[i] + a) % 10 }
            } while nc != s

            for n in ns { go(n) }
        }

        go()

        return res
    }
}
```