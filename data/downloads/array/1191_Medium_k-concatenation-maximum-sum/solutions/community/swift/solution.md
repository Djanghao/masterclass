# Swift Solution: Highly Efficient with Easy-to-Follow Explanation

**Author:** windowcow
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/3935102/](https://leetcode.com/problems/k-concatenation-maximum-sum/solutions/3935102/)

---

# Intuition
Initially, my goal is to find the maximum sum of a subarray formed by repeating the original array 

k times. If k=1, the problem reduces to finding the maximum subarray sum. For k>1, it may involve using parts of the array more than once.
# Approach
Create a result() function that computes the maximum subarray sum for a given array. We use dynamic programming (dp) to find the maximum subarray sum, taking O(n) time and O(n) space.

For k=1, the answer is simply arr.result().

For k=2, we concatenate the array with itself and find the maximum subarray sum.

For k>2, we also consider whether the sum of the entire array (sum) is positive or negative. If positive, it contributes to the maximum sum for the k\u22122 remaining repetitions.
# Complexity
- Time complexity:
Here n is the length of the array. result() takes O(n) time and other operations like sum also take O(n) time.

- Space complexity:
The dynamic programming array (dp) takes O(n) space.

### (I wrote this code but explanation is from ChatGPT.)

# Code
```
import Foundation

extension Array where Element == Int {
    func result() -> Int {
        guard !isEmpty else { return 0 }
        guard count > 1 else { return Swift.max(0, self[0])}
        var dp = [Int](repeating: 0, count: count)
        dp[0] = Swift.max(0,  self[0])
        for i in 1...count - 1 {
            dp[i] = Swift.max(self[i], dp[i-1] + self[i], 0)
        }

        return dp.max()!
    }
}

class Solution {
    func kConcatenationMaxSum(_ arr: [Int], _ k: Int) -> Int {
        let n = 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 * 10 + 7

        if k == 1 { return arr.result() % n}
        let res =  (arr + arr).result() 

        if k == 2 { return res % n}
        let sum = arr.reduce(0) { $0 + $1 }

        return (sum <= 0 ? res : res + (k - 2) * sum) % n
    }
}
```