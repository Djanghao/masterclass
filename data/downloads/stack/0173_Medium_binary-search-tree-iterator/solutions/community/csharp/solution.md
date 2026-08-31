# Simple inorder tree iterator using stack

**Author:** sunil20000
**Votes:** 3
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator/solutions/1595906/](https://leetcode.com/problems/binary-search-tree-iterator/solutions/1595906/)

---

```
    public class BSTIterator
    {
        Stack<TreeNode> st;
        public BSTIterator(TreeNode root)
        {
            st = new Stack<TreeNode>();
            PopulateStack(root);
        }

        private void PopulateStack(TreeNode root)
        {
            while (root != null)
            {
                st.Push(root);
                root = root.left;
            }
        }

        public int Next()
        {
            var root = st.Pop();
            var val = root.val;

            root = root.right;
            PopulateStack(root);
            return val;
        }

        public bool HasNext()
        {
            return st.Count() > 0;
        }
    }