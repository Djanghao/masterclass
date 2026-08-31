# Time: O(n). Space: O(1)

**Author:** Ivaha
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4943762/](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/solutions/4943762/)

---

```
class Solution {
    func countSubarrays(_ nums: [Int], _ k: Int) -> Int {
        var count = 0, maxElement = Int.min, maxElementCount = 0, left = 0
        
        for i in 0 ..< nums.count {
            maxElement = max(maxElement, nums[i])
        }
        
        for right in 0 ..< nums.count {
            if nums[right] == maxElement {
                maxElementCount += 1
            }
            
            while maxElementCount == k {
                if nums[left] == maxElement {
                    maxElementCount -= 1
                }
                
                left += 1
            }
            
            count += left
        }
        
        return count
    }
}
```