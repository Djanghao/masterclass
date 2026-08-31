# Swift💯UnionFind

**Author:** OrchidHunter
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-provinces/solutions/3594583/](https://leetcode.com/problems/number-of-provinces/solutions/3594583/)

---

**Union Find (accepted answer)**
```
class Solution {
    func findCircleNum(_ isConnected: [[Int]]) -> Int {
        var groups = Array(isConnected.indices)
        
        func find(_ x:Int) -> Int { groups[x]==x ? x : find(groups[x]) }
        
        for y in isConnected.indices {
            for x in y+1 ..< isConnected.count where isConnected[y][x] == 1 {
                groups[find(x)] = find(y)  // form union between `x` and `y`
            }
        }

        return Set(groups.map(find)).count
    }
}
```