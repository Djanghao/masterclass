# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 26
**Link:** [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/1651676/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/1651676/)

---

```swift
class Solution {
    func searchRange(_ nums: [Int], _ t: Int) -> [Int] {
        var arr = [-1,-1]
        if nums.isEmpty { return arr }
        
        var lhs = 0, rhs = nums.count - 1
        
        while lhs < rhs {
            let mid = lhs + (rhs - lhs) / 2
            nums[mid] < t ? (lhs = mid + 1) : (rhs = mid)
        }
        
        guard nums[lhs] == t else { return arr }
        arr[0] = lhs
        
        rhs = nums.count - 1
        while lhs < rhs {
            let mid = lhs + (rhs - lhs) / 2 + 1
            nums[mid] > t ? (rhs = mid - 1) : (lhs = mid)
        }
        arr[1] = lhs
        return arr
    }
}
```

---

<details>
<summary>
<img src="https://git.io/JDblm" height="24">
<b>TEST CASES</b>
</summary>

<pre>
<b>Result:</b> Executed 3 tests, with 0 failures (0 unexpected) in 0.009 (0.011) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.searchRange([5,7,7,8,8,10], 8)
        XCTAssertEqual(value, [3,4])
    }
    
    func test1() {
        let value = solution.searchRange([5,7,7,8,8,10], 6)
        XCTAssertEqual(value, [-1,-1])
    }
    
    func test2() {
        let value = solution.searchRange([], 0)
        XCTAssertEqual(value, [-1,-1])
    }
}

Tests.defaultTestSuite.run()
```

</details>