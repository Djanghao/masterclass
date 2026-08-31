# Python very easy to understand DFS/Bottom-up Solution using Sets - O(n) time

**Author:** iahouma
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/1182525/](https://leetcode.com/problems/count-univalue-subtrees/solutions/1182525/)

---

Each node is either a leaf or the root of a subtree. The set of values in a given subtree is the union of three sets: 
1. The set of values of its left subtree.
2. The set of values of its right subtree
3. The set consisting only of the subtree's root.

Once we get the union of the three sets, we simply check that its length is equal to 1 in order to know if the subtree is a univalue or not. If this is the case, we increment the count.


    def countUnivalSubtrees(self, root: TreeNode) -> int:
        self.count = 0
        
        def dfs(node, acc):
            if not node:
                return acc
            left = dfs(node.left, acc)
            right = dfs(node.right, acc)
            acc = left.union(right)
            acc.add(node.val)
            self.count += (len(acc) == 1)
            
            return acc
        
        dfs(root, set())
        
        return self.count