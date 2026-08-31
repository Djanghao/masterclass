# Swift: Maximum Subarray Sum with One Deletion + Test Cases

**Author:** AsahiOcean
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/1235031/](https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/solutions/1235031/)

---

##### Solution

```swift
class Solution {
    func maximumSum(_ arr: [Int]) -> Int {
        guard arr.count > 1 else { return arr[0] }
        var ans = arr[0], oneDel = 0, noDel = arr[0]
        for i in 1..<arr.count {
            oneDel = max(oneDel + arr[i], noDel)
            noDel = max(noDel + arr[i], arr[i])
            ans = max(oneDel, noDel,ans)
        }
        return ans
    }
}
```

##### Test cases

```swift
import XCTest

//      Executed 3 tests, with 0 failures (0 unexpected) in 0.005 (0.007) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func test1() {
        XCTAssertEqual(s.maximumSum([1,-2,0,3]), 4)
    }
    func test2() {
        XCTAssertEqual(s.maximumSum([1,-2,-2,3]), 3)
    }
    func test3() {
        XCTAssertEqual(s.maximumSum([-1,-1,-1,-1]), -1)
    }
}

Tests.defaultTestSuite.run()
```