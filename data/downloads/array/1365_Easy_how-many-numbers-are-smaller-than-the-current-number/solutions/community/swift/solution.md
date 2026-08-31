# Swift: How Many Numbers Are Smaller Than the Current Number

**Author:** AsahiOcean
**Votes:** 10
**Link:** [https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/1153982/](https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/1153982/)

---

### Solution:
```swift
class Solution {
    func smallerNumbersThanCurrent(_ nums: [Int]) -> [Int] {
        var counts = Array(repeating: 0, count: 101), arr = counts, sum = 0
        nums.map{ counts[$0] += 1 }
        
        for i in 1...counts.count - 1 {
            sum += counts[i-1]
            arr[i] = sum
        }
        
        var ans = Array(repeating: 0, count: nums.count)
        for i in 0..<nums.count { ans[i] = arr[nums[i]]}
        return ans
    }
}
```

### Tests:
```swift
import XCTest

// Executed 3 tests, with 0 failures (0 unexpected) in 0.097 (0.098) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func testExample1() {
        XCTAssertEqual(s.smallerNumbersThanCurrent([8,1,2,2,3]), [4,0,1,1,3]) // success
    }
    func testExample2() {
        XCTAssertEqual(s.smallerNumbersThanCurrent([6,5,4,8]), [2,1,0,3]) // success
    }
    func testExample3() {
        XCTAssertEqual(s.smallerNumbersThanCurrent([7,7,7,7]), [0,0,0,0]) // success
    }
}

Tests.defaultTestSuite.run()
```