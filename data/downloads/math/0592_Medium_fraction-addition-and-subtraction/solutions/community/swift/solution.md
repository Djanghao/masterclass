# ✅ Regex Builder Approach

**Author:** eleev
**Votes:** 4
**Link:** [https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5678353/](https://leetcode.com/problems/fraction-addition-and-subtraction/solutions/5678353/)

---

# Solution
```swift []
import RegexBuilder

struct Solution {
    @_optimize(speed)
    func fractionAddition(_ expression: String) -> String {        
        let regex = Regex {
            Capture {
                Optionally("-")
                OneOrMore(.digit)
            }
            "/"
            Capture {
                OneOrMore(.digit)
            }
        }

        let fractions = expression
            .matches(of: regex)
            .compactMap { (Int($0.1) ?? 1, Int($0.2) ?? 1) }
        var (num, denom) = (0, 1)

        func gcd(_ x: Int, _ y: Int) -> Int {
            x == 0 ? y : gcd(y % x, x)
        }

        for fraction in fractions {
            let (cnum, cdenom) = fraction
            num = num * cdenom + cnum * denom
            denom *= cdenom
            let common = abs(gcd(num, denom))
            num /= common
            denom /= common
        }
        return "\\(num)/\\(denom)"
    }
}

```