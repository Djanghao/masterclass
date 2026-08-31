# Swift Solution

**Author:** kripenometr
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/3555993/](https://leetcode.com/problems/minimum-fuel-cost-to-report-to-the-capital/solutions/3555993/)

---

# Code
```
class Solution {
    func minimumFuelCost(_ roads: [[Int]], _ seats: Int) -> Int {
        var edges = roads.reduce(into: Array(repeating: [Int](), count: roads.count + 1)) {
            $0[$1[0]].append($1[1])
            $0[$1[1]].append($1[0])
        }

        var peaks = Array(repeating: (false, 1), count: roads.count + 1)
        var result = 0

        var queue: [Int] = edges.enumerated().compactMap { (index, connections) in
            if connections.count == 1 && index != 0 { return index }
            return nil
        }

        while !queue.isEmpty {
            let vertix = queue.removeFirst()
            let nextElement = edges[vertix].filter { !peaks[$0].0 }

            if nextElement.count == 1 && !peaks[vertix].0 {
                result += peaks[vertix].1 % seats == 0 ? peaks[vertix].1 / seats : peaks[vertix].1 / seats + 1

                if nextElement[0] == 0 {
                    peaks[vertix].0 = true
                    continue 
                } else {
                    peaks[nextElement[0]].1 += peaks[vertix].1
                    peaks[vertix].0 = true

                    queue.append(nextElement[0])
                }
            }
        }

        return result
    }
}
```