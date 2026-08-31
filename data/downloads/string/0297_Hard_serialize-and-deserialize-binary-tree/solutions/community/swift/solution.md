# Swift: Simple DFS Solution

**Author:** aluco100
**Votes:** 4
**Link:** [https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/1794333/](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/solutions/1794333/)

---

```
class Codec {
    func serialize(_ root: TreeNode?) -> String {
        if root == nil {
            return "null,"
        }
        let newNode = "\\(root?.val ?? 0)," + serialize(root?.left) + serialize(root?.right)
        return newNode
    }
    
    private func deserialize(_ queue: inout [String]) -> TreeNode? {
        let value = queue.removeFirst()
        if value == "null" {
            return nil
        }
        let node = TreeNode(Int(value) ?? 0)
        node.left = deserialize(&queue)
        node.right = deserialize(&queue)
        return node
    }
    
    func deserialize(_ data: String) -> TreeNode? {
        var queue: [String] = data.components(separatedBy: ",")
        return deserialize(&queue)
    }
}
```