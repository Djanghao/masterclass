# Swift: Longest Happy String + Test Cases

**Author:** AsahiOcean
**Votes:** 10
**Link:** [https://leetcode.com/problems/longest-happy-string/solutions/1235016/](https://leetcode.com/problems/longest-happy-string/solutions/1235016/)

---

```swift
class Solution {
    func longestDiverseString(_ a: Int, _ b: Int, _ c: Int) -> String {
        return helper(a, b, c, "a", "b", "c")
    }
    private func helper(_ a: Int, _ b: Int, _ c: Int, _ aa: Character,  _ bb : Character, _ cc: Character) -> String {
        guard a >= b else { return helper(b, a, c, bb, aa, cc) }
        guard b >= c else { return helper(a, c, b, aa, cc, bb) }
        guard b != 0 else { return String(repeating: aa, count: min(2, a)) }
        let useA = min(2, a)
        let useB = a - useA >= b ? 1 : 0
        return String(repeating: aa, count: useA) + String(repeating: bb, count: useB) + helper(a - useA, b - useB, c, aa, bb, cc)
    }
}
```

```swift
import XCTest

//      Executed 3 tests, with 0 failures (0 unexpected) in 0.004 (0.006) seconds

class Tests: XCTestCase {
    private let s = Solution()
    func test1() {
        XCTAssertEqual(s.longestDiverseString(1, 1, 7), "ccaccbcc")
    }
    func test2() {
        XCTAssertEqual(s.longestDiverseString(2, 2, 1), "aabbc")
    }
    func test3() {
        XCTAssertEqual(s.longestDiverseString(7, 1, 0), "aabaa")
    }
}

Tests.defaultTestSuite.run()
```