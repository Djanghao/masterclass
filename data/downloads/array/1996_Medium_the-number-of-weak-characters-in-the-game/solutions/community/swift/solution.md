# ✅ [Solution][Swift] Sorting, Monotonic Stack (2300ms, beats 100%)

**Author:** adanilyak
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2552782/](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2552782/)

---

**TC:** O(n * log n)
**SC:** O(n)
```
class Solution {
    func numberOfWeakCharacters(_ properties: [[Int]]) -> Int {
        
        // Sorting characters by defense in descending order
        let properties = properties.sorted(by: { $0[1] > $1[1] })
        
        // Grouping characters by attack 
        // (Characters sorted by defense in decreasing order inside each group)
        let mapByAttack = Dictionary(grouping: properties, by: { $0[0] })
        
        // Sorting groups by attack
        let attackSortedKeys = mapByAttack.keys.sorted()
        
        var count = 0
        
        // Monotonic stack
        var stack = [[Int]]()

        for key in attackSortedKeys {

            if !stack.isEmpty {
                let maxDefenseElement = mapByAttack[key]!.first!
                while let last = stack.last, maxDefenseElement[1] > last[1] {
                    stack.removeLast()
                    count += 1
                }
            }
            
            stack.append(contentsOf: mapByAttack[key]!)
        }
        
        return count
    }
}
```