# Easy O(N) dfs traversal solution

**Author:** be_fighter
**Votes:** 27
**Link:** [https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/solutions/5905494/](https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree/solutions/5905494/)

---


# Approach
# Base Case:

1. If the root is NULL, it returns {true, 0}. This indicates that an empty subtree is considered perfect and its size is 0.
# Recursive Calls:

The function recursively checks the left and right subtrees by calling make_tree(root->left) and make_tree(root->right), storing the results in l and r.
# Check for Perfect Subtree:

If both left (l.first) and right (r.first) subtrees are perfect (true) and their sizes (l.second and r.second) are equal, it confirms that the current subtree rooted at root is also perfect.
# Calculate Subtree Size:

The size of this perfect subtree is calculated as l.second + r.second + 1 (1 for the root, and the sum of left and right subtree sizes).
# Store the Result:

The size s is added to the ans vector to track all perfect subtree sizes.
# Return:

The function returns {true, s}, indicating that this subtree is perfect and its size is s.
If the subtree is not perfect, it returns {false, 0}.

# Complexity
- Time complexity:
O(Nlogn)

- Space complexity:
O(N)

# Code
```cpp []
class Solution {
public:
    vector<int>ans;
    pair<bool,int>make_tree(TreeNode* root){
        if(root==NULL){
            return {true,0};
        }

        pair<bool,int>l=make_tree(root->left);
        pair<bool,int>r=make_tree(root->right);

        if(l.first && r.first && l.second==r.second ){
            int s=l.second+r.second+1;
            ans.push_back(s);
            return {true,s};
        }

        return {false,0};
    }
    int kthLargestPerfectSubtree(TreeNode* root, int k) {

        if(root==NULL){
            return -1;
        }
        ans.clear();
        make_tree(root);

        sort(ans.begin(),ans.end(),greater<int>());

        if(ans.size()>=k){
            return ans[k-1];
        }
        return -1;
    }
};
```
```java []
import java.util.*;

class Solution {
    List<Integer> ans = new ArrayList<>();

    // Method to recursively check for perfect subtree and calculate its size
    public Pair<Boolean, Integer> makeTree(TreeNode root) {
        if (root == null) {
            return new Pair<>(true, 0);
        }

        Pair<Boolean, Integer> l = makeTree(root.left);
        Pair<Boolean, Integer> r = makeTree(root.right);

        if (l.getKey() && r.getKey() && l.getValue().equals(r.getValue())) {
            int s = l.getValue() + r.getValue() + 1;
            ans.add(s);
            return new Pair<>(true, s);
        }

        return new Pair<>(false, 0);
    }

    public int kthLargestPerfectSubtree(TreeNode root, int k) {
        if (root == null) {
            return -1;
        }

        ans.clear();
        makeTree(root);

        Collections.sort(ans, Collections.reverseOrder());

        if (ans.size() >= k) {
            return ans.get(k - 1);
        }

        return -1;
    }

}

```
```python []
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def __init__(self):
        self.ans = []

    def make_tree(self, root):
        if root is None:
            return (True, 0)

        l = self.make_tree(root.left)
        r = self.make_tree(root.right)

        if l[0] and r[0] and l[1] == r[1]:
            s = l[1] + r[1] + 1
            self.ans.append(s)
            return (True, s)

        return (False, 0)

    def kthLargestPerfectSubtree(self, root, k):
        if root is None:
            return -1

        self.ans.clear()
        self.make_tree(root)

        self.ans.sort(reverse=True)

        if len(self.ans) >= k:
            return self.ans[k - 1]
        return -1

```
```javascript []
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    constructor() {
        this.ans = [];
    }

    // Function to recursively check and calculate perfect subtree size
    makeTree(root) {
        if (root === null) {
            return [true, 0];
        }

        let l = this.makeTree(root.left);
        let r = this.makeTree(root.right);

        if (l[0] && r[0] && l[1] === r[1]) {
            let s = l[1] + r[1] + 1;
            this.ans.push(s);
            return [true, s];
        }

        return [false, 0];
    }

    kthLargestPerfectSubtree(root, k) {
        if (root === null) {
            return -1;
        }

        this.ans = [];
        this.makeTree(root);

        this.ans.sort((a, b) => b - a);

        if (this.ans.length >= k) {
            return this.ans[k - 1];
        }
        return -1;
    }
}

```
![c2d27b08-ffbe-4bc6-8b29-5fc4d8effd5f_1723775276.9029489.jpeg](./images/0.jpeg)

