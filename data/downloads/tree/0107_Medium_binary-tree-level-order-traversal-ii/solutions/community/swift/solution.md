# ✅ Swift: Binary Tree Level Order Traversal II

**Author:** AsahiOcean
**Votes:** 21
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/1133018/](https://leetcode.com/problems/binary-tree-level-order-traversal-ii/solutions/1133018/)

---

**Make a more abbreviated version and send it to the comments
I will be glad to see your solution**

```swift
class Solution {
    func levelOrderBottom(_ root: TreeNode?) -> [[Int]] {
        guard let node = root else { return [] }
        var result = [[Int]](), tree = [node]
        while !tree.isEmpty {
            result.insert(tree.map { $0.val }, at: 0)
            tree = tree.flatMap { [$0.left, $0.right] }.compactMap{ $0 }
        }
        return result
    }
}
```

![](https://www.davidseek.com/content/images/2020/06/bstlevelordertraversal.gif)

#### Tests

```swift
import XCTest

class Tests: XCTestCase {
    
    private let s = Solution()
    
    func testExample1() {
        let tree = TreeNode([3,9,20,nil,nil,15,7])
        XCTAssertEqual(s.levelOrderBottom(tree), [[15,7],[9,20],[3]]) // good
    }
    
    func testExample2() {
        let tree = TreeNode([1])
        XCTAssertEqual(s.levelOrderBottom(tree), [[1]]) // good
    }
    
    func testExample3() {
        let tree = TreeNode([])
        XCTAssertEqual(s.levelOrderBottom(tree), []) // good
    }
}

Tests.defaultTestSuite.run()
```

#### TreeNode Class

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
    
    // Making an additional initializer from an array of integers
    public init?(_ array: [Int?]) {
        var values = array
        guard !values.isEmpty, let head = values.removeFirst() else { return nil }
        
        val = head; left = nil; right = nil
        
        var queue = [self]
        while !queue.isEmpty {
            let node = queue.removeFirst()
            if !values.isEmpty, let val = values.removeFirst() {
                node.left = TreeNode(val)
                queue.append(node.left!)
            }
            if !values.isEmpty, let val = values.removeFirst() {
                node.right = TreeNode(val)
                queue.append(node.right!)
            }
        }
    }
}
```