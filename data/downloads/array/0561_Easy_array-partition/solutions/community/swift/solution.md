# Solution: Array Partition I

**Author:** ozerovpavel
**Votes:** 2
**Link:** [https://leetcode.com/problems/array-partition/solutions/1122253/](https://leetcode.com/problems/array-partition/solutions/1122253/)

---

```swift
class Solution {
    func arrayPairSum(_ nums: [Int]) -> Int {
        var arr = nums
        arr = arr.sorted()
        var res = 0
        for i in 0..<arr.count {
            if i & 1 != 0 {
                res += min(arr[i], arr[i - 1])
            }
        }
        return res
    }
}
```