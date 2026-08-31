# 💡Swift - Optimal Solution - Binary Search

**Author:** bernikovich
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-in-mountain-array/solutions/4159915/](https://leetcode.com/problems/find-in-mountain-array/solutions/4159915/)

---

# Solution
```
class Solution {
    func findInMountainArray(_ target: Int, _ mountainArr: MountainArray) -> Int {
        let n = mountainArr.length()
        
        // Cache requested values from the mountain array to minimize the call count.
        var cache: [Int: Int] = [:]
        func get(_ index: Int) -> Int {
            if let value = cache[index] { return value }
            let value = mountainArr.get(index)
            cache[index] = value
            return value
        }

        // There is no point in searching the peak first as we can simply
        // remember the last index where the array was still increasing and
        // start the search from there.
        var lastIncreasingIndex = 0

        // Search in the increasing part of the array
        var l = 0
        // The last element cannot be in the increasing part.
        var r = n - 2
        while l <= r {
            let mid = (l + r) / 2
            let midValue = get(mid)
            
            // Check if mid is in increasing part.
            if mid != 0 && get(mid - 1) > midValue {
                r = mid - 1
                continue
            }

            if midValue == target {
                return mid
            } else if midValue < target {
                l = mid + 1
            } else {
                r = mid - 1
            }
            lastIncreasingIndex = max(mid, lastIncreasingIndex)
        }

        // Search in the decreasing part.
        l = lastIncreasingIndex
        r = n - 1
        while l <= r {
            let mid = (l + r) / 2
            let midValue = get(mid)

            // Check if mid is in decreasing part.
            if mid != n - 1 && get(mid + 1) > midValue {
                l = mid + 1
                continue
            }

            if midValue == target {
                return mid
            } else if midValue > target {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

        return -1
    }
}
```

# Complexity
- Time: $$O(logn)$$
- Space: $$O(logn)$$