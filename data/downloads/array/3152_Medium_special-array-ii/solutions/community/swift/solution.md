# [Swift] 1-liner

**Author:** rokimkar
**Votes:** 1
**Link:** [https://leetcode.com/problems/special-array-ii/solutions/6129210/](https://leetcode.com/problems/special-array-ii/solutions/6129210/)

---



# Code
```swift []
class Solution {
    func isArraySpecial(_ nums: [Int], _ queries: [[Int]]) -> [Bool] {
        return queries.map{[validRanges = nums.enumerated().compactMap{($0.0 < nums.count-1  && $0.1&1 == nums[$0.0+1]&1) ? $0.0+1 : nil}] query in !validRanges.contains(where: {$0 > query.first! && $0 <= query.last!})}
    }
}
```