# Swift | Convert to Fraction

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-rational-numbers/solutions/5312853/](https://leetcode.com/problems/equal-rational-numbers/solutions/5312853/)

---

The idea is to convert "a.b(c)" to a normalized fraction p / q.

For example 1.23(456) = 1 + 23/100 + 456/(100 * (1000 - 1))
That's it: (p, q) = (1 * 100 * 999 + 23 * 999 + 456, 100 * 999)

Then we divide p and q by their gcd and get:

1.23(456) = 41111 / 33300

Finally s and t are equal if they have the same normalized fraction.

# Code
```
class Solution {
    func isRationalEqual(_ s: String, _ t: String) -> Bool {
        // A rational can be represented as a.b(c).
        // nb is the length of b and nc the length of c.
        typealias RationalComponents = (a: Int, b: Int, nb: Int, c: Int, nc: Int)

        // Parses s and returns its rational components.
        func rationalComponents(_ s: String) -> RationalComponents {
            var s = Array(s)

            // Normalize for easier parsing.
            if s.firstIndex(of: ".") == nil { s += "." }
            if s.firstIndex(of: "(") == nil { s += "(0)" }

            let indexDot = s.firstIndex(of: ".")!
            let indexOpen = s.firstIndex(of: "(")!
            let indexClose = s.firstIndex(of: ")")!

            let a = Int(String(s[..<indexDot]))!
            let b = Int(String(s[indexDot + 1..<indexOpen])) ?? 0
            let c = Int(String(s[indexOpen + 1..<indexClose]))!
            let nb = indexOpen - indexDot - 1
            let nc = indexClose - indexOpen - 1

            return (a, b, nb, c, nc)
        }

        func gcd(_ a: Int, _ b: Int) -> Int {
            b == 0 ? a : gcd(b, a % b)
        }

        // p/q = a + b/10^nb + c/(10^nb * (10^nc - 1)).
        func fraction(_ s: String) -> (p: Int, q: Int) {
            let pow = [1, 10, 100, 1000, 10000]

            let r = rationalComponents(s)

            let p = pow[r.nb] * (pow[r.nc] - 1) * r.a + r.b * (pow[r.nc] - 1) + r.c
            let q = pow[r.nb] * (pow[r.nc] - 1)

            // Normalize.
            let div = gcd(p, q)
            return (p / div, q / div)
        }

        return fraction(s) == fraction(t)
    }
}
```