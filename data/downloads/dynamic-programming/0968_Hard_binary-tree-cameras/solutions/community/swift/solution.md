# ✅ [Accepted] Solution for Swift

**Author:** AsahiOcean
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-cameras/solutions/2160427/](https://leetcode.com/problems/binary-tree-cameras/solutions/2160427/)

---

<blockquote>
<b>Disclaimer:</b> By using any content from this post or thread, you release the author(s) from all liability and warranties of any kind. You can are to use the content as you see fit. Any suggestions for improvement are welcome and greatly appreciated! Happy coding!
</blockquote>

```swift
class Solution {
    func minCameraCover(_ root: TreeNode?) -> Int {
        func calc(_ node: TreeNode?) -> (Int, Int) {
            guard let node = node else { return (1, 0) }
            let lhs = calc(node.left), rhs = calc(node.right), pos = (lhs.0, rhs.0), len = lhs.1 + rhs.1
            return pos == (1,1) ? (3, len + 1) : pos == (3,3) ? (2, len - 1) : (max(lhs.0, rhs.0) - 1, len)
        }
        return calc(root).1
    }
}
```

* * *

```swift
public class TreeNode {
    public var val: Int
    public var left: TreeNode?
    public var right: TreeNode?
    public init() { self.val = 0; self.left = nil; self.right = nil; }
    public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
    public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
        self.val = val
        self.left = left
        self.right = right
    }
}
```