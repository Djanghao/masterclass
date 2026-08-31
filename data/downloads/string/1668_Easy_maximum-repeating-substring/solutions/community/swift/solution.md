# ⚡️ Swift: Maximum Repeating Substring (+ Test Cases)

**Author:** AsahiOcean
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-repeating-substring/solutions/1381592/](https://leetcode.com/problems/maximum-repeating-substring/solutions/1381592/)

---

```swift
class Solution {
    func maxRepeating(_ sequence: String, _ word: String) -> Int {
        let max = sequence.count / word.count
        guard max > 0 else { return 0 }
        var result = 0
        for count in 1...max where sequence.contains(String(repeating: word, count: count)) {
            result = count
        }
        return result
    }
}
```

```swift
import XCTest

// Executed 3 tests, with 0 failures (0 unexpected) in 0.014 (0.016) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func test0() {
        let res = s.maxRepeating("ababc","ab")
        XCTAssertEqual(res, 2)
    }
    func test1() {
        let res = s.maxRepeating("ababc","ba")
        XCTAssertEqual(res, 1)
    }
    func test2() {
        let res = s.maxRepeating("ababc","ac")
        XCTAssertEqual(res, 0)
    }
}

Tests.defaultTestSuite.run()
```