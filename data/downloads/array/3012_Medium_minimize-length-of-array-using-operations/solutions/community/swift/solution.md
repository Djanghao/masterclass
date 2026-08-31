# [SWIFT] THE EASIEST WAY, FIRST solution in SWIFT 100% beats

**Author:** Madi13
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/5421196/](https://leetcode.com/problems/minimize-length-of-array-using-operations/solutions/5421196/)

---

```
class Solution {
    func minimumArrayLength(_ nums: [Int]) -> Int {
        guard let minElement = nums.min() else {
            return 0
        }
        
        if nums.contains(where: { $0 % minElement != 0 }) {
            return 1
        }
        
        return (nums.filter { $0 == minElement }.count + 1) / 2
    }
}

```