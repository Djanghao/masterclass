# Short, Sweet, Swift

**Author:** blest
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/3649906/](https://leetcode.com/problems/check-if-it-is-a-good-array/solutions/3649906/)

---

```
class Solution {
    func isGoodArray(_ nums: [Int]) -> Bool {
        nums.reduce(0, { gcd($0, $1) }) == 1
    }
    func gcd(_ a: Int, _ b: Int) -> Int {
        b == 0 ? a : gcd(b, a % b)
    }
}
```