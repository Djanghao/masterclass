# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/1472017/](https://leetcode.com/problems/sum-of-beauty-in-the-array/solutions/1472017/)

---

Swift solution
```
class Solution {
    func sumOfBeauties(_ nums: [Int]) -> Int {
        let n = nums.count
        guard n > 2 else { return 0 }
        var preMax = nums, postMin = nums, result = 0
        for i in 1..<n {
            preMax[i] = max(preMax[i], preMax[i - 1])
            postMin[n - 1 - i] = min(postMin[n - 1 - i], postMin[n - i])
        }
        for i in 1..<(n - 1) {
            if nums[i] > preMax[i - 1] && nums[i] < postMin[i + 1] {
                result += 2
            } else if nums[i] > nums[i - 1] && nums[i] < nums[i + 1] {
                result += 1
            }
        }
        return result
    }
}
```