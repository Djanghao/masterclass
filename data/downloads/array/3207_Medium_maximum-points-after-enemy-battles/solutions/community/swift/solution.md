# maxP

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5697324/](https://leetcode.com/problems/maximum-points-after-enemy-battles/solutions/5697324/)

---


```swift []
class Solution {
    func maximumPoints(_ enemyEnergies: [Int], _ currentEnergy: Int) -> Int {
        var sortedEnergies = enemyEnergies.sorted()
        var curr = currentEnergy
        var pts = 0
        var r = sortedEnergies.count - 1
        
        // Handle the edge cases
        if sortedEnergies.count == 1 {
            return curr / sortedEnergies[0]
        }
        if sortedEnergies[0] > curr {
            return 0
        }
        
        // Main loop to gain points or increase energy
        while r != 0 || curr >= sortedEnergies[0] {
            if curr >= sortedEnergies[0] {
                pts += curr / sortedEnergies[0]
                curr = curr % sortedEnergies[0]
            }
            if r != 0 {
                curr += sortedEnergies[r]
                r -= 1
            }
        }
        
        return pts
    }
}
```