# ✅ Swift: Easy to Understand and Simple Solution

**Author:** sohagkumarbiswas
**Votes:** 1
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/3367185/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/3367185/)

---



# Code
```
class Solution {
    func minNumber(_ nums1: [Int], _ nums2: [Int]) -> Int {
        for i in 1...9{
            if nums1.contains(i) && nums2.contains(i){
                return i
            }
        }
        
        var (nums, ans) = ([Int](), 0)
        nums.append(nums1.min()!)
        nums.append(nums2.min()!)
        nums.sort()
        
        for x in nums { ans = ans*10 + x }
        return ans
    }
}

```