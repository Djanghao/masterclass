# Swift solution

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/943903/](https://leetcode.com/problems/numbers-at-most-n-given-digit-set/solutions/943903/)

---

Swift solution
```
class Solution {
    func atMostNGivenDigitSet(_ digits: [String], _ n: Int) -> Int {
        let dc = digits.count
        let d = digits.map({ Int($0) ?? 1 }) // ["1","3","5","7"] -> [1, 3, 5, 7]
        let n = "\\(n)".map({ Int(String($0)) ?? 1 }) // 100 -> [1, 0, 0]
        let nc = n.count
        var digs = [Int](repeating: 0, count: 10) // digs[i] == count of digits less than or equal to i
        var dp = [Int]() // dp[i] == number of possible combinations of i + 1 digits
        var result = 0
        var match = true // match == true if we can write n itself using digits
        for i in 1...9 {
            digs[i] = digs[i - 1] + (d.firstIndex(of: i) == nil ? 0 : 1)
        }
        for i in stride(from: 1, to: nc, by: 1) {
            let count = dc * (dp.last ?? 1)
            result += count
            dp.append(count)
        }
        for i in 0..<nc {
            if n[i] == 0 { break }
            result += digs[n[i] - 1] * (i <= nc - 2 ? dp[nc - 2 - i] : 1)
            if digs[n[i]] == digs[n[i] - 1] { break }
            match = match && (n[i] > 0 ? digs[n[i]] > digs[n[i] - 1] : false)
            if i == nc - 1 && match { result += 1 }
        }
        return result
    }
}
```