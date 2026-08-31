# 🟢Easy Python BFS and Ruby DFS Solution with explanation 🚀🚀🚀

**Author:** mitchell000
**Votes:** 0
**Link:** [https://leetcode.com/problems/even-odd-tree/solutions/4804721/](https://leetcode.com/problems/even-odd-tree/solutions/4804721/)

---

# Video (BFS)
https://youtu.be/M7_cJm2hE8s

# Approach
BFS & DFS

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```Python-BFS []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isEvenOddTree(self, root: Optional[TreeNode]) -> bool:
        queue = deque()
        current = root
        queue.append(current)

        level_even = True

        while queue:
            size = len(queue)
            prev = maxsize
            if level_even:
                prev = -maxsize
            
            while size > 0:
                current = queue.popleft()

                if (level_even and (current.val%2 == 0 or current.val <= prev)) or \\
                    (not level_even and (current.val%2 == 1 or current.val >= prev)) :
                    return False

                prev = current.val
                if current.left:
                    queue.append(current.left)
                if current.right:
                    queue.append(current.right)
                size -= 1
            level_even = not level_even

        return True

```
```Ruby-DFS []
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
# @return {Boolean}

def is_even_odd_tree(root)
    @prev = []

    def dfs(current, level)
        # Base case, an empty tree is Even-Odd
        return true if current.nil?

        # Compare the parity of current and level
        return false if current.val.even? == level.even?

        # Add a new level to prev if we've reached a new level
        while @prev.length <= level
            @prev.push(0)
        end

        # If there are previous nodes on this level, check increasing/decreasing
        # If on an even level, check that current's value is greater than the previous on this level
        # If on an odd level, check that current's value is less than the previous on this level
        if @prev[level] != 0 &&
            ((level.even? && current.val <= @prev[level]) ||
            (level.odd? && current.val >= @prev[level]))
            return false
        end

        # Add current value to prev at index level
        @prev[level] = current.val

        # Recursively call DFS on the left and right children
        dfs(current.left, level + 1) && dfs(current.right, level + 1)
    end

    current = root
    dfs(current, 0)
end
```