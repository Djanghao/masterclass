# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 14
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/1154006/](https://leetcode.com/problems/jewels-and-stones/solutions/1154006/)

---

```swift
class Solution {
    func numJewelsInStones(_ j: String, _ s: String) -> Int {
        return s.filter({ j.contains($0) }).count
    }
}
```

<hr>

<details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<pre>
Result: Executed 2 tests, with 0 failures (0 unexpected) in 0.006 (0.008) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {

    private let solution = Solution()

    func test0() {
        let value = solution.numJewelsInStones("aA", "aAAbbbb")
        XCTAssertEqual(value, 3)
    }

    func test1() {
        let value = solution.numJewelsInStones("z", "ZZ")
        XCTAssertEqual(value, 0)
    }
}

Tests.defaultTestSuite.run()
```

</details>