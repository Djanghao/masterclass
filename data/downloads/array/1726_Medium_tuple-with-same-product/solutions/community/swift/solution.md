# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/tuple-with-same-product/solutions/3267861/](https://leetcode.com/problems/tuple-with-same-product/solutions/3267861/)

---

```
class Solution {
    func tupleSameProduct(_ nums: [Int]) -> Int {
        (0..<(nums.count - 1))
            .flatMap { (i: Int) -> [Int] in
                ((i + 1)..<nums.count).map { (j: Int) -> Int in nums[i] * nums[j] }
            }
            .reduce(into: [Int: Int]()) { $0[$1, default: 0] += 1 }
            .values
            .map { (x: Int) -> Int in 4 * x * (x - 1) }
            .reduce(0) { (r: Int, x: Int) -> Int in r + x }
    }
}
```