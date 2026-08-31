# [Swift] two pointers solution

**Author:** muzle
**Votes:** 1
**Link:** [https://leetcode.com/problems/flatten-2d-vector/solutions/3053503/](https://leetcode.com/problems/flatten-2d-vector/solutions/3053503/)

---

# Code
```
class Vector2D {
    private var vec: [[Int]]
    private var (i, j) = (0, 0)

    init(_ vec: [[Int]]) {
        self.vec = vec
    }
    
    func next() -> Int {
        defer { j += 1 }
        guard hasNext() else { return -1 }
        return vec[i][j]
    }
    
    func hasNext() -> Bool {
        while i < vec.count {
            guard j < vec[i].count else {
                j = 0
                i += 1
                continue
            }
            return true
        }
        return false
    }
}

/**
 * Your Vector2D object will be instantiated and called as such:
 * let obj = Vector2D(vec)
 * let ret_1: Int = obj.next()
 * let ret_2: Bool = obj.hasNext()
 */
```