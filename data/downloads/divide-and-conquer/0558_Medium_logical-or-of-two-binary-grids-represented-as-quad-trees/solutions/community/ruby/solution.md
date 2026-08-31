# 87 ms 100%

**Author:** tee0zed
**Votes:** 0
**Link:** [https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/solutions/4114032/](https://leetcode.com/problems/logical-or-of-two-binary-grids-represented-as-quad-trees/solutions/4114032/)

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

# @param {Node} quadTree1
# @param {Node} quadTree2
# @return {Node}

def intersect(quadTree1, quadTree2)
	if quadTree1.isLeaf
    quadTree1.val ? quadTree1 : quadTree2
  elsif quadTree2.isLeaf
    quadTree2.val ? quadTree2 : quadTree1
  else
    quad = [
      intersect(quadTree1.topLeft, quadTree2.topLeft), 
      intersect(quadTree1.topRight, quadTree2.topRight), 
      intersect(quadTree1.bottomLeft, quadTree2.bottomLeft), 
      intersect(quadTree1.bottomRight, quadTree2.bottomRight)
    ]

    is_leaf = quad.all?(&:isLeaf)
    same_vals = quad.uniq(&:val).size == 1

    args = if is_leaf && same_vals
      [true, true]
    else
      [quad.first.val, false] + quad
    end

    Node.new(*args)
  end
end

```