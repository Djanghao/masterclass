# Swift Solution Easy

**Author:** kripenometr
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-complete-components/solutions/3555269/](https://leetcode.com/problems/count-the-number-of-complete-components/solutions/3555269/)

---

# Code
```
class Solution {
    func countCompleteComponents(_ n: Int, _ edges: [[Int]]) -> Int {
        var arrEdges = Array(repeating: [Int](), count: n)
        var climbedPeaks = Array(repeating: false, count: n)
        var result = 0

        for edge in edges {
            arrEdges[edge[0]].append(edge[1])
            arrEdges[edge[1]].append(edge[0])
        }

        for i in 0..<climbedPeaks.count {
            if !climbedPeaks[i] {
                var queue = [i]
                var countVertix = 0
                var countEdges = 0

                climbedPeaks[i] = true

                while !queue.isEmpty {
                    let vertix = queue.first!

                    countVertix += 1
                    countEdges += arrEdges[vertix].count

                    for vertix in arrEdges[vertix] {
                        if !climbedPeaks[vertix] {
                            queue.append(vertix)
                            climbedPeaks[vertix] = true
                        }
                    }

                    queue.removeFirst()
                }

                result += countVertix * (countVertix - 1) == countEdges ? 1 : 0
            }
        }

        return result
    }
}
```