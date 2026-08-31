# Swift Binary Search

**Author:** jav_solo
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/1787498/](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/solutions/1787498/)

---

Thank you to Ankush093 for their solution in C++ [here](https://leetcode.com/problems/kth-smallest-product-of-two-sorted-arrays/discuss/1753363/Binary-search)

```
class Solution {
    func kthSmallestProduct(_ nums1: [Int], _ nums2: [Int], _ k: Int) -> Int {
        var nums1 = nums1
        var nums2 = nums2
        
        var n = nums1.count
        var m = nums2.count
        var result = 0
        var minIndex = min(nums1[0], nums2[0])
        var maxIndex = max(nums1[n - 1], nums2[m - 1])
        
        var left = min(minIndex, maxIndex*minIndex)
        var right = max(maxIndex*maxIndex, minIndex*minIndex)
        
        while left <= right {
            var mid = left + (right - left) / 2
            if valid(&nums1,&nums2,n,m,mid,k) {
                result = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        
        return result
    }
    
    func getValue1(_ x: Int, _ nums2: inout [Int], _ m: Int, _ val: Int) -> Int {
        var left = 0
        var right = m - 1
        var result = m
        
        while left <= right {
            var mid = left + (right - left) / 2
            if x * nums2[mid] <= val {
                result = mid
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
        return m - result
    }
    
    func getValue2(_ x: Int, _ nums2: inout [Int], _ m: Int, _ val: Int) -> Int {
        var left = 0
        var right = m - 1
        var result = 0
        
        while left <= right {
            var mid = left + (right - left) / 2
            if x * nums2[mid] <= val {
                result = mid + 1
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return result
    }
    
    func valid(_ nums1: inout [Int], _ nums2: inout [Int], _ n : Int, _ m: Int, _ mid: Int, _ k : Int) -> Bool {
        var result = 0
        for index in 0 ..< n {
            if nums1[index] < 0 {
                result += getValue1(nums1[index], &nums2, m, mid)
            } else {
                result += getValue2(nums1[index], &nums2, m, mid)
            }
        }
        return result >= k
    }
}
```