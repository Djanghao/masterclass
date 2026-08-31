# Recursive and Iterative solutions with index counter

**Author:** UpTheHell
**Votes:** 4
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/3248913/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/3248913/)

---

# Intuition
two solutios with index counter so we can stop when we find the kth smallest element.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
Recursive Solution

```
class Solution {
    func kthSmallest(_ root: TreeNode?, _ k: Int) -> Int {
        var index = 0
        guard let node = inorderTraverse(root, k, &index) else {
            return 0
        }
        return node.val
    }

    func inorderTraverse(_ node: TreeNode?, _ k: Int, _ index: inout Int) -> TreeNode? {
        guard let node = node else {
            return nil
        }

        if let targetNode = inorderTraverse(node.left, k, &index) {
            return targetNode
        }

        index += 1
        if index == k {
            return node
        }

        return inorderTraverse(node.right, k, &index)
    }
}
```


Iterarive solution
```
class Solution {
    func kthSmallest(_ root: TreeNode?, _ k: Int) -> Int {
        var stack = [ TreeNode? ]()
        var index = 0
        var curNode = root
        while !stack.isEmpty || curNode != nil {
            while curNode != nil {
                stack.append(curNode)
                curNode = curNode?.left
            }

            curNode = stack.removeLast()
            index += 1
            if index == k {
                break
            }
            curNode = curNode?.right
        }

        return curNode?.val ?? 0
    }
}
```