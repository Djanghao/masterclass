# Swift, recursion

**Author:** TatianaVol
**Votes:** 1
**Link:** [https://leetcode.com/problems/stone-game-ii/solutions/3565827/](https://leetcode.com/problems/stone-game-ii/solutions/3565827/)

---


# Code
```
class Solution {
    
    enum Step: Int {
        case alice
        case bob
    }

    var memo: [String: Int] = [:]
    var piles: [Int] = []
    
    func stoneGameII(_ piles: [Int]) -> Int {
        self.piles = piles
        return recurse(.alice, 0, 1)
    }

    func recurse(_ step: Step, _ i: Int, _ m: Int) -> Int {
        
        if i == piles.count { return 0 }
        if let value = memo["\\(step.rawValue)_\\(i)_\\(m)"] { return value }

        var result = step == .bob ? Int.max : -1
        var score = 0

        for x in (1...min(2 * m, piles.count - i)) {
            score += piles[i + x - 1]

            if step == .alice {
                result = max(result, score + recurse(.bob, i + x, max(m, x)))
            } else {
                result = min(result, recurse(.alice, i + x, max(m, x)))
            }
        }

        memo["\\(step.rawValue)_\\(i)_\\(m)"] = result
        return result
    }
}
```