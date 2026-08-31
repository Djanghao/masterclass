# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/frog-jump-ii/solutions/3306824/](https://leetcode.com/problems/frog-jump-ii/solutions/3306824/)

---

```
class Solution {
    func maxJump(_ stones: [Int]) -> Int {
        
        guard stones.count > 2 else { return stones[1] - stones[0] }

        var res = stones[2] - stones[0]

        for i in 1..<(stones.count - 1) {
            res = max(res, stones[i + 1] - stones[i - 1])
        }

        return res
    }
}
```