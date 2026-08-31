# Beat 100% Solution | Easy Pointer Approach

**Author:** Shubham_Bist
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5280651/](https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5280651/)

---

### Note: Finding the Winning Player

**Problem Description:**
Given an array of players' skills and an integer `k`, determine the index of the player who wins `k` consecutive matches. If `k` is greater than or equal to the number of players, the player with the highest skill wins automatically.

**Solution Explanation:**

1. **Initial Check for Automatic Winner:**
   - If `k` is greater than or equal to the number of players (`n`), the player with the highest skill wins. This is because they can beat all other players in a round-robin format. 
   - Identify the player with the highest skill and return their index.

2. **Setup for Tracking Wins:**
   - Initialize variables `currentWinner` to track the index of the current leading player, and `winCount` to count their consecutive wins.
   - Start comparing from the second player (`i = 1`).

3. **Comparison Loop:**
   - Iterate through the array, comparing each player's skill with the `currentWinner`.
   - If `currentWinner` has a higher skill than the next player, increment `winCount`.
   - If the next player has a higher skill, update `currentWinner` to this player and reset `winCount` to 1.
   - If `winCount` reaches `k`, return the `currentWinner` as they have won `k` consecutive matches.

4. **Return the Winner:**
   - If no player wins `k` consecutive matches within the array, the loop completes, and the `currentWinner` is returned as the winner by default.

**Code Implementation:**

```kotlin
class Solution {
    fun findWinningPlayer(skills: IntArray, k: Int): Int {
        val n = skills.size
        
        // If k >= n, the player with the highest skill wins
        if (k >= n) {
            return skills.indexOf(skills.maxOrNull()!!)
        }

        var currentWinner = 0
        var winCount = 0
        var i = 1

        while (i < n) {
            if (skills[currentWinner] > skills[i]) {
                winCount++
            } else {
                currentWinner = i
                winCount = 1
            }

            if (winCount == k) {
                return currentWinner
            }

            i++
        }

        return currentWinner
    }
}
```

**Key Points:**
- The solution efficiently determines the winner using a single pass through the array.
- The use of `maxOrNull` and `indexOf` ensures that we handle finding the maximum skill and its index cleanly.
- The solution handles both edge cases where `k` is very large and general cases where `k` is smaller.