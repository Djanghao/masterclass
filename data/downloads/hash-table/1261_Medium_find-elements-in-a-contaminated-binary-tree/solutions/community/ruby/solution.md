# Super Simple

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/5618620/](https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/solutions/5618620/)

---


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
class FindElements

=begin
    :type root: TreeNode
=end
    def initialize(root)
        @vals = Hash.new(false)
        if root
            @vals[0] = true
        end
        root.val = 0
        recover root
    end

    def recover node
        x = node.val
        if node.left
            val = 2 * x + 1
            @vals[val] = true
            node.left.val = val
            recover node.left
        end

        if node.right
            val = 2 * x + 2
            @vals[val] = true
            node.right.val = 2 * x + 2
            recover node.right
        end
    end


=begin
    :type target: Integer
    :rtype: Boolean
=end
    def find(target)
        @vals[target]
    end


end

# Your FindElements object will be instantiated and called as such:
# obj = FindElements.new(root)
# param_1 = obj.find(target)
```