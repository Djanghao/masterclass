# Kth Largest And Kth Smallest Element : C++ / Java / Python / Kotlin

**Author:** here_iAm
**Votes:** 3
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/4150867/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/4150867/)

---

# Intuition
So, the intuition is very straight forward, we need to traverse the given Binary Search Tree and find the kth **Smallest** and **Largest** element in it.

There are a couple of ways of doing this.

**TIME & SPACE Complexity is discussed below in detail**

<br>
<hr>

# Kth Smallest Element :
- We iterate over the given BST and maintain a counter variable for finding the Kth smallest guy and increment or decrement the counter variable till it reaches k or 0 respectively.

<br>

# Kth Largest Element :
- To find kth largest guy, we need to do one more traversal to find the total number of nodes in our Binary Search Tree.
- Once we get the total nodes, we perform exact algorithm of **Kth smallest element** problem but instead of passing `k` as the target count, we will be passing `n - k + 1` as the target count.
- Since kth guy in a **Sorted container** is the `(n - k + 1)`th guy from the end of the container. **Right? Yes, indeed.**

<hr>

# Explanation
- First we create a function which iterates over any Tree (Binary Tree or Binary Seach Tree) in most efficient way. Yes, we are talking about Morris Traversal, which does the work in `O(n) time and O(1) space`.
- Also, in this function, we will maintain `two variables` first is the ***answer for kth smallest element*** and the second is the ***total number of nodes in the BST***.
- Now, this helper Morris function can be directly called for `Kth Smallest Element problem`.
- For `Kth Largest Element problem` we call this helper Morris function `two times`. First, to count the total number of nodes and secondly, to find the `Kth Largest Element` or we can say to find the `(N-k+1)th Smallest Element`

<hr>

```C++ []
/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    pair<int,int> morris(TreeNode* cur, int k){
        int ans=0, cnt=0;
        while(cur){
            // there is no left child so cur is the root
            if(cur->left == NULL){
                k--;
                cnt++;
                cur = cur->right;
            }
            else{
                // create a thread by going right most node in left subtree
                TreeNode *prev = cur->left;
                while(prev->right && prev->right != cur){
                    prev = prev->right;
                }
                // two cases arise:
                // 1. thread not created i.e. prev->right == NULL
                if(prev->right == NULL){
                    prev->right = cur; // creating thread
                    cur = cur->left;
                }
                // 2. thread already created i.e. left subtree is already visited, move right
                else{
                    prev->right = NULL;
                    k--;
                    cnt++;
                    cur = cur->right;
                }
            }
            if(k==1) ans = cur->val;
        }
        return {ans,cnt};
    }

    int inorder(TreeNode* root, int k) {
        if(k==1 && !root->left) return root->val;
        auto pr = morris(root, k);
        return pr.first;
    }

    int kthSmallest(TreeNode* root, int k) {
        return inorder(root, k);
    }

    int kthLargest(TreeNode* root, int k){
        auto pr = morris(root,k);
        int newK = pr.second - k + 1;
        return inorder(root, newK);
    }
};


```

```java []
/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
public class Solution {
    private Pair<Integer, Integer> morris(TreeNode cur, int k) {
        int ans = 0, cnt = 0;
        while (cur != null) {
            if (cur.left == null) {
                k--;
                cnt++;
                cur = cur.right;
            } else {
                TreeNode prev = cur.left;
                while (prev.right != null && prev.right != cur) {
                    prev = prev.right;
                }
                if (prev.right == null) {
                    prev.right = cur;
                    cur = cur.left;
                } else {
                    prev.right = null;
                    k--;
                    cnt++;
                    cur = cur.right;
                }
            }
            if (k == 1) ans = cur.val;
        }
        return new Pair<>(ans, cnt);
    }

    private int inorder(TreeNode root, int k) {
        if (k == 1 && root.left == null) return root.val;
        Pair<Integer, Integer> pr = morris(root, k);
        return pr.getKey();
    }

    public int kthSmallest(TreeNode root, int k) {
        return inorder(root, k);
    }

    public int kthLargest(TreeNode root, int k) {
        Pair<Integer, Integer> pr = morris(root, k);
        int newK = pr.getValue() - k + 1;
        return inorder(root, newK);
    }
}


```
```Kotlin []
/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */

class Solution {
    private fun morris(cur: TreeNode?, kk: Int): Pair<Int, Int> {
        var ans = 0
        var cnt = 0
        var k = kk
        var current = cur
        while (current != null) {
            if (current.left == null) {
                k--
                cnt++
                current = current.right
            } else {
                var prev = current.left
                while (prev?.right != null && prev.right != current) {
                    prev = prev.right
                }
                if (prev?.right == null) {
                    prev?.right = current
                    current = current?.left
                } else {
                    prev.right = null
                    k--
                    cnt++
                    current = current?.right
                }
            }
            if (k == 1) ans = current?.`val` ?: 0
        }
        return Pair(ans, cnt)
    }

    private fun inorder(root: TreeNode?, k: Int): Int {
        if (k == 1 && root?.left == null) return root?.`val` ?: 0
        val pr = morris(root, k)
        return pr.first
    }

    fun kthSmallest(root: TreeNode?, k: Int): Int {
        return inorder(root, k)
    }

    fun kthLargest(root: TreeNode?, k: Int): Int {
        val pr = morris(root, k)
        val newK = pr.second - k + 1
        return inorder(root, newK)
    }
}


```
``` Python []
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def morris(self, cur, k):
        ans, cnt = 0, 0
        while cur:
            if not cur.left:
                k -= 1
                cnt += 1
                cur = cur.right
            else:
                prev = cur.left
                while prev.right and prev.right != cur:
                    prev = prev.right
                if not prev.right:
                    prev.right = cur
                    cur = cur.left
                else:
                    prev.right = None
                    k -= 1
                    cnt += 1
                    cur = cur.right
            if k == 1:
                ans = cur.val
        return ans, cnt

    def inorder(self, root, k):
        if k == 1 and not root.left:
            return root.val
        ans, _ = self.morris(root, k)
        return ans

    def kthSmallest(self, root, k):
        return self.inorder(root, k)

    def kthLargest(self, root, k):
        ans, cnt = self.morris(root, k)
        newK = cnt - k + 1
        return self.inorder(root, newK)


```

<br>

# Approaches
`SOLUTION 1` - Recursion :
Time Complexity  : O(n + nlogn) - any traversal + sorting the stored node-values
Space Complexity : O(n + n) - recursion stack space and stored node-values

`SOLUTION 2` - Recursion :
Time Complexity  : O(n) - inorder traversal
Space Complexity : O(n + n) - recursion stack space and maintaing the stored node-values vector

`SOLUTION 3` - Iterative :
Time Complexity  : O(n + nlogn) - any traversal + sorting the stored node-values
Space Complexity : O(n) - maintaing the stored node-values vector

`SOLUTION 4` - Iterative :
Time Complexity  : O(n) - inorder traversal
Space Complexity : O(n) - maintaing the stored node-values vector

`SOLUTION 5` - Iterative : **MOST OPTIMAL SOLUTION**
Time Complexity  : O(n) - Morris traversal
Space Complexity : O(1) - maintaining the counter variable


// NOTE THAT : For kth largest element in a BST, we need to traversal's one for counting the number of nodes and one for morris traversal.



<br>
<hr>

***Also note the edge case, where we have only one node in the tree and we are required to return 1st largest or 1st smallest element, which is itself the only node. So this case needs to be taken care of.***

<hr>

**PLEASE UPVOTE IF YOU LIKED THE SOLUTION**
