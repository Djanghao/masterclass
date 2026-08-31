# Swift Solution.

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/3284457/](https://leetcode.com/problems/count-ways-to-group-overlapping-ranges/solutions/3284457/)

---

# Explanation (detailed)

1. Sort the ranges by start time
2. Iterate over the sorted ranges
3. If the current range overlaps with the previous range, update the end time of the current range to the max of the current end time and the previous end time
4. If the current range does not overlap with the previous range, increment the total count of ranges by 1
5. After iterating over all the ranges, calculate the total number of ways by multiplying 2 by the total count of ranges


# Complexity
- Time complexity: O(nlogn)
- Space complexity: O(1)

# Code
```
class Solution {
    func countWays(_ ranges: [[Int]]) -> Int {
        let mod = Int(10e8 + 7)
        let sortedRanges = ranges.sorted(by: { (a, b) -> Bool in
            if a[0] == b[0] {
                return a[1] < b[1]
            }
            return a[0] < b[0]
        })
        var tc = 1
        var currStart = sortedRanges[0][0]
        var currEnd = sortedRanges[0][1]
        for i in 1..<sortedRanges.count {
            let start = sortedRanges[i][0]
            let end = sortedRanges[i][1]
            let prevEnd = sortedRanges[i-1][1]
            if currEnd >= start {
                currEnd = max(currEnd, end)
            } else {
                tc += 1
                currEnd = end
            }
        }
        var ans = 1
        for _ in 0..<tc {
            ans *= 2
            ans = ans % mod
        }
        return ans
    }
}
```