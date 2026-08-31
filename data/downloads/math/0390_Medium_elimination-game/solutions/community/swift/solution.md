# Swift

**Author:** ksmirnovnn
**Votes:** 0
**Link:** [https://leetcode.com/problems/elimination-game/solutions/5003900/](https://leetcode.com/problems/elimination-game/solutions/5003900/)

---

- head is the first number in the current list.
- remaining is the count of remaining numbers in the current list.
- step is the distance between each remaining number in the current list.
- moveLeft is a boolean indicating the direction of the current move.
```
class Solution {
    func lastRemaining(_ n: Int) -> Int {
        var head = 1, remaining = n
        var step = 1
        var moveLeft = true

        while remaining > 1 {
            if moveLeft || remaining % 2 == 1 {
                head += step
            }
            remaining /= 2
            step *= 2
            moveLeft = !moveLeft
        }

        return head
    }
}

```