# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/3225201/](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/3225201/)

---

```
class FindElements {
    
    private var s = Set<Int>()

    init(_ root: TreeNode?) {
        
        func rec(_ node: TreeNode? = root, _ val: Int = 0) {
            guard let node = node else { return }
            
            node.val = val
            s.insert(val)
            
            rec(node.left, 2 * val + 1)
            rec(node.right, 2 * val + 2)
        }
        
        rec()
    }
    
    func find(_ target: Int) -> Bool {
        s.contains(target)
    }
}
```