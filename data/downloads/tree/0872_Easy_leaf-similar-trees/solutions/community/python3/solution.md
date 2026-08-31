# Python 3   ||   5 lines, recursion,  w/ example   ||   T/S: 97% / 90%

**Author:** Spaulding_
**Votes:** 77
**Link:** [https://leetcode.com/problems/leaf-similar-trees/solutions/2889774/](https://leetcode.com/problems/leaf-similar-trees/solutions/2889774/)

---

Here's the plan: 
- For each tree, we traverse the tree left-to-right and record the values of the leaves into a list in the order encountered. 
- Return whether the two lists are identical.
```
class Solution:
    def leafSimilar(self, root1: TreeNode, root2: TreeNode) -> bool:

        def dfs(root):                              #     Example: 
                                                    #         root1:         root2:
                                                    #            ______3__             __3__
                                                    #           /         \\           /     \\
                                                    #          5__         1         5       1__
                                                    #         /   \\       / \\       / \\     /   \\
                                                    #       *6*    2    *9* *8*   *6* *7* *4*    2
                                                    #             / \\                           / \\
                                                    #           *7* *4*                       *9* *8*
                                                    #   root1:
            if not root: return []                  #       node      dfs(root.left)+dfs(root.right)
                                                    #       \u2013\u2013\u2013\u2013      \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013
            if not root.left and not root.right:    #        2              [7] + [4]   = [7,4]
                return [root.val]                   #        5              [6] + [7,4] = [6,7,4]
                                                    #        1              [9] + [8]   = [9,8]
            return dfs(root.left) + dfs(root.right) #        3          [6,7,4] + [9,8] = [6,7,4,9,8] <--
                                                    #
        return dfs(root1) == dfs(root2)             #   root2:
                                                    #       node      dfs(root.left)+dfs(root.right)
                                                    #       \u2013\u2013\u2013\u2013      \u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013\u2013
                                                    #        5            [6] + [7]     = [6,7]
                                                    #        2            [9] + [8]     = [9,8]
                                                    #        1            [4] + [9,8]   = [4,9,8]
                                                    #        3          [6,7] + [4,9,8] = [6,7,4,9,8] <--

                                                    #       Return True
```
[https://leetcode.com/problems/leaf-similar-trees/submissions/1272780528/](https://leetcode.com/problems/leaf-similar-trees/submissions/1272780528/)



I could be wrong, but I think that time is, worst case, *O*(*N*) and space is *O*(*N*), in which *N* ~ *maxnodes*(`tree1`, `tree2`)