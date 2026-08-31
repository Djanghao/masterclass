# Ruby recursive solution

**Author:** toshimaru
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/6035218/](https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/6035218/)

---

# Complexity
- Time complexity: $$O(\\log n)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(\\log n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```ruby []
def insert_into_bst(root, val)
    return TreeNode.new(val) if root.nil?

    if val < root.val
        root.left = insert_into_bst(root.left, val)
    else
        root.right = insert_into_bst(root.right, val)
    end

    root
end
```