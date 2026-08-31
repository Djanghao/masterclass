# ✅ Clean swift solution

**Author:** kulizhnikov
**Votes:** 0
**Link:** [https://leetcode.com/problems/game-of-nim/solutions/3117431/](https://leetcode.com/problems/game-of-nim/solutions/3117431/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
class Solution {
    func nimGame(_ piles: [Int]) -> Bool {
        let nimSum = piles.reduce(0) { $0 ^ $1 }
        return nimSum != 0
    }
}
```