# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/optimal-division/solutions/3358308/](https://leetcode.com/problems/optimal-division/solutions/3358308/)

---

```
class Solution {

    enum Target: Equatable {

        case min
        case max

        var max: Bool { self == .max }
        static prefix func !(v: Self) -> Self { v.max ? .min : .max }
    }

    indirect enum Val: CustomStringConvertible {

        case dbl(n: Double)
        case exp(l: Val, r: Val)

        var val: Double {
            switch self {
            case let .dbl(n): return n
            case let .exp(l, r): return l.val / r.val
            }
        }

        var description: String {
            switch self {

            case let .dbl(n):
                return "\\(Int(n))"

            case let .exp(l, r):
                let ls = "\\(l)"
                var rs = "\\(r)"
                if rs.contains("/") { rs = "(\\(rs))" }
                return "\\(ls)/\\(rs)"
            }
        }
    }

    func optimalDivision(_ nums: [Int]) -> String {

        func div(_ n: [Double] = nums.map(Double.init), _ tgt: Target = .max) -> Val {
            guard n.count > 1 else { return .dbl(n: n.first!) }

            let exps = (1..<n.count)
                .map { i -> [[Double]] in [Array(n.prefix(i)), Array(n.suffix(n.count - i))] }
                .map { ns -> Val in .exp(l: div(ns[0], tgt), r: div(ns[1], !tgt)) }

            let vals = exps.map(\\.val)
            let exp = tgt.max ? vals.max()! : vals.min()!
            let i = vals.firstIndex(of: exp)!

            return exps[i]
        }

        return "\\(div())"
    }
}
```