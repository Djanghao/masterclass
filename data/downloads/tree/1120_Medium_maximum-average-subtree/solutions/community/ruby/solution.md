# Ruby 100th percentile time and space

**Author:** jonbirke0927
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/1593505/](https://leetcode.com/problems/maximum-average-subtree/solutions/1593505/)

---

```
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Float}
def maximum_average_subtree(root)
    do_maximum_average_subtree(root).last
end

def do_maximum_average_subtree(node)
    return [0, 0.0, 0.0] if node.nil?
    
    left_node_sum, left_node_count, left_max_avg = do_maximum_average_subtree(node.left)
    right_node_sum, right_node_count, right_max_avg = do_maximum_average_subtree(node.right)

    current_node_sum = node.val + left_node_sum + right_node_sum
    current_node_count = 1.0 + left_node_count + right_node_count
    current_average = current_node_sum / current_node_count
    
    new_max_avg = [left_max_avg, right_max_avg, current_average].max

    [current_node_sum, current_node_count, new_max_avg]
end
```