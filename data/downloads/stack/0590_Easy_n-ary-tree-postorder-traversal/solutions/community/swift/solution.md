# Swift🔥1liner

**Author:** OrchidHunter
**Votes:** 4
**Link:** [https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/5691208/](https://leetcode.com/problems/n-ary-tree-postorder-traversal/solutions/5691208/)

---

**One-Liner (accepted answer)**
```
class Solution {
    func postorder(_ root: Node?) -> [Int] {
    	root == nil ? [] : root!.children.flatMap(postorder) + [root!.val]
    }
}
```