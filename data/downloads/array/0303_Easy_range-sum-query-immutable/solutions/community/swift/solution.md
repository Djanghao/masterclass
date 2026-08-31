# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-sum-query-immutable/solutions/3019454/](https://leetcode.com/problems/range-sum-query-immutable/solutions/3019454/)

---

```
class NumArray {
    
    private let nums: [Int]

    init(_ nums: [Int]) {
        self.nums = nums
    }
    
    func sumRange(_ left: Int, _ right: Int) -> Int {
        nums[left...right].reduce(0, +)
    }
}
```