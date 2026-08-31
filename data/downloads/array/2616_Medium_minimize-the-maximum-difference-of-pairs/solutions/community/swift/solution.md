# Swift Solution using binary search O(nlogn)

**Author:** AndreevIVdev
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3396940/](https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/3396940/)

---

# Code
```
class Solution {
    func minimizeMax(_ nums: [Int], _ p: Int) -> Int {
        let nums = nums.sorted()
        var l = 0
        var r = nums.last! - nums.first!

        while l < r {
            let m = (l + r - 1) / 2
            var i = 0
            var c = 0
            while i < nums.count - 1 {
                defer { i += 1 }
                if nums[i + 1] - nums[i] <= m {
                    c += 1
                    i += 1
                }
            }

            if c >= p {
                r = m
            } else {
                l = m + 1
            }
        }

        return l
    }
}
```