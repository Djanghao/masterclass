# Optimal Swift Solution (1 Line of Code)

**Author:** dawoodaamir99
**Votes:** 2
**Link:** [https://leetcode.com/problems/nim-game/solutions/5696425/](https://leetcode.com/problems/nim-game/solutions/5696425/)

---

# Intuition
The problem is a classic game theory problem. The key insight is to notice the pattern in outcomes when both players play optimally.
# Approach
If the number of stones n is a multiple of 4 (e.g., 4, 8, 12, ...), then you will lose if both players play optimally. This is because no matter how many stones you take (1, 2, or 3), you will always leave a multiple of 4 stones for your friend. Your friend can then keep reducing the stones in such a way that you'll eventually face another multiple of 4.

Conversely, if n is not a multiple of 4, you can always win by reducing the number of stones to a multiple of 4 for your opponent.

Thus, the solution is straightforward: you can win if n % 4 != 0.

# Complexity
- Time complexity:
O(1)

- Space complexity:
O(1)

# Code
```swift []
class Solution {
    func canWinNim(_ n: Int) -> Bool {
        return n % 4 != 0
    }
}
```