# Swift solution with binary search

**Author:** auro7
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2494732/](https://leetcode.com/problems/longest-subsequence-with-limited-sum/solutions/2494732/)

---

```
class Solution {
    func answerQueries(_ nums: [Int], _ queries: [Int]) -> [Int] {
        let queryCount = queries.count
        var result = [Int](repeating: 0, count: queryCount)
        var nums = nums
        let runningSum = nums.sorted().reduce(into: [Int]()) { $0.append(($0.last ?? 0) + $1)}
        for (i, query) in queries.enumerated() {
            result[i] = binarySearch(runningSum, query)
        }
        return result
    }
    
    private func binarySearch(_ runningSum: [Int], _ query: Int) -> Int {
        var left = 0
        var right = runningSum.count - 1
        while left <= right {
            let mid = left + (right - left) / 2
            if runningSum[mid] <= query {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return left
    }
}
```