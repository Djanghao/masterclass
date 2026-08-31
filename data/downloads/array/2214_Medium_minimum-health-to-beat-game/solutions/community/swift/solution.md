# [✅] Beats 100% Runtime, Simple-Easy Solution

**Author:** acetechinterview
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-health-to-beat-game/solutions/4571111/](https://leetcode.com/problems/minimum-health-to-beat-game/solutions/4571111/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
- Find the max value in `damage`
- Get the index of max value in `damage`
- If `armor` is greater or equal to `max`, update the index to 0
- Otherwise, update the index value to `(max - armor)`
- Sum all values in the array and add 1 -> that will be your minimum health

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func minimumHealth(_ damage: [Int], _ armor: Int) -> Int {
        var damage = damage
        let max = damage.max()!

        let firstIndex = damage.firstIndex(where: { $0 == max })!
        damage[firstIndex] =  armor >= max ? 0 : max - armor
        
        return damage.reduce(0, +) + 1
    }
}
```