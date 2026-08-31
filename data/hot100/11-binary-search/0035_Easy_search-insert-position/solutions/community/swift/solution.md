# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 34
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/1320589/](https://leetcode.com/problems/search-insert-position/solutions/1320589/)

---

```swift
class Solution {
    func searchInsert(_ nums: [Int], _ target: Int) -> Int {
        var lhs = 0, rhs = nums.count
        while lhs < rhs {
            let mid = (lhs + rhs) / 2
            nums[mid] < target ? (lhs = mid + 1) : (rhs = mid)
        }
        return lhs
    }
}
```

<hr>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    private let nums = [1,3,5,6]
    
    func test0() {
        let value = solution.searchInsert(nums, 5)
        XCTAssertEqual(value, 2)
    }
    
    func test1() {
        let value = solution.searchInsert(nums, 2)
        XCTAssertEqual(value, 1)
    }
    
    func test2() {
        let value = solution.searchInsert(nums, 7)
        XCTAssertEqual(value, 4)
    }
}

Tests.defaultTestSuite.run()
```