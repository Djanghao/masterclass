# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4858992/](https://leetcode.com/problems/apple-redistribution-into-boxes/solutions/4858992/)

---

```
class Solution {
    func minimumBoxes(_ apple: [Int], _ capacity: [Int]) -> Int {
        
        let apples = apple.reduce(0, +)
        let capacity = capacity.sorted(by: >)
        var total = 0

        for i in capacity.indices {
            total += capacity[i]
            if total >= apples { return i + 1 }
        }

        return -1
    }
}
```