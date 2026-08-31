# simple ruby sol

**Author:** rajrishav0711
**Votes:** 0
**Link:** [https://leetcode.com/problems/equal-tree-partition/solutions/913694/](https://leetcode.com/problems/equal-tree-partition/solutions/913694/)

---

```
def check_equal_tree(root)
  return false if !root
  
  @root = root
  @subtree_sums = []
  @sum_of_all_nodes = tree_sum(root)
  @subtree_sums.include?(@sum_of_all_nodes/2.0)
end

def tree_sum(node)
  return 0 if !node
    
  sum = node.val + tree_sum(node.left) + tree_sum(node.right)
  @subtree_sums << s.to_f if node != @root
  sum
end
```