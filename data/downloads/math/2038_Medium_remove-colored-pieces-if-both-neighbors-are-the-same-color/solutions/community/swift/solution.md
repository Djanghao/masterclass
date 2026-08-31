# 💡Swift - Optimal Solution - Counting

**Author:** bernikovich
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/4118610/](https://leetcode.com/problems/remove-colored-pieces-if-both-neighbors-are-the-same-color/solutions/4118610/)

---

# Solution
```
class Solution {
    func winnerOfGame(_ colors: String) -> Bool {
        var score = 0

        // Initialize with a non-valid character.
        var curr: Character = " " 
        var streak = 0
        
        colors.forEach {
            // Reset streak if the current character is different from the previous one.
            if $0 != curr {
                curr = $0
                streak = 0
            }

            streak += 1
            
            // If there's a streak of more than 2 consecutive pieces with the same color,
            // update the score accordingly based on the color.
            if streak > 2 {
                score += curr == "A" ? 1 : -1
            }
        }
        
        // If the score is positive, Alice wins; otherwise, Bob wins.
        return score > 0
    }
}
```

# Complexity
- Time: $$O(n)$$
- Space: $$O(1)$$