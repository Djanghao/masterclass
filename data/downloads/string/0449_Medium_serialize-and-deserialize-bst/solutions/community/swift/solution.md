# Swift - Preorder with safety checks for a BST

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/5990947/](https://leetcode.com/problems/serialize-and-deserialize-bst/solutions/5990947/)

---

# Code
```swift []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init(_ val: Int) {
 *         self.val = val
 *         self.left = nil
 *         self.right = nil
 *     }
 * }
 */

class Codec {
    // Encodes a tree to a single string.
    let delimiter = ","
    let leaf = "#"
    func serialize(_ root: TreeNode?) -> String {
        guard let root = root else { return leaf }
        return "\\(root.val)" + delimiter + serialize(root.left) + delimiter + serialize(root.right)
    }
    
    // Decodes your encoded data to tree.
    func deserialize(_ data: String) -> TreeNode? {
        var queue = data.components(separatedBy: delimiter)
        return deserializeHelper(&queue, Int.min, Int.max)
    }

    private func deserializeHelper(_ queue: inout [String], _ low: Int, _ high: Int) -> TreeNode? {
        let value = queue.removeFirst()
        if value == leaf { return nil }
        guard let nodeVal = Int(value) else { return nil }
        if nodeVal < low && nodeVal > high { return nil } //safety checks for a valid BST
        var node = TreeNode(nodeVal)
        node.left = deserializeHelper(&queue, low, nodeVal)
        node.right = deserializeHelper(&queue, nodeVal, high)
        return node
    }
}

/**
 * Your Codec object will be instantiated and called as such:
 * let ser = Codec()
 * let deser = Codec()
 * let tree: String = ser.serialize(root)
 * let ans = deser.deserialize(tree)
 * return ans
*/
```