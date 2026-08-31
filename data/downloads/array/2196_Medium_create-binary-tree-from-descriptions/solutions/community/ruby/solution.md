# Ruby: two hashmaps

**Author:** frankbi322
**Votes:** 1
**Link:** [https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5019393/](https://leetcode.com/problems/create-binary-tree-from-descriptions/solutions/5019393/)

---

# Intuition
Set up two hashmaps:
A value/node hashmap to track whether we can reference an existing node or if we need to create a new one.
A parents hashmap to track each node's parent.

# Approach
Iterate through descriptions parameter and use the value/node hash to either find existing nodes or create new ones, and set the parent-left/right children relationships accordingly

Once done, do a set difference operation between the value/node hash values (all tree nodes) and the parents hash keys (all tree nodes with a parent). The set difference will yield the single node that doesn't have a parent, which is the root.

Ruby seems to return this as a nested array, so return the 0th index.

# Complexity
- Time complexity:
o(n) time, since we need to go through the entire tree once to set up the hashmaps.
- Space complexity:
o(n) for two hashmaps
# Code
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
# @param {Integer[][]} descriptions
# @return {TreeNode}
def create_binary_tree(descriptions)
    hash = Hash.new
    parents = Hash.new
    descriptions.each do |desc|
        root = find_or_create_node(hash, desc[0])
        child = find_or_create_node(hash, desc[1])
        if desc[2] == 1
            root.left = child
            parents[child] = root
        else
            root.right = child
            parents[child] = root
        end    
    end
    (hash.values - parents.keys)[0]
end

def find_or_create_node(hash, val)
    if hash[val]
        return hash[val]
    else
        node = TreeNode.new(val)
        hash[val] = node
        return node
    end    
end
```