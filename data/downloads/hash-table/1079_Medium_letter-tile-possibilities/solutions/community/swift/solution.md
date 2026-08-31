# Simple Solution

**Author:** Nickolans
**Votes:** 0
**Link:** [https://leetcode.com/problems/letter-tile-possibilities/solutions/4904362/](https://leetcode.com/problems/letter-tile-possibilities/solutions/4904362/)

---

# Code
```
class Solution {
    func numTilePossibilities(_ tiles: String) -> Int {
        var results = Set<String>()
        let tiles = tiles.map { String($0) }

        for i in 0..<tiles.count {
            newPermute([i], tiles, &results)
        }

        return results.count
    }

    func newPermute(_ currStr: [Int], _ tiles: [String], _ results: inout Set<String>) {
        results.insert(currStr.reduce(into: "") { $0.append(tiles[$1]) })

        for i in 0..<tiles.count where !currStr.contains(i) {
            newPermute(currStr + [i], tiles, &results)
        }
    }
}
```