# 3 ways implemented in JAVA (Python): Binary Search, in-order iterative & recursive

**Author:** angelvivienne
**Votes:** 680
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/63660/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/63660/)

---

Binary Search (dfs): (edited 1/2019) this is NOT preferrable as in performance but since the quesiton is categorized with Binary Search tag, I was trying to solve it in that way.
- time complexity: O(N) best, O(N^2) worst

      public int kthSmallest(TreeNode root, int k) {
            int count = countNodes(root.left);
            if (k <= count) {
                return kthSmallest(root.left, k);
            } else if (k > count + 1) {
                return kthSmallest(root.right, k-1-count); // 1 is counted as current node
            }
            
            return root.val;
        }
        
        public int countNodes(TreeNode n) {
            if (n == null) return 0;
            
            return 1 + countNodes(n.left) + countNodes(n.right);
        }


DFS in-order recursive:
- time complexity: O(N)

        // better keep these two variables in a wrapper class
        private static int number = 0;
        private static int count = 0;

        public int kthSmallest(TreeNode root, int k) {
            count = k;
            helper(root);
            return number;
        }
        
        public void helper(TreeNode n) {
            if (n.left != null) helper(n.left);
            count--;
            if (count == 0) {
                number = n.val;
                return;
            }
            if (n.right != null) helper(n.right);
        }

DFS in-order iterative:
- time complexity: O(N) best

      public int kthSmallest(TreeNode root, int k) {
            Stack<TreeNode> st = new Stack<>();
            
            while (root != null) {
                st.push(root);
                root = root.left;
            }
                
            while (k != 0) {
                TreeNode n = st.pop();
                k--;
                if (k == 0) return n.val;
                TreeNode right = n.right;
                while (right != null) {
                    st.push(right);
                    right = right.left;
                }
            }
            
            return -1; // never hit if k is valid
      }

(edited: 7/2017)
**note: requirement has been changed a bit since last time I visited that the counting could be looked up frequently and BST itself could be altered (inserted/deleted) by multiple times, so that's the main reason that I stored them in an array.** 
```
class Solution(object):
    def kthSmallest(self, root, k):
        """
        :type root: TreeNode
        :type k: int
        :rtype: int
        """
        count = []
        self.helper(root, count)
        return count[k-1]
        
    def helper(self, node, count):
        if not node:
            return
        
        self.helper(node.left, count)
        count.append(node.val)
        self.helper(node.right, count)
```

DFS recursive, stop early when meet kth

```
def findNode(node, res):
            if len(res) > 1:
                return

            if node.left:
                findNode(node.left, res)

            res[0] -= 1
            if res[0] == 0:
                res.append(node.val)
                return
            
            if node.right:
                findNode(node.right, res)
                
        res = [k]
        findNode(root, res)
        return res[1]
```


Thanks again!