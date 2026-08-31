# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/1333685/](https://leetcode.com/problems/minimum-speed-to-arrive-on-time/solutions/1333685/)

---

```swift
class Solution {
    func minSpeedOnTime(_ d: [Int], _ h: Double) -> Int {
        let lnD = d.count, hour = Int(h.rounded(.up))
        guard hour >= lnD else { return -1 }
        let maxD = Double(d.last!), maxH = h == h.rounded(.down) ? 1.0 : (h - h.rounded(.down))
        var lhs = 1, rhs = hour > lnD ? d.max()! : max(d.max()!, Int((maxD / maxH).rounded(.up)))
        while lhs < rhs {
            let mid = Double((lhs + rhs) / 2)
            var time = 0.0
            for i in 0..<(lnD - 1) { time += (Double(d[i]) / mid).rounded(.up) }
            time += maxD / mid
            time > h ? (lhs = Int(mid + 1)) : (rhs = Int(mid))
        }
        return lhs
    }
}
```

<hr>

<details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<pre>
Result: Executed 3 tests, with 0 failures (0 unexpected) in 0.014 (0.016) seconds
</pre>

```swift
class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test0() {
        let value = solution.minSpeedOnTime([1,3,2], 6)
        XCTAssertEqual(value, 1)
    }
    
    func test1() {
        let value = solution.minSpeedOnTime([1,3,2], 2.7)
        XCTAssertEqual(value, 3)
    }
    
    func test2() {
        let value = solution.minSpeedOnTime([1,3,2], 1.9)
        XCTAssertEqual(value, -1)
    }
}

Tests.defaultTestSuite.run()
```

</details>