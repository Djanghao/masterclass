# Swift💯

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6034910/](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/solutions/6034910/)

---

**Analyze Differences between "Bad" indices (accepted answer)**
Make a list of "bad" indices where `nums[i-1]>=nums[i]` and see if there are two adjacent gaps both of at least `k` or any gap of at least `2*k` in `badIndices`
```
import Algorithms
class Solution {
    func hasIncreasingSubarrays(_ nums: [Int], _ k: Int) -> Bool {
        let badIndices = [0] + (1..<nums.count).filter{i in nums[i-1]>=nums[i]} + [nums.count]
        let deltas = zip(badIndices[1...],badIndices).map(-)
        return deltas.max()! >= 2*k || deltas.adjacentPairs().map(min).max()! >= k
    }
}
```
`.adjacentPairs()` reference: [https://swiftpackageindex.com/apple/swift-algorithms/1.2.0/documentation/algorithms/swift/sequence/adjacentpairs()](https://swiftpackageindex.com/apple/swift-algorithms/1.2.0/documentation/algorithms/swift/sequence/adjacentpairs())

---

**DP (accepted answer)**
Each index in `dp` correlates to `nums`. `dp[i]` memo-izes whether `nums[i..<i+k]` is strictly increasing. 
```
class Solution {
    func hasIncreasingSubarrays(_ nums: [Int], _ k: Int) -> Bool {
        var dp = Array(repeating: false, count: nums.count-k+1)
        for i in dp.indices {
            dp[i] = (i..<i+k-1).allSatisfy{j in nums[j] < nums[j+1]}
            if i >= k && dp[i] && dp[i-k] { return true }
        }
        return false
    }
}
```