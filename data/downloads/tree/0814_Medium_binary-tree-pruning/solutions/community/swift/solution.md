# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 2
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/2180305/](https://leetcode.com/problems/binary-tree-pruning/solutions/2180305/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranties of any kind. You can are to use the content as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func pruneTree(_ root: TreeNode?) -> TreeNode? {
        guard let root = root else { return nil }
        typealias TN = TreeNode
        func isNull(_ v: Int, _ l: TN?, _ r: TN?) -> Bool { return v == 0 && l == nil && r == nil }
        guard !isNull(root.val, root.left, root.right) else { return nil }
        let lhs = pruneTree(root.left), rhs = pruneTree(root.right)
        guard !isNull(root.val, lhs, rhs) else { return nil }
        (root.left,root.right) = (lhs,rhs)
        return root
    }
}
```

<p><details>
<summary><img src="https://git.io/JDblm" height="24"> <b>TEST CASES</b></summary>

<p><pre>
Result: Executed 3 tests, with 0 failures (0 unexpected) in 0.020 (0.022) seconds
</pre></p>

```swift
class Tests {
    
    private typealias sol = Solution
    private typealias TN = TreeNode
    
    // Only the red nodes satisfy the property "every subtree not containing a 1".
    // The diagram on the right represents the answer.
    static func testExample1() {
        let val = sol().pruneTree(TN([1,nil,0,0,1]))
        print(val?.val == TN([1,nil,0,nil,1])?.val)
    }
    
    static func testExample2() {
        let val = sol().pruneTree(TN([1,0,1,0,0,0,1]))
        print(val?.val == TN([1,nil,1,nil,1])?.val)
    }
    
    static func testExample3() {
        let val = sol().pruneTree(TN([1,1,0,1,1,0,1,0]))
        print(val?.val == TN([1,1,0,1,1,nil,1])?.val)
    }
}

Tests.testExample1()
Tests.testExample2()
Tests.testExample3()
```
</details></p>