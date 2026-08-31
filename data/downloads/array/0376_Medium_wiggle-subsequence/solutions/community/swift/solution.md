# Swift 100% fast, easy to understand solution using Enum, Dictionary to do dynamic programming

**Author:** yyao8
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-subsequence/solutions/4877891/](https://leetcode.com/problems/wiggle-subsequence/solutions/4877891/)

---

# Intuition
Loop from last value, and check what's the longest path from the current index with the one we already checked.
Use a dictionary to track each index's information, including, the value of that index, what's the longest path from that index, and if we want to have a longer path with the current index being checked + the index in that record, whether the current the value should be greater than that index's value or not.

# Code
```
class Solution {
    enum Needs {
        case more
        case less
        case any
    }
    private var longestRecord = [Int : (val: Int, needs: Needs, length: Int)]()

    func wiggleMaxLength(_ nums: [Int]) -> Int {
        guard nums.count > 1 else { return 1 }
        var i = nums.count - 1
        longestRecord[i] = (nums[i], .any, 1)
        i -= 1
        while i >= 0 {
            let ni = nums[i]
            // var longest = -1
            for j in i+1..<nums.count {
                guard let record = longestRecord[j] else { continue }
                if ni == record.val { continue }
                if record.needs == .any {
                    longestRecord[i] = (ni, ni > record.val ? .less : .more, record.length + 1)
                    break
                }
                if ni > record.val && record.needs == .more {
                    longestRecord[i] = (ni, .less, record.length + 1)
                    break
                }
                if ni < record.val && record.needs == .less {
                    longestRecord[i] = (ni, .more, record.length + 1)
                    break
                }
            }
            i -= 1
        }
        // printRecord()

        return longestRecord.values.sorted { $0.length > $1.length }.first!.length
    }

    func printRecord() {
        print("Records:")
        for key in longestRecord.keys.sorted { $0 <= $1 } {
            print("i: \\(key): \\(longestRecord[key]!)")
        }
    }
}
```