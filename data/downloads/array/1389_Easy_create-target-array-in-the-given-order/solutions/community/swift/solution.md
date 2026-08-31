# Swift: Create Target Array in the Given Order

**Author:** AsahiOcean
**Votes:** 12
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/1157746/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/1157746/)

---

```swift
class Solution {
    func createTargetArray(_ nums: [Int], _ index: [Int]) -> [Int] {
        var res = [Int]()
        for i in 0..<nums.count { res.insert(nums[i], at: index[i]) }
        return res
    }
}
```


```swift
import XCTest

//     Executed 3 tests, with 0 failures (0 unexpected) in 0.008 (0.011) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func testExample1() {
        XCTAssertEqual(s.createTargetArray([0,1,2,3,4],[0,1,2,2,1]), [0,4,1,3,2]) // success
    }
    func testExample2() {
        XCTAssertEqual(s.createTargetArray([1,2,3,4,0],[0,1,2,3,0]), [0,1,2,3,4]) // success
    }
    func testExample3() {
        XCTAssertEqual(s.createTargetArray([1],[0]), [1]) // success
    }
}

Tests.defaultTestSuite.run()
```