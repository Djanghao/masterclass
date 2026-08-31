# 💡Swift - Expected Solution - Hierholzer's Algorithm

**Author:** bernikovich
**Votes:** 2
**Link:** [https://leetcode.com/problems/reconstruct-itinerary/solutions/4043004/](https://leetcode.com/problems/reconstruct-itinerary/solutions/4043004/)

---

# Solution
```
class Solution {
    func findItinerary(_ tickets: [[String]]) -> [String] {
        // Group tickets by origin.
        var destinationByOrigin: [String: [String]] = [:]
        for ticket in tickets {
            let (from, to) = (ticket[0], ticket[1])
            destinationByOrigin[from, default: []].append(to)
        }

        // Sort the destinations after grouping for efficient traversal.
        for key in destinationByOrigin.keys {
            // Sort destinations in descending order.
            destinationByOrigin[key]?.sort { $0 > $1 }
        }

        // Hierholzer's Algorithm.
        var result: [String] = []
        func dfs(_ from: String) {
            while let to = destinationByOrigin[from]?.popLast() {
                dfs(to)
            }
            result.append(from)
        }

        dfs("JFK")
        return result.reversed()
    }
}
```

# Complexity
- Time: $$O(e \\cdot loge)$$
- Space: $$O(e + v)$$