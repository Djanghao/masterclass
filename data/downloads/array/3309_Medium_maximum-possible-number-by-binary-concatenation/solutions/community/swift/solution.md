# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5881360/](https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation/solutions/5881360/)

---

```
class Solution {
    func maxGoodNumber(_ nums: [Int]) -> Int {
        
        let bin = nums.map { String($0, radix: 2) }

        let orders = [
            [0, 1, 2],
            [0, 2, 1],
            [1, 0, 2],
            [1, 2, 0],
            [2, 0, 1],
            [2, 1, 0]
        ]

        return orders.map({ Int($0.map({ bin[$0] }).joined(), radix: 2)! }).max()!
    }
}
```