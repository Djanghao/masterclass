# ruby - recursion

**Author:** saravananselvamani
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/3282124/](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/3282124/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {ListNode} head
# @return {TreeNode}
def construct_tree(nodes)
    return nil if nodes.empty?
    middle = nodes.length / 2
    left = construct_tree(nodes[0...middle])
    right = construct_tree(nodes[(middle + 1) .. -1])
    node = TreeNode.new(nodes[middle], left, right)
    node
end

def sorted_list_to_bst(head)
    nodes = []
    node = head
    while(!node.nil?)
        nodes << node.val
        node = node.next
    end
    construct_tree(nodes)
end
```