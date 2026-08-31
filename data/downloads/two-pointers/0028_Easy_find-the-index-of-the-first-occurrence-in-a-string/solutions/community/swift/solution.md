# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 23
**Link:** [https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/1656830/](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/solutions/1656830/)

---

```swift
class Solution {
    func strStr(_ haystack: String, _ needle: String) -> Int {
        guard let range = haystack.range(of: needle) else { return -1 }
        return haystack.distance(from: haystack.startIndex, to: range.lowerBound)
    }
}
```

---

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.strStr("hello", "ll")
        XCTAssertEqual(value, 2)
    }
    
    func test1() {
        let value = solution.strStr("aaaaa", "bba")
        XCTAssertEqual(value, -1)
    }
    
    func test2() {
        let value = solution.strStr("", "")
        XCTAssertEqual(value, 0)
    }
}

Tests.defaultTestSuite.run()
```