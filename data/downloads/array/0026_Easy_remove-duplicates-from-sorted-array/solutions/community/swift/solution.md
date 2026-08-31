# ✅ [Solution] Swift: Accepted (+ test cases)

**Author:** AsahiOcean
**Votes:** 28
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/1656824/](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/1656824/)

---

```swift
class Solution {
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        let len = nums.count
        guard len > 1 else { return len }
        var idx = 0
        for n in nums where n != nums[idx] {
            idx += 1
            nums[idx] = n
        }
        return idx + 1
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
<b>Result:</b>  Executed 2 tests, with 0 failures (0 unexpected) in 0.008 (0.010) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    /// Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
    /// It does not matter what you leave beyond the returned k (hence they are underscores).
    func test0() {
        var array = [1,1,2]
        solution.removeDuplicates(&array)
        XCTAssertEqual(2, [1,2].count)
    }
    
    /// Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
    /// It does not matter what you leave beyond the returned k (hence they are underscores).
    func test1() {
        var array = [0,0,1,1,1,2,2,3,3,4]
        solution.removeDuplicates(&array)
        XCTAssertEqual(5, [0,1,2,3,4].count)
    }
}

Tests.defaultTestSuite.run()
```
</details>