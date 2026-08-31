# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/incremental-memory-leak/solutions/3276493/](https://leetcode.com/problems/incremental-memory-leak/solutions/3276493/)

---

```
class Solution {
    func memLeak(_ memory1: Int, _ memory2: Int) -> [Int] {
        
        var free1 = memory1
        var free2 = memory2
        var time = 0

        while true {
            time += 1

            if max(free1 - time, free2 - time) < 0 { break }
            
            if free1 >= free2 { free1 -= time }
            else { free2 -= time }
        }

        return [time, free1, free2]
    }
}
```