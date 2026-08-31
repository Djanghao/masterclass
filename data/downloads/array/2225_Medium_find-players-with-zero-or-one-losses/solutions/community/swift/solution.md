# 🚀 Swift | Hash Table | Time: O(n log n) | Space: O(n)

**Author:** alekseiwe
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4570716/](https://leetcode.com/problems/find-players-with-zero-or-one-losses/solutions/4570716/)

---

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func findWinners(_ matches: [[Int]]) -> [[Int]] {
        var gamers: Set<Int> = .init()
        var gamersAndLoseCount: [Int: Int] = [:]
        
        for i in 0 ..< matches.count {
            let match = matches[i]
            let winner = match[0]
            let loser = match[1]
            gamers.insert(winner)
            gamers.insert(loser)
            
            if let count = gamersAndLoseCount[loser] {
                gamersAndLoseCount[loser] = count + 1
            } else {
                gamersAndLoseCount[loser] = 1
            }
        }
        
        for i in 0 ..< matches.count {
            let match = matches[i]
            let loser = match[1]
            gamers.remove(loser)
        }
        var winners: [Int] = .init(gamers)
        winners.sort()
        
        var lostOneGamerPlayers: [Int] = []
        for gamer in gamersAndLoseCount.keys {
            guard let loseCount = gamersAndLoseCount[gamer] else { continue }
            if loseCount == 1 {
                lostOneGamerPlayers.append(gamer)
            }
        }
        lostOneGamerPlayers.sort()
        
        return [
            winners,
            lostOneGamerPlayers,
        ]
    }
}
```