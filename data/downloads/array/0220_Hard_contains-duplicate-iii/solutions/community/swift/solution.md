# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 13
**Link:** [https://leetcode.com/problems/contains-duplicate-iii/solutions/1163715/](https://leetcode.com/problems/contains-duplicate-iii/solutions/1163715/)

---

```swift
class Solution {
    func containsNearbyAlmostDuplicate(_ nums: [Int], _ k: Int, _ t: Int) -> Bool {
        guard !nums.isEmpty else { return false }
        let ids = [Int](0..<nums.count).sorted{ nums[$0] < nums[$1] }
        
        for a in 0...ids.count - 1 {
            for b in (a + 1)..<nums.count {
                let lhs = ids[a], rhs = ids[b]
                if nums[rhs] - nums[lhs] > t { break }
                if abs(rhs - lhs) <= k { return true }
            }
        }
        return false
    }
}
```

<hr>

<details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<pre>
Result: Executed 1 test, with 0 failures (0 unexpected) in 0.004 (0.005) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test() {
        XCTAssertEqual(solution.containsNearbyAlmostDuplicate([1,2,3,1], 3, 0), true)
    }
}

Tests.defaultTestSuite.run()
```

</details>