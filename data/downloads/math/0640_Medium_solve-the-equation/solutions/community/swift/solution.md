# Swift || String parsing || 0(n)

**Author:** vasiliyfedotov
**Votes:** 0
**Link:** [https://leetcode.com/problems/solve-the-equation/solutions/3736991/](https://leetcode.com/problems/solve-the-equation/solutions/3736991/)

---

# Intuition
Find "=", split string and parse left/right substrings.
Find sums of "free" terms and "x" terms


# Complexity
- Time complexity: **0(n)**
- Space complexity: **0(n)**

# Code
```
class Solution {

    func exec(_ s: String) -> [Int] {
        let chrs = [Character](s) + ["+"]
        var res = [0, 0]
        var buffer: String = ""
        var minus = false
        var isX = false

        let apply: () -> Void = {
            let idx: Int = isX ? 1 : 0
            let minusA: Int = minus ? -1 : 1
            let val = Int(buffer) ?? (isX ? 1 : 0)

            res[idx] = res[idx] + minusA * val
            buffer = ""
        }

        for idx in 0..<chrs.count {
            let chr = chrs[idx]
            if chr == "+" {
                apply()
                isX = false
                minus = false
            } else if chr == "-" {
                apply()
                isX = false
                minus = true
            } else if chr.isNumber {
                buffer = buffer + String(chr)
            } else {
                isX = true
            }
        }

        return res
    }

    func solveEquation(_ equation: String) -> String {
        let idx = equation.firstIndex(of: "=")!

        let left = exec(String(equation[..<idx]))
        let right = exec(String(equation[equation.index(after: idx)...]))

        let xs = left[1] - right[1]
        let nums = right[0] - left[0]

        if xs == 0 {
            return nums == 0 ? "Infinite solutions" : "No solution"
        }

        return "x=\\(nums/xs)"
    }
}

```