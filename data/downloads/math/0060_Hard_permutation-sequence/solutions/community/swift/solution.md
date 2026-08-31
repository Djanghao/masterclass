# ✅ [Solution] Swift: Permutation Sequence (+ test cases)

**Author:** AsahiOcean
**Votes:** 11
**Link:** [https://leetcode.com/problems/permutation-sequence/solutions/1738840/](https://leetcode.com/problems/permutation-sequence/solutions/1738840/)

---

```swift
class Solution {
    func getPermutation(_ n: Int, _ k: Int) -> String {
        var numbers = [Int](1...n)
        var k = k, factorial = 1, diff = n - 1, result = ""
        
        for i in 1..<n { factorial *= i }
        
        for _ in 0..<n {
            for (i, num) in numbers.enumerated() {
                if k > factorial {
                    k -= factorial
                } else {
                    result += String(num)
                    numbers.remove(at: i)
                    break
                }
            }
            if diff > 1 {
                factorial /= diff
                diff -= 1
            }
        }
        return result
    }
}
```

---

<p>
<details>
<summary>
<img src="https://git.io/JDblm" height="24">
<b>TEST CASES</b>
</summary>

<p><pre>
<b>Result:</b> Executed 3 tests, with 0 failures (0 unexpected) in 0.012 (0.014) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.getPermutation(3, 3)
        XCTAssertEqual(value, "213")
    }
    
    func test1() {
        let value = solution.getPermutation(4, 9)
        XCTAssertEqual(value, "2314")
    }
    
    func test2() {
        let value = solution.getPermutation(3, 1)
        XCTAssertEqual(value, "123")
    }
}

Tests.defaultTestSuite.run()
```

</details>
</p>