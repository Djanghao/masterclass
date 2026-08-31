# Swift: Count Items Matching a Rule

**Author:** AsahiOcean
**Votes:** 14
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/1157730/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/1157730/)

---

```swift
class Solution {
    func countMatches(_ items: [[String]], _ ruleKey: String, _ ruleValue: String) -> Int {
        let rule = ruleKey == "type" ? 0 : (ruleKey == "color" ? 1 : 2)
        return items.reduce(0) { $0 + ($1[rule] == ruleValue ? 1 : 0)}
    }
}
```

```swift
import XCTest

// Executed 2 tests, with 0 failures (0 unexpected) in 0.009 (0.013) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func testExample1() {
        let items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]]
        XCTAssertEqual(s.countMatches(items, "color", "silver"), 1) // success
    }
    func testExample2() {
        let items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]]
        XCTAssertEqual(s.countMatches(items, "type", "phone"), 2) // success
    }
}

Tests.defaultTestSuite.run()
```