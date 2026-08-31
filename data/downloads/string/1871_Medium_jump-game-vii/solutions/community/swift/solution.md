# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-vii/solutions/1225787/](https://leetcode.com/problems/jump-game-vii/solutions/1225787/)

---

Let's introduce the jumpability variable. For each cell, the value of the jumpability == k indicates the availability for jumping from the k previous cells. To keep jumpability up-to-date, we use the jumpabilityChange array, where we record the beginning of the jump ability (+1) and the end of the jump ability (-1)
```
class Solution {
    func canReach(_ s: String, _ minJump: Int, _ maxJump: Int) -> Bool {
        let s = s.map({ $0 == "0" ? 0 : 1 }), c = s.count
        var jumpability = 0, jumpabilyChange = [Int](repeating: 0, count: 2 * c)
        guard s.last! == 0 else { return false } // can't jump to the last index if it contains "1"
        for i in 0..<c {
            jumpability += jumpabilyChange[i]
            if s[i] == 0 && (jumpability > 0 || i == 0) {
                jumpabilyChange[i + minJump] += 1
                jumpabilyChange[i + maxJump + 1] -= 1
            }
        }
        return jumpability > 0
    }
}
```