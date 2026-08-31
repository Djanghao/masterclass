# ✅ [Solution] Swift

**Author:** AsahiOcean
**Votes:** 1
**Link:** [https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/1863845/](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/solutions/1863845/)

---

```swift
class Solution {
    func findRotation(_ mat: [[Int]], _ target: [[Int]]) -> Bool {
        guard mat != target else { return true }
        
        let len = mat.count
        var row = 0, col = 0
        var _mat = mat, rotate = 0
        
        while rotate < 3 {
            let temp = _mat
            row = 0
            while row < len {
                while col < len {
                    _mat[col][len - 1 - row] = temp[row][col]
                    col += 1
                }
                row += 1
                col = 0
            }
            rotate += 1
            if _mat == target { return true }
        }
        return false
    }
}
```

<hr>

<details>
<summary><b>TEST CASES</b></summary>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    // We can rotate mat 90 degrees clockwise to make mat equal target.
    func test0() {
        let value = solution.findRotation([[0,1],[1,0]],
                                          [[1,0],[0,1]])
        XCTAssertEqual(value, true)
    }
    
    // It is impossible to make mat equal to target by rotating mat.
    func test1() {
        let value = solution.findRotation([[0,1],[1,1]],
                                          [[1,0],[0,1]])
        XCTAssertEqual(value, false)
    }
    
    // We can rotate mat 90 degrees clockwise two times to make mat equal target.
    func test2() {
        let value = solution.findRotation([[0,0,0],[0,1,0],[1,1,1]],
                                          [[1,1,1],[0,1,0],[0,0,0]])
        XCTAssertEqual(value, true)
    }
}

Tests.defaultTestSuite.run()
```

</details>