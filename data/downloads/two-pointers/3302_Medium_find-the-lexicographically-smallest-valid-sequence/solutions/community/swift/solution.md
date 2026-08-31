# [Swift]DFS

**Author:** dibbleme
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/5844418/](https://leetcode.com/problems/find-the-lexicographically-smallest-valid-sequence/solutions/5844418/)

---

```swift []
class Solution {
    typealias CH = Character
    func validSequence(_ word1: String, _ word2: String) -> [Int] {
        let l1: [CH] = Array(word1), l2: [CH] = Array(word2)
        var path: Set<Int> = [], ch: [[Int]: [Int]] = [:]
        let res = self.dfs(l1, l2, 0, 0, 1, &path, &ch)
        return res.sorted()
    }

    private func dfs(_ l1: [CH], _ l2: [CH], _ i1: Int, _ i2: Int, _ q: Int, _ pa: inout Set<Int>, _ ch: inout [[Int]: [Int]]) -> [Int] {
        guard q >= 0 else { return [] }
        guard i1 < l1.count, i2 < l2.count else { return i2 >= l2.count ? Array(pa) : [] }
        let key = [pa.count, i1, i2, q]
        if let f = ch[key] { return f }

        let res: [Int]
        if l1[i1] == l2[i2] {
            pa.insert(i1)
            if i2 == l2.count - 1 { return Array(pa) }
            else { res = self.dfs(l1, l2, i1 + 1, i2 + 1, q, &pa, &ch) }
            pa.remove(i1)
        } else {
            pa.insert(i1)
            var tmp = self.dfs(l1, l2, i1 + 1, i2 + 1, q - 1, &pa, &ch)
            pa.remove(i1)
            if tmp.isEmpty {
                tmp = self.dfs(l1, l2, i1 + 1, i2, q, &pa, &ch)
            }
            res = tmp
        }
        ch[key] = res
        return res
    }
}
```