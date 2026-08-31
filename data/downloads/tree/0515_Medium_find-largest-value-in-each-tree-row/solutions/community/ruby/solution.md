# ruby - easy BFS, cpu 100%

**Author:** el777
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/4204587/](https://leetcode.com/problems/find-largest-value-in-each-tree-row/solutions/4204587/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The easiest way - to walk row by row and find max value in each row.

# Approach
<!-- Describe your approach to solving the problem. -->
Use BFS.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ - each node is visited once

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(log n)$$ - for each row we keep one value, number of rows =  tree height ~ log n.

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
# @return {Integer[]}
def largest_values(root)
    return [] if root == nil

    mm = Array.new

    define_method :row do |roots|
        return if roots.empty?

        m = roots[0].val
        newRoots = Array.new
        roots.each do |root|
            if root.left != nil
                newRoots << root.left
            end

            if root.right != nil
                newRoots << root.right
            end

            if root.val > m
                m = root.val
            end
        end

        mm << m

        row(newRoots)
    end

    row([root])

    mm
end


```