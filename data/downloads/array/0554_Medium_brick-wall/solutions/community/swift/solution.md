# Swift: Brick Wall + Test Cases

**Author:** AsahiOcean
**Votes:** 5
**Link:** [https://leetcode.com/problems/brick-wall/solutions/1314060/](https://leetcode.com/problems/brick-wall/solutions/1314060/)

---

```swift
class Solution {
    func leastBricks(_ wall: [[Int]]) -> Int {
        var path = [Int:Int]()
        for row in wall {
            var index = 0
            for i in (0..<row.count-1) {
                index += row[i]
                path[index, default: 0] += 1
            }
        }
        let result = wall.count - path.reduce(0) { max($0, $1.1)}
        return result
    }
}
```

```swift
import XCTest

//      Executed 2 tests, with 0 failures (0 unexpected) in 0.006 (0.007) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func test1() {
        let result = s.leastBricks([[1,2,2,1],[3,1,2],[1,3,2],[2,4],[3,1,2],[1,3,1,1]])
        XCTAssertEqual(result, 2)
    }
    func test2() {
        let result = s.leastBricks([[1],[1],[1]])
        XCTAssertEqual(result, 3)
    }
}

Tests.defaultTestSuite.run()
```