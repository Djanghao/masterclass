# Multiple Ruby solutions with easy to understand approach

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-binary-search-tree/solutions/4143366/](https://leetcode.com/problems/recover-binary-search-tree/solutions/4143366/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Construct inorder traversal of the tree.
It should be an almost sorted list where only two elements are swapped.

2. Identify two swapped elements x and y in an almost sorted array
in linear time.

3. Traverse the tree again. Change value x to y and value y to x.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

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
# @param {TreeNode} root
# @return {Void} Do not return anything, modify root in-place instead.
def recover_tree(root)
    @nums = []
    @first_element = nil
    @second_element = nil

    inorder_traversal(root) # returns somewhat sorted array 
    # identify swapped nodes
    find_swapped
    # swap values of both the nodes
    @first_element.val, @second_element.val = @second_element.val, @first_element.val
end

def inorder_traversal(root)
    return if root.nil?

    inorder_traversal(root.left)
    @nums << root
    inorder_traversal(root.right)
end

def find_swapped
    (0...(@nums.length - 1)).each do |i|        
        if @nums[i].val > @nums[i + 1].val
            @second_element = @nums[i + 1]
            if @first_element.nil?
                @first_element = @nums[i]
            else
                break
            end
        end
    end
end
```
Combining steps 1 and 2 and implementing using iteration
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
# @return {Void} Do not return anything, modify root in-place instead.
def recover_tree(root)
    first_element = nil
    second_element = nil
    prev = nil

    # identify swapped nodes while performing inorder traversal
    queue = [] 
    while !queue.empty? || root
        while root
            queue << root
            root = root.left
        end

        root = queue.pop

        if prev && root.val < prev.val
            second_element = root
            if first_element.nil?
                first_element = prev
            else
                break
            end
        end
        prev = root

        root = root.right
    end
    
    # swap values of both the nodes
    first_element.val, second_element.val = second_element.val, first_element.val
end
```
Combining steps 1 and 2 and implementing using recursion
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
# @return {Void} Do not return anything, modify root in-place instead.
def recover_tree(root)
    @first_element = nil
    @second_element = nil
    @prev = nil

    # identify swapped nodes while performing inorder traversal
    find_swapped(root)
    # swap values of both the nodes
    @first_element.val, @second_element.val = @second_element.val, @first_element.val
end

def find_swapped(root)
    return if root.nil?

    find_swapped(root.left)

    if @prev && root.val < @prev.val
        @second_element = root
        if @first_element.nil?
            @first_element = @prev
        else
            return
        end
    end
    @prev = root

    find_swapped(root.right)
end
```