# ✅ [Solution] Swift: Next Greater Element II

**Author:** AsahiOcean
**Votes:** 3
**Link:** [https://leetcode.com/problems/next-greater-element-ii/solutions/1873961/](https://leetcode.com/problems/next-greater-element-ii/solutions/1873961/)

---

```swift
class Solution {
    func nextGreaterElements(_ nums: [Int]) -> [Int] {
        let len = nums.count
        var arr = Array(repeating: -1, count: len)
        var stack: [Int] = []
        for i in 0..<len*2 {
            while !stack.isEmpty, nums[stack.last!] < nums[i % len] {
                arr[stack.removeLast()] = nums[i % len]
            }
            stack.append(i % len)
        }
        return arr
    }
}
```

<hr>

<details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<pre>
Result: Executed 2 tests, with 0 failures (0 unexpected) in 0.016 (0.018) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {

    private let solution = Solution()
    
    // Explanation: The first 1's next greater number is 2;
    // The number 2 can't find next greater number.
    // The second 1's next greater number needs to search circularly, which is also 2.
    func test0() {
        let value = solution.nextGreaterElements([1,2,1])
        XCTAssertEqual(value, [2,-1,2])
    }
    
    func test1() {
        let value = solution.nextGreaterElements([1,2,3,4,3])
        XCTAssertEqual(value, [2,3,4,-1,4])
    }
}

Tests.defaultTestSuite.run()
```

</details>