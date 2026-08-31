# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/snapshot-array/solutions/4656498/](https://leetcode.com/problems/snapshot-array/solutions/4656498/)

---

```
class SnapshotArray {

    private let len: Int
    private var cur = [Int: Int]()
    private var snaps = [[Int: Int]]()
    private var mapper = [Int]()
    private var modified = true

    init(_ length: Int) {
        len = length
    }
    
    func set(_ index: Int, _ val: Int) {
        cur[index] = val
        modified = true
    }
    
    func snap() -> Int {
        if modified {
            snaps.append(cur)
        }
        mapper.append(snaps.count - 1)
        modified = false
        return mapper.count - 1
    }
    
    func get(_ index: Int, _ snap_id: Int) -> Int {
        let snap = snaps[mapper[snap_id]]
        var res = 0

        for (i, v) in snap
            where i == index {
                res = v
            }
        
        return res
    }
}
```