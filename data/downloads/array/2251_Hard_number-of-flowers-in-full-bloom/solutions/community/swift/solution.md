# 💡Swift - Optimal Solution - Binary Search

**Author:** bernikovich
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/4155410/](https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/4155410/)

---

# Solution
```
class Solution {
    func fullBloomFlowers(_ flowers: [[Int]], _ people: [Int]) -> [Int] {
        // Create two arrays to store the sorted start and end times of full blooms.
        var starts: [Int] = []
        var ends: [Int] = []
        
        // Extract start and end times from the 'flowers' array and adjust for inclusivity.
        flowers.forEach {
            starts.append($0[0])
            // Add 1 to the end time to account for the inclusive bloom time range.
            ends.append($0[1] + 1)
        }
        
        // Sort both arrays in ascending order.
        starts.sort()
        ends.sort()

        // Define a binary search function.
        func binarySearch(_ nums: [Int], _ target: Int) -> Int {
            var l = 0
            var r = nums.count
            while l < r {
                let mid = (l + r) / 2
                if target < nums[mid] {
                    r = mid
                } else {
                    l = mid + 1
                }
            }
            return l
        }

        // Map the bloom times of people to the number of flowers in bloom at that time.
        return people.map {
            let flowersStartedToBloom = binarySearch(starts, $0)
            let flowersEndedToBloom = binarySearch(ends, $0)
            return flowersStartedToBloom - flowersEndedToBloom
        }
    }
}
```

# Complexity
- Time: $$O((n + m)logn)$$ for sorting and binary search
- Space: $$O(n)$$