# 🟢🔴🟢 One Line Solution 🟢🔴🟢

**Author:** HelloSajib
**Votes:** 0
**Link:** [https://leetcode.com/problems/divisor-game/solutions/5837206/](https://leetcode.com/problems/divisor-game/solutions/5837206/)

---

# Intuition
The problem is a game where the player can subtract a divisor of the current number \\( n \\), and the goal is to determine if the starting player can guarantee a win. The first observation is that when \\( n \\) is even, the player has a winning strategy. This is because they can always reduce \\( n \\) to an odd number for the opponent, forcing them into a disadvantageous position. If \\( n \\) is odd, the opponent will eventually be able to make it even and gain the advantage.

# Approach
1. If the starting number \\( n \\) is even, the player can always subtract 1 or another divisor to make the number odd for the opponent. Hence, the first player always wins if \\( n \\) is even.
2. If \\( n \\) is odd, the opponent will eventually turn the number even, which gives them the advantage, meaning the first player loses.
3. Thus, the game can be reduced to simply checking whether \\( n \\) is even.

# Example Walkthrough

### Example 1:
**Input**:  
`n = 2`

1. \\( n \\) is even, so the first player can subtract 1 and make \\( n = 1 \\). The second player will then lose because they cannot subtract a divisor.
   
**Output**:  
`True`

### Example 2:
**Input**:  
`n = 3`

1. \\( n \\) is odd. The first player can only subtract 1, making \\( n = 2 \\). Now the second player wins by subtracting 1 to make \\( n = 1 \\), causing the first player to lose.

**Output**:  
`False`

# Complexity
- **Time Complexity**:  
  The time complexity is \\( O(1) \\), since we only check if \\( n \\) is even.

- **Space Complexity**:  
  The space complexity is \\( O(1) \\), as no additional memory is used.

# Code
```dart
class Solution {
  bool divisorGame(int n) => n.isEven;
}
