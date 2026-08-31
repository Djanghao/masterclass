# [Swift] Find smallest so far from left and right sides

**Author:** GV1506
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4216225/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/solutions/4216225/)

---

Time complexity: $O(n)$
Space complexity: $O(n)$
```
class Solution {
    func minimumSum(_ nums: [Int]) -> Int {
        let n = nums.count
        
        var leftArr = Array(repeating: -1, count: n)
        var minLeftSofar = nums[0]
        for i in 1..<n {
            if minLeftSofar < nums[i] {
                leftArr[i] = minLeftSofar
            } else {
                minLeftSofar = nums[i]
            }
        }
        
        var rightArr = Array(repeating: -1, count: n)
        var minRightSofar = nums[n-1]
        for i in (0..<n-1).reversed() {
            if minRightSofar < nums[i] {
                rightArr[i] = minRightSofar
            } else {
                minRightSofar = nums[i]
            }
        }
        
        var ans = Int.max
        for i in 1..<n-1 {
            if leftArr[i] > 0, rightArr[i] > 0 {
                ans = min(ans, leftArr[i] + rightArr[i] + nums[i])
            }
        }
        return ans == Int.max ? -1 : ans
    }
}
```