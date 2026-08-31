# Python Easy Iterative and Recursive Solution

**Author:** girikuncoro
**Votes:** 222
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/63829/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/63829/)

---

Recursive:

    def kthSmallest(self, root, k):
        self.k = k
        self.res = None
        self.helper(root)
        return self.res
    
    def helper(self, node):
        if not node:
            return
        self.helper(node.left)
        self.k -= 1
        if self.k == 0:
            self.res = node.val
            return
        self.helper(node.right)


Iterative:

    def kthSmallest(root, k):
        stack = []
        while root or stack:
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            k -= 1
            if k == 0:
                return root.val
            root = root.right