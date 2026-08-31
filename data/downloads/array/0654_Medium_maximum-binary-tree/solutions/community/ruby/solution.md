# Naive O(n^2) and Stack O(n) Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-binary-tree/solutions/5441502/](https://leetcode.com/problems/maximum-binary-tree/solutions/5441502/)

---

# O(n^2) Code
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
# @param {Integer[]} nums
# @return {TreeNode}
def construct_maximum_binary_tree(nums)
    @nodes_distributed = 0
    max_i = max_index nums
    @head = TreeNode.new(nums[max_i])
    @debug = []
    if max_i > 0
        build_tree nums[0..max_i - 1], @head, :left
    end

    if nums.size - 1 > max_i
        build_tree nums[max_i + 1..-1], @head, :right
    end
    
    @head
end

def build_tree nums, parent, direction
    max_i = max_index nums
    if max_i
        head = TreeNode.new(nums[max_i])
        if direction == :left
            parent.left = head
        else
            parent.right = head
        end

        if max_i > 0
            build_tree nums[0..max_i - 1], head, :left
        end

        if nums.size - 1 > max_i
            build_tree nums[max_i + 1..-1], head, :right
        end
    end
end



def max_index nums
    max_i = 0
    max = nums[0]
    i = 1
    while i < nums.size
        if nums[i] > max
            max = nums[i]
            max_i = i
        end

        i += 1
    end

    max_i
end
```

# O(n) Code

```
def construct_maximum_binary_tree(nums)
    stack = []
    nums.each do |num|
        node = TreeNode.new(num)
        while stack[-1] and stack[-1].val < num
            node.left = stack.pop
        end

        if stack[-1]
            stack[-1].right = node
        end

        stack << node
    end

    stack[0]
end
```