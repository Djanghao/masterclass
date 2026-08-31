# Swift O(n) Stack Solution

**Author:** LeetHenry
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-subarray-ranges/solutions/1979772/](https://leetcode.com/problems/sum-of-subarray-ranges/solutions/1979772/)

---

```
class Solution {

    // O(n^2)
    func subArrayRanges(_ nums: [Int]) -> Int {
        var res = 0
        for i in 0..<nums.count {
            var maxVal = nums[i]
            var minVal = nums[i]
            for j in i..<nums.count {
                maxVal = max(maxVal, nums[j])
                minVal = min(minVal, nums[j])
                res += maxVal - minVal
            }
        }
        return res
    }
    
    // O(n)
    func subArrayRanges(_ nums: [Int]) -> Int {
        var res = 0
        let n = nums.count
        var j = 0
        var k = 0
        
        var stack = [Int]()
        for i in 0...n {
            while !stack.isEmpty && nums[stack.first!] > (i == n ? Int.min : nums[i]) {
                j = stack.removeFirst()
                k = stack.first ?? -1
                res -= nums[j] * (i - j) * (j - k)
            }
            stack.insert(i, at: 0)
        }
        
        stack.removeAll()
        for i in 0...n {
            while !stack.isEmpty && nums[stack.first!] < (i == n ? Int.max : nums[i]) {
                j = stack.removeFirst()
                k = stack.first ?? -1
                res += nums[j] * (i - j) * (j - k)
            }
            stack.insert(i, at: 0)
        }
        return res
    }
}
```