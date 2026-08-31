# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 12
**Link:** [https://leetcode.com/problems/avoid-flood-in-the-city/solutions/1165465/](https://leetcode.com/problems/avoid-flood-in-the-city/solutions/1165465/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranties of any kind. You can are to use the content as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func avoidFlood(_ rains: [Int]) -> [Int] {
        var res = [Int](repeating: -1, count: rains.count)
        var wat = [Int:[Int]](), flds = [Int]()
        for r in 0..<rains.count {
            let nth = rains[r]
            if nth == 0 {
                flds.append(r)
            } else {
                if wat[nth] == nil {
                    wat[nth] = [1,r]
                } else {
                    let dry = wat[nth]![1]
                    guard !flds.isEmpty, flds.last! > dry else { return [] }
                    for d in 0..<flds.count where flds[d] > dry {
                        res[flds[d]] = nth
                        flds.remove(at: d)
                        wat[nth]![1] = r
                        break
                    }
                }
            }
        }
        flds.forEach{ res[$0] = 1 }
        return res
    }
}
```

<hr>

<details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<pre>
Result: Executed 3 tests, with 0 failures (0 unexpected) in 0.024 (0.026) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.avoidFlood([1,2,3,4])
        XCTAssertEqual(value, [-1,-1,-1,-1])
    }
    
    func test1() {
        let value = solution.avoidFlood([1,2,0,0,2,1])
        XCTAssertEqual(value, [-1,-1,2,1,-1,-1])
    }
    
    func test2() {
        let value = solution.avoidFlood([1,2,0,1,2])
        XCTAssertEqual(value, [])
    }
}

Tests.defaultTestSuite.run()
```

</details>