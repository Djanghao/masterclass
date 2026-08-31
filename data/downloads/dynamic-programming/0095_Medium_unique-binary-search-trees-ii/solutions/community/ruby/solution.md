# Solou

**Author:** kynguyen00710011999
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/6034002/](https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/6034002/)

---



# Code
```ruby []
# Definition for a binary tree node.
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val = 0, left = nil, right = nil)
        @val = val
        @left = left
        @right = right
    end
end

# @param {Integer} n
# @return {TreeNode[]}
def generate_trees(n)
    return [] if n == 0
    generate_trees_helper(1, n)
end

def generate_trees_helper(start, end_val)
    result = []
    
    if start > end_val
        result << nil
        return result
    end
    
    (start..end_val).each do |i|
        left_subtrees = generate_trees_helper(start, i - 1)
        right_subtrees = generate_trees_helper(i + 1, end_val)
        
        left_subtrees.each do |left|
            right_subtrees.each do |right|
                root = TreeNode.new(i)
                root.left = left
                root.right = right
                result << root
            end
        end
    end
    
    result
end
```