# Swift solution 100% runtime and memory

**Author:** yamironov
**Votes:** 3
**Link:** [https://leetcode.com/problems/construct-string-from-binary-tree/solutions/448000/](https://leetcode.com/problems/construct-string-from-binary-tree/solutions/448000/)

---

Simple Swift solution
```
class Solution {
    func tree2str(_ t: TreeNode?) -> String {
        guard let t = t else {
            return ""
        }
        switch (t.left, t.right) {
            case (nil, nil):
                return "\\(t.val)"
            case (nil, _):
                return "\\(t.val)()(\\(tree2str(t.right)))"
            case (_, nil):
                return "\\(t.val)(\\(tree2str(t.left)))"
            default:
                return "\\(t.val)(\\(tree2str(t.left)))(\\(tree2str(t.right)))"
        }
    }
}
```