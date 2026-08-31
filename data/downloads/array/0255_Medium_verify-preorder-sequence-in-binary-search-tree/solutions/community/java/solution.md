# Java O(n) and O(1) extra space

**Author:** StefanPochmann
**Votes:** 521
**Link:** [https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/68142/](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/68142/)

---

**Solution 1**

Kinda simulate the traversal, keeping a stack of nodes (just their values) of which we're still in the left subtree. If the next number is smaller than the last stack value, then we're still in the left subtree of all stack nodes, so just push the new one onto the stack. But before that, pop all smaller ancestor values, as we must now be in their right subtrees (or even further, in the right subtree of an ancestor). Also, use the popped values as a lower bound, since being in their right subtree means we must never come across a smaller number anymore.

    public boolean verifyPreorder(int[] preorder) {
        int low = Integer.MIN_VALUE;
        Stack<Integer> path = new Stack();
        for (int p : preorder) {
            if (p < low)
                return false;
            while (!path.empty() && p > path.peek())
                low = path.pop();
            path.push(p);
        }
        return true;
    }

**Solution 2** ...  **O(1) extra space**

Same as above, but abusing the given array for the stack.

    public boolean verifyPreorder(int[] preorder) {
        int low = Integer.MIN_VALUE, i = -1;
        for (int p : preorder) {
            if (p < low)
                return false;
            while (i >= 0 && p > preorder[i])
                low = preorder[i--];
            preorder[++i] = p;
        }
        return true;
    }

**Solution 3** ...  **Python**

Same as solution 1, just in Python.

    def verifyPreorder(self, preorder):
        stack = []
        low = float('-inf')
        for p in preorder:
            if p < low:
                return False
            while stack and p > stack[-1]:
                low = stack.pop()
            stack.append(p)
        return True