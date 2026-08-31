# Swift | Trie

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3630860/](https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3630860/)

---

**Trie (accepted answer)**
```
class Solution {
    class TrieNode {
        var count = 0
        var children = [Int: TrieNode]()

        func add(_ elem: Int) -> TrieNode {
            children[elem] = children[elem, default:.init()]
            return children[elem]!
        }

        func instances(of sequence:[Int]) -> Int {
            var t = self
            for elem in sequence {
                guard let next = t.children[elem] else { return 0 }
                t = next
            }
            return t.count
        }
    }

    func equalPairs(_ grid: [[Int]]) -> Int {
        var root = TrieNode()
    
        for x in grid[0].indices {
            var t = root
            for y in grid.indices {
                t = t.add(grid[y][x])
            }
            t.count += 1
        }

        return grid.reduce(0) { result, row in result + root.instances(of: row) }
    }
}
```