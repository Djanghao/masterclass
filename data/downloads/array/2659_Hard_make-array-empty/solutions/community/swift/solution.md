# Swift | Analyze Indexed Sort

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-array-empty/solutions/3467830/](https://leetcode.com/problems/make-array-empty/solutions/3467830/)

---

**Analyze Indexed Sort (accepted answer)**
```
class Solution {
    func countOperationsToEmptyArray(_ nums: [Int]) -> Int {
        let arr = nums.enumerated().sorted { $0.1 < $1.1 }
        var result = nums.count
        for i in arr.indices.dropLast() where arr[i].0 > arr[i+1].0 {
            result += nums.count - (i+1)
        }
        return result
    }
}
```