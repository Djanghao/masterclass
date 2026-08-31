# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-viii/solutions/5887606/](https://leetcode.com/problems/stone-game-viii/solutions/5887606/)

---

```
class Solution {
    func stoneGameVIII(_ stones: [Int]) -> Int {

        var sum = stones.reduce(0, +)
        var dp = sum

        for i in (0..<stones.count - 2).reversed() {
            sum -= stones[i + 2]
            dp = max(dp, sum - dp)
        }

        return dp
    }
}

```