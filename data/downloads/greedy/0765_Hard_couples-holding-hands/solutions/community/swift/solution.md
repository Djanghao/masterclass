# Solution in Swift

**Author:** karthikdamodara
**Votes:** 0
**Link:** [https://leetcode.com/problems/couples-holding-hands/solutions/6071014/](https://leetcode.com/problems/couples-holding-hands/solutions/6071014/)

---

# Intuition
using partner relation ship

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```swift []
class Solution {
    func minSwapsCouples(_ row: [Int]) -> Int {

        var swaps = 0
        var row = row

        func partner(_ person: Int) -> Int {
            return person % 2 == 0 ? person + 1 : person - 1
        }


        for i in stride(from: 0, to: row.count, by: 2) {
            let first = row[i]
            let second = row[i + 1]

            if second == partner(first) {
                continue
            }

            let partnerIndex = row.firstIndex(of: partner(first))!

            (row[i + 1], row[partnerIndex]) = (row[partnerIndex], row[i + 1])
            swaps += 1
        }
        
        return swaps
    }
}
```