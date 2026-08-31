# Calculate trade off and sorting

**Author:** elliotvu
**Votes:** 0
**Link:** [https://leetcode.com/problems/mice-and-cheese/solutions/5784172/](https://leetcode.com/problems/mice-and-cheese/solutions/5784172/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Calculate trade of if first mouse give cheese at index for second mouse. Finally take k index has max benefit

# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n)

# Code
```swift []
class Solution {
    func miceAndCheese(_ reward1: [Int], _ reward2: [Int], _ k: Int) -> Int {
        var tradeOff = [Int](repeating: 0, count: reward1.count)

        for index in 0..<reward1.count {
            tradeOff[index] = reward1[index] - reward2[index]
        }

        let sortedTradeOffIndexes = tradeOff.enumerated().map(\\.offset).sorted { lhs, rhs in
            tradeOff[lhs] >= tradeOff[rhs]
        }

        let firstKIndexes = sortedTradeOffIndexes.prefix(k)
        var takeKIndexes = [Int: Bool]()
        firstKIndexes.forEach { index in
            takeKIndexes[index] = true
        }

        var sum = 0
        for index in 0..<reward1.count {
            if takeKIndexes[index] == true {
                sum += reward1[index]
            } else {
                sum += reward2[index]
            }
        }

        return sum
    }
}

```