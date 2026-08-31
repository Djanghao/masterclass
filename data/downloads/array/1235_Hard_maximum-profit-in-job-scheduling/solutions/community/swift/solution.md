# Swift Binary Search DP with explanation

**Author:** bugenzhao
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/694568/](https://leetcode.com/problems/maximum-profit-in-job-scheduling/solutions/694568/)

---

```swift
import Foundation

public extension RandomAccessCollection {
    /// Finds such index N that predicate is true for all elements up to
    /// but not including the index N, and is false for all elements
    /// starting with index N.
    /// Behavior is undefined if there is no such N.
    func binarySearch(predicate: (Element) -> Bool) -> Index {
        var low = startIndex
        var high = endIndex
        while low != high {
            let mid = index(low, offsetBy: distance(from: low, to: high) / 2)
            if predicate(self[mid]) {
                low = index(after: mid)
            } else {
                high = mid
            }
        }
        return low
    }
}


class Solution {
    struct Job {
        let startTime: Int
        let endTime: Int
        let profit: Int
    }

    func jobScheduling(_ startTime: [Int], _ endTime: [Int], _ profit: [Int]) -> Int {
        let indices = startTime.indices
        //: sort jobs by their `endTime`s
        let jobs = indices
            .map { i in Job(startTime: startTime[i], endTime: endTime[i], profit: profit[i]) }
            .sorted { $0.endTime < $1.endTime }
        //: for each job, find the last job that does not overlap it
        let previous = indices
            .map { i in indices.binarySearch(predicate: { j in jobs[j].endTime <= jobs[i].startTime }) }
        
        var dp = [Int](repeating: 0, count: indices.count + 1)
        for i in 1..<startTime.count + 1 {
            dp[i] = max(dp[i - 1], jobs[i - 1].profit + dp[previous[i - 1]]) //: take or not take
        }
        return dp.last!
    }
}
```