# Readable Linear Solution

**Author:** robthedev21
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/4542953/](https://leetcode.com/problems/determine-the-winner-of-a-bowling-game/solutions/4542953/)

---

# Intuition
First obtain the scores of each player's array, then compare results.

# Approach
Add up the pins in the array, keeping tabs of the most recent strike index. If an index is within range of a strike index, multiply score by two.

Ended up sticking with the most readable approach, as syntax changes yielded negligible improvements. For example, resetting `previousStrike` to `nil` shaved \u22485ms; setting the `isWinnerMethod` to `score1 == score2 ? 0 : score1 > score2 ? 1 : 2` made no difference.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
    func isWinner(_ player1: [Int], _ player2: [Int]) -> Int {
        let score1 = bowlingScore(player1)
        let score2 = bowlingScore(player2)
        guard score1 != score2 else {
            return 0
        }
        return score1 > score2 ? 1 : 2
    }

    func bowlingScore(_ turns: [Int]) -> Int {
        var total = 0
        var strikeMultiplier = 1
        var previousStrike: Int?
        for (index, turn) in turns.enumerated() {
            if let previousStrike {
                strikeMultiplier = (previousStrike...previousStrike + 2).contains(index) ? 2 : 1
            }
            total += turn * strikeMultiplier

            if turn == 10 {
                previousStrike = index
            }
        }
        return total
    }
}
```