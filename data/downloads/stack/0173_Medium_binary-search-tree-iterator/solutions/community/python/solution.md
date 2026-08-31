# My solutions in 3 languages with Stack

**Author:** xcv58
**Votes:** 1013
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator/solutions/52525/](https://leetcode.com/problems/binary-search-tree-iterator/solutions/52525/)

---

I use Stack to store directed left children from root.
When next() be called, I just pop one element and process its right child as new root.
The code is pretty straightforward.

So this can satisfy O(h) memory, hasNext() in O(1) time,
But next() is O(h) time.

I can't find a solution that can satisfy both next() in O(1) time, space in O(h).

Java:

    public class BSTIterator {
        private Stack<TreeNode> stack = new Stack<TreeNode>();
        
        public BSTIterator(TreeNode root) {
            pushAll(root);
        }
    
        /** @return whether we have a next smallest number */
        public boolean hasNext() {
            return !stack.isEmpty();
        }
    
        /** @return the next smallest number */
        public int next() {
            TreeNode tmpNode = stack.pop();
            pushAll(tmpNode.right);
            return tmpNode.val;
        }
        
        private void pushAll(TreeNode node) {
            for (; node != null; stack.push(node), node = node.left);
        }
    }

C++:


    class BSTIterator {
        stack<TreeNode *> myStack;
    public:
        BSTIterator(TreeNode *root) {
            pushAll(root);
        }
    
        /** @return whether we have a next smallest number */
        bool hasNext() {
            return !myStack.empty();
        }
    
        /** @return the next smallest number */
        int next() {
            TreeNode *tmpNode = myStack.top();
            myStack.pop();
            pushAll(tmpNode->right);
            return tmpNode->val;
        }
    
    private:
        void pushAll(TreeNode *node) {
            for (; node != NULL; myStack.push(node), node = node->left);
        }
    };


Python:

    class BSTIterator:
        # @param root, a binary search tree's root node
        def __init__(self, root):
            self.stack = list()
            self.pushAll(root)
    
        # @return a boolean, whether we have a next smallest number
        def hasNext(self):
            return self.stack
    
        # @return an integer, the next smallest number
        def next(self):
            tmpNode = self.stack.pop()
            self.pushAll(tmpNode.right)
            return tmpNode.val
            
        def pushAll(self, node):
            while node is not None:
                self.stack.append(node)
                node = node.left