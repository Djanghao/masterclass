# Simple Solution

**Author:** TuringAccount
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-good-triplets-in-an-array/solutions/5868609/](https://leetcode.com/problems/count-good-triplets-in-an-array/solutions/5868609/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
import Foundation

class Solution {
    func goodTriplets(_ nums1: [Int], _ nums2: [Int]) -> Int {
        var mp = [Int: Int]()
        for (i, x) in nums1.enumerated() {
            mp[x] = i
        }
        
        var sortedList = [Int]()
        var ans = 0
        
        for (i, x) in nums2.enumerated() {
            let xMapped = mp[x]!
            let left = sortedList.binarySearchInsert(xMapped)
            let right = (nums2.count - 1 - xMapped) - (sortedList.count - left)
            ans += left * right
            sortedList.insert(xMapped, at: left)
        }
        
        return ans
    }
}

extension Array where Element: Comparable {
    // Binary search to find the correct insertion index
    func binarySearchInsert(_ target: Element) -> Int {
        var low = 0
        var high = self.count
        
        while low < high {
            let mid = (low + high) / 2
            if self[mid] < target {
                low = mid + 1
            } else {
                high = mid
            }
        }
        return low
    }
}

```