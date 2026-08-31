# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 47
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/1147500/](https://leetcode.com/problems/3sum-closest/solutions/1147500/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranty of any kind. You are free to use the content freely and as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func threeSumClosest(_ nums: [Int], _ target: Int) -> Int {
        
        let sorted = nums.sorted()
        let length = sorted.count
        
        var diff: Int = .max
        var result = 0
        
        for i in 0..<length - 2 {
            var n = i + 1, q = length - 1
            while n < q {
                let sum = sorted[i] + sorted[n] + sorted[q]
                
                sum > target ? (q -= 1) : (n += 1)
                
                let value =  abs(sum - target)
                
                if value < diff {
                    diff = value
                    result = sum
                }
            }
        }
        return result
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
<b>Result:</b> Executed 1 test, with 0 failures (0 unexpected) in 0.004 (0.006) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test() {
        let value = solution.threeSumClosest([-1,2,1,-4], 1)
        XCTAssertEqual(value, 2)
    }
}

Tests.defaultTestSuite.run()
```
</details>