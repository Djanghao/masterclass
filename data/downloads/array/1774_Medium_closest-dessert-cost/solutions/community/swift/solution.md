# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-dessert-cost/solutions/1088193/](https://leetcode.com/problems/closest-dessert-cost/solutions/1088193/)

---

Swift solution
```
class Solution {
    func closestCost(_ baseCosts: [Int], _ toppingCosts: [Int], _ target: Int) -> Int {
        var toppingCombos = [0: true], minCombo = baseCosts.min()!, maxCombo = baseCosts.max()! + toppingCosts.reduce(into: Int(0), { $0 += 2 * $1 })
        for toppingCost in toppingCosts {
            let tempToppingCombos = toppingCombos.keys
            for toppingCombo in tempToppingCombos {
                toppingCombos[toppingCombo + toppingCost] = true
                toppingCombos[toppingCombo + toppingCost * 2] = true
            }
        }
        for baseCost in baseCosts {
            for toppingCombo in toppingCombos.keys {
                let combo = baseCost + toppingCombo
                if combo <= target {
                    minCombo = max(minCombo, combo)
                } else {
                    maxCombo = min(maxCombo, combo)
                }
            }
        }
        return (maxCombo - target) < (target - minCombo) ? maxCombo : minCombo
    }
}
```