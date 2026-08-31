# Swift💯1liner

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-senior-citizens/solutions/5255166/](https://leetcode.com/problems/number-of-senior-citizens/solutions/5255166/)

---

**Good Interview Answer (accepted answer)**
Clean, idiomatic, no conversion to `[Character]`. Thanks to @pagafan7as for the comparison code reduction tip.
```
class Solution {
    func countSeniors(_ details: [String]) -> Int {
        var count = 0
        for detail in details {
            let age = detail.dropFirst(11).dropLast(2)
            count += (age.first!, age.last!) > ("6","0") ? 1:0
        }
        return count
    }
}
```
```
class Solution { // Rewrite with Functional Programming
    func countSeniors(_ details: [String]) -> Int {
        details
        .map {detail in detail.dropFirst(11).dropLast(2) }
        .filter{age in (age.first!, age.last!) > ("6","0")}
        .count
    }
}
```

**\uD83D\uDD25 One-Liner using Regex (accepted answer)**
```
class Solution {
    func countSeniors(_ details: [String]) -> Int {
        details.compactMap{$0.prefixMatch(of: #/.{11}(6[1-9]|[7-9]\\d)/#)}.count
    }
}
```