# Swift Solution, easy Greedy O(n)

**Author:** Suns4ine
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-subarray-length-k/solutions/2741325/](https://leetcode.com/problems/largest-subarray-length-k/solutions/2741325/)

---

```
class Solution {
    func largestSubarray(_ nums: [Int], _ k: Int) -> [Int] {
        guard nums.count >= k else { return nums }
        var result = [Int]()
        var max = (numb: nums[0], index: 0)
        
        for i in 1..<nums.count {
            guard i + k <= nums.count else { break }
            max = nums[i] > max.numb ? (numb: nums[i], index: i) : max
            
        }
        
        for i in max.index..<max.index + k {
            result.append(nums[i])
        }
        
        return result
    }
}
```