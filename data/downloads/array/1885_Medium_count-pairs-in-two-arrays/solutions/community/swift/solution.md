# Swift Binary Search

**Author:** cookiezhuzhu
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5108837/](https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/5108837/)

---

```
class Solution {
    func countPairs(_ nums1: [Int], _ nums2: [Int]) -> Int {
        // calculate the diff first, the pair diff[i] + diff[j] > 0
        // sort the diff
        var diff = Array(repeating: 0, count: nums1.count)
        
        for i in 0 ..< nums1.count {
            diff[i] = nums1[i] - nums2[i]
        }
        
        diff.sort()
        var result = 0
        for i in 0 ..< diff.count {
            if diff[i] > 0 {
                var n = (diff.count - 1) - (i + 1) + 1
                result += (1 + n) * n / 2
                return result
            }
            
            var start = i
            var end = diff.count - 1
            
            while start <= end {
                var mid = start + (end - start) / 2
                if diff[i] + diff[mid] > 0 {
                    end = mid - 1
                } else {
                    start = mid + 1
                }
            }
            
            if start == diff.count {
                // not found
                continue
            }
            
            result += diff.count - 1 - start + 1
        }
        
        return result
    }
}
```