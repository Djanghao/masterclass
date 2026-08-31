# Swift solution using reduce function

**Author:** AndreevIVdev
**Votes:** 1
**Link:** [https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/2646975/](https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/2646975/)

---

```
class Solution {
    func xorAllNums(_ nums1: [Int], _ nums2: [Int]) -> Int {
        if nums1.count.isMultiple(of: 2), nums2.count.isMultiple(of: 2) {
            return 0
        } else if nums1.count.isMultiple(of: 2) {
            return nums1.reduce(0, ^)
        } else if nums2.count.isMultiple(of: 2) {
            return nums2.reduce(0, ^)
        } else {
            return nums2.reduce(0, ^) ^ nums1.reduce(0, ^)
        }
    }
}
```