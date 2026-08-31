# ✅ [Solution] Swift: Majority Element (+ test cases)

**Author:** AsahiOcean
**Votes:** 21
**Link:** [https://leetcode.com/problems/majority-element/solutions/1242079/](https://leetcode.com/problems/majority-element/solutions/1242079/)

---

```swift
class Solution {
    func majorityElement(_ nums: [Int]) -> Int {
        var candidate = 0, vote = 0
        nums.forEach { n in
            if vote == 0 { candidate = n }
            vote += n == candidate ? 1 : -1
        }
        return candidate
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
        let value = solution.majorityElement([3,2,3])
        XCTAssertEqual(value, 3)
    }
    
    func test1() {
        let value = solution.majorityElement([2,2,1,1,1,2,2])
        XCTAssertEqual(value, 2)
    }
}

Tests.defaultTestSuite.run()
```

</details>