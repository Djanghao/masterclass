# Runtime 572ms Solution

**Author:** ChouChien
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5293769/](https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5293769/)

---

Sorry for my poor English.

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Once the plyer is defeated, the player never wins, so just need to record current winner and win times.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

![\u622A\u5716 2024-06-11 \u4E0B\u53482.27.26.png](./images/0.png)


# Code
```
class Solution {
    func findWinningPlayer(_ skills: [Int], _ k: Int) -> Int {
        var winnerIdx: Int = 0, winnerCount: Int = 0
        for i in 1 ..< skills.count {
            if skills[i] > skills[winnerIdx] {
                winnerIdx = i
                winnerCount = 1
            } else {
                winnerCount += 1
            }
            if winnerCount == k {
                return winnerIdx
            }
        }
        return winnerIdx
    }
}
```