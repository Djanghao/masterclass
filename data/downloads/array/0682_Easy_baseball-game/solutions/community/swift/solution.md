# Easy to understand solution [Swift]

**Author:** ArtyZenk
**Votes:** 5
**Link:** [https://leetcode.com/problems/baseball-game/solutions/3385527/](https://leetcode.com/problems/baseball-game/solutions/3385527/)

---



# Code
```
class Solution {
    func calPoints(_ operations: [String]) -> Int {
        var total = [Int]()
    
        for operation in operations {
            switch operation {
            case "+":
                total.append(total.suffix(2).reduce(0, +))
            case "D":
                total.append((total.last ?? 0) * 2)
            case "C":
                total = total.dropLast()
            default:
                total.append(Int(operation) ?? 0)
            }
        }
        return total.reduce(0, +)
    }
}
```