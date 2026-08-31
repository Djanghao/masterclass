# DP Clean Solution

**Author:** Valerii_Demin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5656557/](https://leetcode.com/problems/maximum-energy-boost-from-two-drinks/solutions/5656557/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
Solution 1:
```
class Solution {
    func maxEnergyBoost(_ energyDrinkA: [Int], _ energyDrinkB: [Int]) -> Int {
        var dpA: [Int] = [energyDrinkA.first!]
        var dpB: [Int] = [energyDrinkB.first!]
        for i in 1 ..< energyDrinkA.count {
            dpA.append(max(dpA[i - 1], i > 1 ? dpB[i - 2] : 0) + energyDrinkA[i])
            dpB.append(max(dpB[i - 1], i > 1 ? dpA[i - 2] : 0) + energyDrinkB[i])
        }
        return max(dpA.last!, dpB.last!)
    }
}
```
Solution 2:
```
class Solution {
    func maxEnergyBoost(_ energyDrinkA: [Int], _ energyDrinkB: [Int]) -> Int {
        var a = 0, b = 0
        for i in 0 ..< energyDrinkA.count {
            let newA = max(a + energyDrinkA[i], b)
            b = max(b + energyDrinkB[i], a)
            a = newA
        }
        return max(a, b)
    }
}
```