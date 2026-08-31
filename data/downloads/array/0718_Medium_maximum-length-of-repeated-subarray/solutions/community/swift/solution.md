# [Swift] Readable Solution (Dynamic Programming)

**Author:** Legonaftik
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/1328421/](https://leetcode.com/problems/maximum-length-of-repeated-subarray/solutions/1328421/)

---

```
class Solution {
    func findLength(_ nums1: [Int], _ nums2: [Int]) -> Int {        
        var dp = Array(
            repeating: Array(repeating:0, count: nums2.count + 1),
            count: nums1.count + 1
        )
        var answer = 0        
        for index1 in 1...nums1.endIndex { 
            for index2 in 1...nums2.endIndex {
               if nums1[index1-1] == nums2[index2-1] {
                   dp[index1][index2] = 1 + dp[index1-1][index2-1]
                   answer = max(answer, dp[index1][index2])
               } 
            }
        }
        return answer
    }
}
```