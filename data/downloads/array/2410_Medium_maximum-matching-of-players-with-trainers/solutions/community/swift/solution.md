# Swift | Greedy

**Author:** pagafan7as
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/5333670/](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/5333670/)

---

# Swift
```
class Solution {
    func matchPlayersAndTrainers(_ players: [Int], _ trainers: [Int]) -> Int {
        let trainers = trainers.sorted(by: >)
        var i = 0

        for player in players.sorted(by: >) {
            if trainers.count <= i { break }
            if trainers[i] >= player { i += 1 }
        }

        return i
    }
}
```