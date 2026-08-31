# [Swift] DFS Solution

**Author:** alptekin35
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/495484/](https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/495484/)

---

```
class Solution {
    func largestValues(_ root: TreeNode?) -> [Int] {
        var result:[Int] = []
        helper(root, &result, 0)
        return result
    }
    
    func helper(_ root: TreeNode?, _ result:inout[Int], _ depth:Int){
        guard let node = root else { return }
        if result.count > depth{
            result[depth] = max(result[depth], node.val)
        }else{
            result.append(node.val)
        }
        helper(node.left, &result, depth+1)
        helper(node.right, &result, depth+1)
    }
}
```