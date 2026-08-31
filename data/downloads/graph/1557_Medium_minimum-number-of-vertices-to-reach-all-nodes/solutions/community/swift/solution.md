# Swift - Simple + Concise

**Author:** nickreps
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/3540125/](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/solutions/3540125/)

---



# Code
```
class Solution {
    func findSmallestSetOfVertices(_ n: Int, _ edges: [[Int]]) -> [Int] {
        var dict = [Int:[Int]]()

        for edge in edges {
            dict[edge[1], default: []].append(edge[0])
        }

        var res = [Int]()
        for i in 0..<n {
            if dict[i] == nil {
                res.append(i)
            }
        }
        return res
    }
}
```