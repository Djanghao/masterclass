# Recursive Swift solution

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/predict-the-winner/solutions/943016/](https://leetcode.com/problems/predict-the-winner/solutions/943016/)

---

Recursive Swift solution
```
class Solution {
    func PredictTheWinner(_ nums: [Int]) -> Bool {
        let c = nums.count, m = 100
        var dp = [Int: Bool]()
        func helper(_ player1: Bool, _ sum: Int, _ left: Int, _ right: Int) -> Bool {
            let key = sum * m * m + left * m + right
            if let savedResult = dp[key] { return savedResult }
            var result = false
            if left == right {
                result = player1 ? (nums[left] - sum >= 0) : (nums[left] - sum > 0)
            } else { // left < right
                result = !helper(!player1, nums[left] - sum, left + 1, right) || !helper(!player1, nums[right] - sum, left, right - 1)
            }
            dp[key] = result
            return result
        }
        return helper(true, 0, 0, c - 1)
    }
}
```