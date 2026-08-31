# Swift DFS Solution

**Author:** alptekin35
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/485530/](https://leetcode.com/problems/all-elements-in-two-binary-search-trees/solutions/485530/)

---

```
class Solution {
    func getAllElements(_ root1: TreeNode?, _ root2: TreeNode?) -> [Int] {
        var res1:[Int] = []
        var res2:[Int] = []
        helper(root1, res: &res1)
        helper(root2, res: &res2)
        res1.append(contentsOf: res2)
        res1 = res1.sorted()
        return res1
    }
    
    func helper(_ root: TreeNode?, res: inout [Int]){
        guard let node = root else {
            return
        }
        helper(node.left, res: &res)
        res.append(node.val)
        helper(node.right, res: &res)
    }
}
```