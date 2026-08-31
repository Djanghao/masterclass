# Ruby Easy Solution

**Author:** SayamBar
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-quad-tree/solutions/3235379/](https://leetcode.com/problems/construct-quad-tree/solutions/3235379/)

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
# Definition for a QuadTree node.
# class Node
#     attr_accessor :val, :isLeaf, :topLeft, :topRight, :bottomLeft, :bottomRight
#     def initialize(val=false, isLeaf=false, topLeft=nil, topRight=nil, bottomLeft=nil, bottomRight=nil)
#         @val = val
#         @isLeaf = isLeaf
#         @topLeft = topLeft
#         @topRight = topRight
#         @bottomLeft = bottomLeft
#         @bottomRight = bottomRight
#     end
# end

# @param {Integer[][]} grid
# @return {Node}
def construct(grid)
    return tree(grid,0,0,grid.length)
end
def tree(grid,r,c,n)
    if same(grid,r,c,n)
        return Node.new(grid[r][c] == 1 ? true : false, true)
    end
    node = Node.new(true, false)
    node.topLeft = tree(grid,r,c,n/2)
    node.topRight = tree(grid,r,c+n/2,n/2)
    node.bottomLeft = tree(grid,r+n/2,c,n/2)
    node.bottomRight = tree(grid,r+n/2,c+n/2,n/2)
    return node
end
def same(grid,r,c,n)
    for i in r..r+n-1
        for j in c..c+n-1
            if grid[i][j] != grid[r][c]
                return false
            end
        end
    end
    return true
end
```