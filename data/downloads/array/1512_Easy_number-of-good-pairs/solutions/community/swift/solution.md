# Swift: Number of Good Pairs

**Author:** AsahiOcean
**Votes:** 16
**Link:** [https://leetcode.com/problems/number-of-good-pairs/solutions/1154018/](https://leetcode.com/problems/number-of-good-pairs/solutions/1154018/)

---

```swift
class Solution {
    func numIdenticalPairs(_ nums: [Int]) -> Int {
        var res = 0, map = [Int:Int]()
        nums.forEach {
            res += map[$0] ?? 0
            map[$0,default: 0] += 1
        }
        return res
    }
}
```
```swift
import XCTest

// Executed 3 tests, with 0 failures (0 unexpected) in 0.031 (0.033) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func test0() {
        XCTAssertEqual(s.numIdenticalPairs([1,2,3,1,1,3]), 4)
    }
    func test1() {
        XCTAssertEqual(s.numIdenticalPairs([1,1,1,1]), 6)
    }
    func test2() {
        XCTAssertEqual(s.numIdenticalPairs([1,2,3]), 0)
    }
}

Tests.defaultTestSuite.run()
```
