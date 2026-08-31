# Python solution with comments (bottom-up).

**Author:** OldCodingFarmer
**Votes:** 60
**Link:** [https://leetcode.com/problems/count-univalue-subtrees/solutions/67646/](https://leetcode.com/problems/count-univalue-subtrees/solutions/67646/)

---

        
    def countUnivalSubtrees(self, root):
        self.count = 0
        self.checkUni(root)
        return self.count
    
    # bottom-up, first check the leaf nodes and count them, 
    # then go up, if both children are "True" and root.val is 
    # equal to both children's values if exist, then root node
    # is uniValue suntree node. 
    def checkUni(self, root):
        if not root:
            return True
        l, r = self.checkUni(root.left), self.checkUni(root.right)
        if l and r and (not root.left or root.left.val == root.val) and \\
        (not root.right or root.right.val == root.val):
            self.count += 1
            return True
        return False