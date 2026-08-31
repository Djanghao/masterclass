# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/3101116/](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/solutions/3101116/)

---

```
class Solution {
    func maxSubsequence(_ nums: [Int], _ k: Int) -> [Int] {
        nums
            .enumerated()
            .sorted { $0.element > $1.element }
            .prefix(k)
            .sorted { $0.offset < $1.offset }
            .map { $0.element }
    }
}
```