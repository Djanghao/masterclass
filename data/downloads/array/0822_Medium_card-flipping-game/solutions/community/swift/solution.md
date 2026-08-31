# Swift (simple, fast)

**Author:** spivakov
**Votes:** 0
**Link:** [https://leetcode.com/problems/card-flipping-game/solutions/566233/](https://leetcode.com/problems/card-flipping-game/solutions/566233/)

---

```
class Solution {
    func flipgame(_ fronts: [Int], _ backs: [Int]) -> Int {
        guard !fronts.isEmpty && !backs.isEmpty && fronts.count == backs.count else { return 0 }
        
        var candidates = Set<Int>()
        var invalidated = Set<Int>()
        
        for i in 0..<fronts.count {
            if fronts[i] != backs[i] && !invalidated.contains(fronts[i]) {
                // possible candidate
                candidates.insert(fronts[i])
            } else {
                candidates.remove(fronts[i])
                invalidated.insert(fronts[i])
            }
        }
        
        for i in 0..<backs.count {
            if fronts[i] != backs[i] && !invalidated.contains(backs[i]) {
                // possible candidate
                candidates.insert(backs[i])
            } else {
                candidates.remove(backs[i])
                invalidated.insert(backs[i])
            }
        }
        
        guard !candidates.isEmpty else { return 0 }
        
        var min = Int.max
        
        for card in candidates {
            if card < min {
                min = card
            }
        }
        
        return min
    }
}
```