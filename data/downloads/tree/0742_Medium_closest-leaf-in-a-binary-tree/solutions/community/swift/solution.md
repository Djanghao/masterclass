# Swift Easy to understand logic

**Author:** shubham_kamdi
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/1801769/](https://leetcode.com/problems/closest-leaf-in-a-binary-tree/solutions/1801769/)

---

```
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     public var val: Int
 *     public var left: TreeNode?
 *     public var right: TreeNode?
 *     public init() { self.val = 0; self.left = nil; self.right = nil; }
 *     public init(_ val: Int) { self.val = val; self.left = nil; self.right = nil; }
 *     public init(_ val: Int, _ left: TreeNode?, _ right: TreeNode?) {
 *         self.val = val
 *         self.left = left
 *         self.right = right
 *     }
 * }
 */


class Solution {
    func findClosestLeaf(_ root: TreeNode?, _ k: Int) -> Int {
        if root?.left == nil && root?.right == nil { return root!.val == k ? root!.val : -1}
        print(root!.val)
        var graph: Dictionary<Int, [TreeNode?]> = [:]
        func dfsGraph(_ parent: TreeNode?, _ root: TreeNode?) {
           
            if root == nil { return }
            graph[parent?.val ?? Int.max,default: []].append(root)
            graph[root!.val, default: []].append(parent)
            dfsGraph(root, root?.left)
            dfsGraph(root, root?.right)
        }
        dfsGraph(nil,root)
        var stack: [Int] = []
        var seen: Set<Int> = []
        for (node, _) in graph {
            if node == k { stack.append(node) ; seen.insert(node) }
        }
        while !stack.isEmpty {
            let node = stack.removeFirst()
            if graph[node]!.count <= 1 { return node }
            for sub in graph[node] ?? [] {
                if sub != nil && !seen.contains(sub!.val) { seen.insert(sub!.val) ; stack.append(sub!.val) }
            }
        }
        return -1
    }
}
```