# Swift | Binary Search | 6 SLOC

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3212076/](https://leetcode.com/problems/single-element-in-a-sorted-array/solutions/3212076/)

---

\u26A0\uFE0F - Solution is supposed to be O(log n)/O(1). Seeing many Swift posted solutions that are O(n)/O(n).

---
**Binary Search (accepted answer)**
```
class Solution {
    func singleNonDuplicate(_ nums: [Int]) -> Int {
        var (left, right) = (0, nums.count-1)
        while left < right {
            let mid = (left+right)/2
            (left, right) = nums[mid & ~1] == nums[mid & ~1+1] ? (mid+1, right) : (left, mid)
        }
        return nums[left]
    }
}
```

---

**SEE ALSO:** [A One-Liner Solution](https://leetcode.com/problems/single-element-in-a-sorted-array/discuss/3212093/Swift-or-One-Liner)