# Swift - sorting + min

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference/solutions/5981359/](https://leetcode.com/problems/minimum-absolute-difference/solutions/5981359/)

---

# Complexity
- Time complexity:
O(N log N)

- Space complexity:
O(N)

# Code
```swift []
class Solution {
    func minimumAbsDifference(_ arr: [Int]) -> [[Int]] {
        //sort the array. This way we can easily find the difference easily and also find the min abs diff
        var arr = arr.sorted(by: <)
        var result = [[Int]]()
        var minDiff = Int.max

        for i in stride(from: 0, through: arr.count - 2, by: 1) {
            let currDiff = arr[i + 1] - arr[i]

            if currDiff == minDiff {
                result.append([arr[i], arr[i + 1]])
            } else if currDiff < minDiff {
                // we have a new result
                result = [[Int]]()
                result.append([arr[i], arr[i + 1]])
                minDiff = currDiff
            }
        }

        return result
    }
}
```