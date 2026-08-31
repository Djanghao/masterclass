# Should-be-6-Liner

**Author:** StefanPochmann
**Votes:** 194
**Link:** [https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/31495/](https://leetcode.com/problems/unique-binary-search-trees-ii/solutions/31495/)

---

If only LeetCode had a `TreeNode(val, left, right)` constructor... sigh. Then I wouldn't need to provide my own and my solution would be six lines instead of eleven.

    def generateTrees(self, n):
        def node(val, left, right):
            node = TreeNode(val)
            node.left = left
            node.right = right
            return node
        def trees(first, last):
            return [node(root, left, right)
                    for root in range(first, last+1)
                    for left in trees(first, root-1)
                    for right in trees(root+1, last)] or [None]
        return trees(1, n)

Or even just **four** lines, if it's not forbidden to add an optional argument:

    def node(val, left, right):
        node = TreeNode(val)
        node.left = left
        node.right = right
        return node
    
    class Solution:
        def generateTrees(self, last, first=1):
            return [node(root, left, right)
                    for root in range(first, last+1)
                    for left in self.generateTrees(root-1, first)
                    for right in self.generateTrees(last, root+1)] or [None]

Just another version, using loops instead of list comprehension:

    def generateTrees(self, n):
        def generate(first, last):
            trees = []
            for root in range(first, last+1):
                for left in generate(first, root-1):
                    for right in generate(root+1, last):
                        node = TreeNode(root)
                        node.left = left
                        node.right = right
                        trees += node,
            return trees or [None]
        return generate(1, n)