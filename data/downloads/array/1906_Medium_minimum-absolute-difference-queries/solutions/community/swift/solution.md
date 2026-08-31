# Swift solution

**Author:** yamironov
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/1290036/](https://leetcode.com/problems/minimum-absolute-difference-queries/solutions/1290036/)

---

Since the `nums` values are in the range 1...100, we can store the prefix number of values. Thus, we get in constant time the number of values for any subarray. If the number of values is greater than zero, then this value is present in the subarray. In the sorted list of values of the subarray, we compare the neighboring elements and find the answer to the query
```
class Solution {
    func diff(_ a1: [Int], _ a2: [Int]) -> [Int] {
        var result = a1
        for i in 0..<a2.count {
            result[i] -= a2[i]
        }
        return result
    }
    func minDifference(_ nums: [Int], _ queries: [[Int]]) -> [Int] {
        let n = nums.count, maxVal = nums.max()!
        var prefixCount = [[Int]](), runningCount = [Int](repeating: 0, count: maxVal + 1), result = [Int]()
        for num in nums {
            runningCount[num] += 1
            prefixCount.append(runningCount)
        }
        for query in queries {
            let a = (query[0] > 0 ? diff(prefixCount[query[1]], prefixCount[query[0] - 1]) : prefixCount[query[1]]).enumerated().reduce(into: [Int](), { if $1.1 > 0 { $0.append($1.0) } })
            var subResult = Int.max
            for i in 1..<a.count {
                subResult = min(subResult, a[i] - a[i - 1])
            }
            result.append(subResult == Int.max ? -1 : subResult)
        }
        return result
    }
}
```