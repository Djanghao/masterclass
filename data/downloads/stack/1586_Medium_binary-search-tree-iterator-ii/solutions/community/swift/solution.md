# Swift

**Author:** achoas
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/4327551/](https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/4327551/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: N
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: N
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class BSTIterator {

    var arr: [Int]
    var p = -1

    init(_ root: TreeNode?) {
       arr = .init() 
       func dfs(_ root: TreeNode?) {
           guard let node = root else { return }
           dfs(node.left)
           arr.append(node.val)
           dfs(node.right)
       }
       dfs(root)
    }
    
    func hasNext() -> Bool {
        p < arr.count - 1
    }
    
    func next() -> Int {
        p += 1
        return arr[p]
    }
    
    func hasPrev() -> Bool {
        p > 0 
    }
    
    func prev() -> Int {
        p -= 1
        return arr[p] 
    }
}

```