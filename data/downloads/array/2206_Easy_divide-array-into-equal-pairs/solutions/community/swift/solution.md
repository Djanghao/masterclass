# Swift: use Set, O(n)

**Author:** leet-me-code-you
**Votes:** 1
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/2692722/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/2692722/)

---

```swift
class Solution {
    func divideArray(_ nums: [Int]) -> Bool {
        var s = Set<Int>()
        for num in nums where s.remove(num) == nil {
            s.insert(num)
        }
        return s.isEmpty
    }
}
```