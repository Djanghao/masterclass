# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/3418875/](https://leetcode.com/problems/count-artifacts-that-can-be-extracted/solutions/3418875/)

---

```
class Solution {
    func digArtifacts(_ n: Int, _ artifacts: [[Int]], _ dig: [[Int]]) -> Int {
        
        func i(_ r: Int, _ c: Int) -> Int { r * n + c }
        func i(_ c: [Int]) -> Int { i(c[0], c[1]) }

        var digged = Array(repeating: false, count: n * n)
        for d in dig { digged[i(d)] = true }

        func dug(_ a: [Int]) -> Bool {
            for r in a[0]...a[2] {
                for c in a[1]...a[3]
                    where !digged[i(r, c)] {
                        return false
                    }
            }
            return true
        }

        return artifacts.filter(dug).count
    }
}
```