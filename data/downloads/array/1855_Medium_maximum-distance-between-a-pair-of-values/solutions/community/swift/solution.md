# Swift | Binary Search

**Author:** SakSwift
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/3952749/](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/3952749/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(mlog(n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    
    func maxDistance(_ nums1: [Int], _ nums2: [Int]) -> Int {
        var distance = Int.min 
        for i in 0 ..< min(nums1.count, nums2.count) {
            let result = binarySearch(nums1[i], nums2, i)
            if result != -1 {
                distance = max(distance, result - i)
            }
        }
        return distance == Int.min ? 0 : distance
    }


    func binarySearch(_ target: Int, _ arr: [Int], _ startIndex: Int) -> Int {
        var s = startIndex
        var e = arr.count - 1
        var ans = -1
        while s <= e {
            var mid = (s + e) / 2
            if target <= arr[mid] {
                ans = mid
                s = mid + 1
            } else {
                e = mid - 1
            }
        }
        return ans
    }
}
```