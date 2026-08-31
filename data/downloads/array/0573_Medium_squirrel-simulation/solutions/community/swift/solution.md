# 💡Swift - Optimal Solution - Math

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/squirrel-simulation/solutions/4262537/](https://leetcode.com/problems/squirrel-simulation/solutions/4262537/)

---

# Solution
```
class Solution {
    func minDistance(_ height: Int, _ width: Int, _ tree: [Int], _ squirrel: [Int], _ nuts: [[Int]]) -> Int {
        var sum = 0
        var bestSave = Int.min

        for nut in nuts {
            let dist = abs(nut[0] - tree[0]) + abs(nut[1] - tree[1])
            sum += dist * 2
            let sDist = abs(nut[0] - squirrel[0]) + abs(nut[1] - squirrel[1])
            bestSave = max(bestSave, dist - sDist)
        }

        return sum - bestSave
    }
}

```
# Complexity
- Time: $$O(n)$$
- Space: $$O(1)$$