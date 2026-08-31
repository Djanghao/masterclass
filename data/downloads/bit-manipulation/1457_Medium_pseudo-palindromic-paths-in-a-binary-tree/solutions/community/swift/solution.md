# Swift solution with Set

**Author:** Blinnikov
**Votes:** 2
**Link:** [https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/2574250/](https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/2574250/)

---

If a path is pseudo-palindromic it has at most one odd number of repetitive node values.

*For example, [5,6,6,7,6,6,5] has two `5`s, four `6`s and one `7` - 2 even numbers (2 and 4) and 1 odd. Only one odd number - hence this path is pseudo-palindromic.*

To keep number of repetitive values we use stack. 
On each traverse step we add node to the stack or remove it if the stack already contains this value. When we remove node - that means we have an even number of that value.
And at the end we check stack size. If the path under consideration contains only even numbers of values, stack size must be equal to zero. Otherwise, stack size will be equal to the number of repetitive odd values along the path. Since, only one odd number is allowed, we check stack size to be equal to one in OR branch.

```
class Solution {

    private var paths = 0
    
    func pseudoPalindromicPaths (_ root: TreeNode?) -> Int {
        guard let root = root else {
            return -1
        }
        
        var set = Set<Int>()
        traverse(root, set)
        return paths
    }
    
    private func traverse(_ node: TreeNode, _ set: Set<Int>) {
        var set = set
        if set.contains(node.val) {
            set.remove(node.val)
        } else {
            set.insert(node.val)
        }
        
        if node.left == nil && node.right == nil {
            if set.count == 0 || set.count == 1 {
                paths += 1
            }
            return
        }
        
        if let left = node.left {
            traverse(left, set)
        }
        
        if let right = node.right {
            traverse(right, set)
        }
    }
}
```