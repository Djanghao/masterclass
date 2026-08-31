# ✅ [Solution] Swift: Combination Sum (+ test cases)

**Author:** AsahiOcean
**Votes:** 36
**Link:** [https://leetcode.com/problems/combination-sum/solutions/1351862/](https://leetcode.com/problems/combination-sum/solutions/1351862/)

---

```swift
class Solution {
    func combinationSum(_ candidates: [Int], _ target: Int) -> [[Int]] {
        var comb: [Int] = [], uniqs: [[Int]] = []
        dfs(&uniqs, &comb, candidates.sorted(), target, 0)
        return uniqs
    }
    
    private func dfs(_ uniq: inout [[Int]], _ comb: inout [Int], _ cands: [Int], _ t: Int, _ idx: Int) {
        guard t > 0 else { uniq.append(comb); return }
        for i in idx..<cands.count where cands[i] <= t {
            comb.append(cands[i])
            dfs(&uniq, &comb, cands, t - cands[i], i)
            comb.removeLast()
        }
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
<b>Result:</b> Executed 5 tests, with 0 failures (0 unexpected) in 0.039 (0.041) seconds
</pre></p>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    /// 2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
    /// 7 is a candidate, and 7 = 7.
    /// These are the only two combinations.
    func test0() {
        let value = solution.combinationSum([2,3,6,7], 7)
        XCTAssertEqual(value, [[2,2,3],[7]])
    }
    func test1() {
        let value = solution.combinationSum([2,3,5], 8)
        XCTAssertEqual(value, [[2,2,2,2],[2,3,3],[3,5]])
    }
    func test2() {
        let value = solution.combinationSum([2], 1)
        XCTAssertEqual(value, [])
    }
    func test3() {
        let value = solution.combinationSum([1], 1)
        XCTAssertEqual(value, [[1]])
    }
    func test4() {
        let value = solution.combinationSum([1], 2)
        XCTAssertEqual(value, [[1,1]])
    }
}

Tests.defaultTestSuite.run()
```

</details>
</p>