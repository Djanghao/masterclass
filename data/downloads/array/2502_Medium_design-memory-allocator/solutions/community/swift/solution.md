# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-memory-allocator/solutions/3434826/](https://leetcode.com/problems/design-memory-allocator/solutions/3434826/)

---

```
class Allocator {

    private let n: Int
    private var allocs: [(Int, Int)]
    private var ids = [Int: [Int]]()

    init(_ n: Int) {
        self.n = n
        allocs = [(0, 0), (n, n)]
    }
    
    func allocate(_ size: Int, _ mID: Int) -> Int {
        let i = allocs.indices.first { $0 > 0 && allocs[$0].0 - allocs[$0 - 1].1 >= size }
        guard let i = i else { return -1 }

        for (k, v) in ids {
            ids[k] = v.map { ($0 < i) ? $0 : ($0 + 1) }
        }

        allocs.insert((allocs[i - 1].1, allocs[i - 1].1 + size), at: i)
        ids[mID, default: []].append(i)

        return allocs[i - 1].1
    }
    
    func free(_ mID: Int) -> Int {
        guard let inds = ids[mID], !inds.isEmpty else { return 0 }
        ids[mID] = nil
        var res = 0

        for i in inds.sorted(by: >) {
            res += allocs[i].1 - allocs[i].0
            allocs.remove(at: i)

            for (k, v) in ids {
                ids[k] = v.map { ($0 > i) ? ($0 - 1) : $0 }
            }
        }

        return res
    }
}
```