# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 8
**Link:** [https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/1248002/](https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/1248002/)

---

```swift
class Solution {
    func searchBST(_ root: TreeNode?, _ val: Int) -> TreeNode? {
        guard let root = root else { return nil }
        return val == root.val ? root : searchBST(val < root.val ? root.left : root.right, val)
    }
}
```

<hr>

<details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<pre>
Result: Executed 2 tests, with 0 failures (0 unexpected) in 0.059 (0.061) seconds
</pre>

```swift
import XCTest

class Tests: XCTestCase {
    
    private let solution = Solution()
    
    func test1() {
        let tree = solution.searchBST(TreeNode([4,2,7,1,3]), 2)
        XCTAssertEqual(tree?.val, TreeNode([2,1,3])?.val)
    }
    
    func test2() {
        let tree = solution.searchBST(TreeNode([4,2,7,1,3]), 5)
        XCTAssertEqual(tree?.val, TreeNode([])?.val)
    }
}
```

</details>