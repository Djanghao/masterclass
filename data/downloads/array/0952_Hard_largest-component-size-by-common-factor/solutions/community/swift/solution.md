# Swift 491 ms

**Author:** pigmasha
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/2773863/](https://leetcode.com/problems/largest-component-size-by-common-factor/solutions/2773863/)

---

```
class Solution {
    func largestComponentSize(_ nums: [Int]) -> Int {
        let n = nums.count
        guard n > 1 else { return n }
        let groups = dividersGroups(nums)
        var graph = Array(0 ..< n)
        for items in groups.values {
            guard items.count > 1 else { continue }
            var parent = -1
            for i in items {
                if parent < 0 {
                    parent = searchParent(i, &graph)
                } else {
                    let p2 = searchParent(i, &graph)
                    if parent != p2 { graph[p2] = parent }
                }
            }
        }
        var counts = Array(repeating: 0, count: n)
        var maxCount = 0
        for i in 0 ..< n {
            let p = searchParent(i, &graph)
            counts[p] += 1
            maxCount = max(maxCount, counts[p])
        }
        return maxCount
    }

    private func searchParent(_ e: Int, _ graph: inout [Int]) -> Int {
        if graph[e] == e { return e }
        graph[e] = searchParent(graph[e], &graph)
        return graph[e]
    }

    // Returns map simpleNum -> [indexes in nums with simpleNum factor]
    private func dividersGroups(_ nums: [Int]) -> [Int: [Int]] {
        var simpleNums = [2, 3]
        var simplesMap: [Int: [Int]] = [:]

        let addDivider: (Int, Int) -> Void = { s, i in
            if simplesMap[s] == nil {
                simplesMap[s] = [i]
            } else {
                simplesMap[s]?.append(i)
            }
        }

        for (i, n) in nums.enumerated() {
            let sMax = Int(sqrt(Double(n)))
            var j = simpleNums.last!
            while j <= sMax {
                j += 2
                while simpleNums.contains(where: { j % $0 == 0 }) { j += 2 }
                simpleNums.append(j)
            }
            var n1 = n
            for s in simpleNums {
                if s > sMax || n1 < 2 { break }
                if n1 % s == 0 {
                    addDivider(s, i)
                    while n1 % s == 0 { n1 /= s }
                }
            }
            if n1 > 1 {
                addDivider(n1, i)
            }
        }
        return simplesMap
    }
}
```