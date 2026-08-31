# Swift | easy

**Author:** alexgood
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-leaderboard/solutions/2769516/](https://leetcode.com/problems/design-a-leaderboard/solutions/2769516/)

---

```
class Leaderboard {
    private var storage: [Int: Int] = [:]
    
    init() {
        
    }
    
    func addScore(_ playerId: Int, _ score: Int) {
        storage[playerId, default: 0] += score
    }
    
    func top(_ K: Int) -> Int {
        storage.values.lazy.sorted(by: { $0 > $1 }).prefix(K).reduce(0, +)
    }
    
    func reset(_ playerId: Int) {
        storage[playerId] = nil
    }
}
```