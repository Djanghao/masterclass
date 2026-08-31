# ✅ [Solution][Swift] Hash Map, Prefix Sum, O(n)

**Author:** adanilyak
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5864321/](https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5864321/)

---

**TC:** $$O(n)$$
**SC:** $$O(n)$$
```swift []
class Solution {
    func minSubarray(_ nums: [Int], _ p: Int) -> Int {
        let n = nums.count
        var prefixSum = Array(repeating: 0, count: n + 1)
        for i in 0..<n {
            prefixSum[i + 1] = (prefixSum[i] + nums[i]) % p
        }

        let r = prefixSum[n] % p
        guard r != 0 else { return 0 }

        var map = [0: 0], result = -1
        for i in 1...n {
            if let j = map[(prefixSum[i] - r + p) % p] {
                result = min(result == -1 ? Int.max : result, i - j)
            }
            map[prefixSum[i]] = i
        }
        return result == n ? -1 : result
    }
}
```