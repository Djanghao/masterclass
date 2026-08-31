# Swift | One liner | O(n) time, O(1) space using `reduce`

**Author:** iosdevzone
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/3846319/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/3846319/)

---

A lot of other solutions use `map` which will allocate an intermediate array (unless `lazy` is used).

This solution avoids the intermediate array by using `reduce`.
# Code
```
class Solution {
    func maximumValue(_ strs: [String]) -> Int {
        strs.reduce(0) { max($0, Int($1) ?? $1.count) }
    }
}
```