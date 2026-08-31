# Swift | Binary Search | 6 SLOC

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/3615703/](https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array/solutions/3615703/)

---

**Binary Search (accepted answer)**
```
class Solution {
    func isMajorityElement(_ nums: [Int], _ target: Int) -> Bool {
        var (l,r) = (0, nums.count-1)
        while l < r {
            let mid = (l+r)/2
            (l, r) = nums[mid] >= target ? (l, mid) : (mid+1, r)
        }
        return l < (nums.count+1)/2 && nums[l] == target && nums[l+nums.count/2] == target
    }
}
```