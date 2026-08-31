# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 3
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/2938263/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/2938263/)

---

```
class Solution {
    func smallestEqual(_ nums: [Int]) -> Int {
        nums.indices.first { $0 % 10 == nums[$0] } ?? -1
    }
}
```