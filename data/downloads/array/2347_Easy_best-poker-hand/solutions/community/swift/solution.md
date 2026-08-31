# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/3002196/](https://leetcode.com/problems/best-poker-hand/solutions/3002196/)

---

```
class Solution {
    func bestHand(_ ranks: [Int], _ suits: [Character]) -> String {
        
        guard Set(suits).count > 1 else { return "Flush" }
        
        let cs = ranks.reduce(into: [Int: Int](), { $0[$1, default: 0] += 1 }).values.max()!
        
        guard cs < 3 else { return "Three of a Kind" }
        guard cs < 2 else { return "Pair" }
        
        return "High Card"
    }
}
```