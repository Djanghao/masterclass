# JS, Python, Java, C++ | Recursive DFS Solution w/ Explanation

**Author:** sgallivan
**Votes:** 15
**Link:** [https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1132676/](https://leetcode.com/problems/flip-binary-tree-to-match-preorder-traversal/solutions/1132676/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

In order to find out which nodes have to be flipped, we'll have navigate the binary tree from the root in a **pre-order traversal**, which is a form of **depth first search** (**DFS**), and compare the node values with the values in the voyage array (**V**).

As with most binary tree DFS solutions, the common solution will use a **recursive** approach. We can use top-level scoped answer array (**ans**) to store the flipped nodes as well as an index counter (**vix**) for the current index of **V** as we traverse through the binary tree.

For our recursive function (**dfs**), we'll need to first take care of the exit conditions when the recursive function reaches a null node or when we've already found a failure. Then, if the node value is not the one expected, we should set our answer to **[-1]**.

Since we'll need to have parent-level access when we decide on a necessary flip, we should take care of that now before calling the next round of recursion. We can simply check the left node value against the next index of **V**, and if they're not a match, we should account for the flip by updating **ans**.

Rather than actually flipping around nodes in the binary tree, however, we can simply simulate the flip by recursing the two branches in reverse order. Otherwise, we can proceed with normal pre-order traversal.

---

#### ***Implementation:***

Python doesn't deal as easily with top-level scoped variables, so we can just use the first element of our **ans** array as the **V** index (**vix**), and then pass a reference to **ans** in our recursive function.

---

#### ***Javascript Code:***

The best result for the code below is **72ms / 39.9MB** (beats 100% / 97%).
```javascript
const flipMatchVoyage = function (root, V) {
    let ans = [], vix = 0
    const dfs = node => {
        if (!node || ans[0] === -1) return
        if (node.val !== V[vix++]) ans = [-1]
        else if (node.left && node.left.val !== V[vix]) {
            ans.push(node.val)
            dfs(node.right)
            dfs(node.left)
        } else {
            dfs(node.left)
            dfs(node.right)
        }
    }
    dfs(root)
    return ans
};
```

---

#### ***Python Code:***

The best result for the code below is **24ms / 14.2MB** (beats 100% / 89%).
```python
class Solution:
    def flipMatchVoyage(self, root: TreeNode, V: List[int]) -> List[int]:
        ans = [0]
        def dfs(node, V, ans):
            if not node or ans[0] == -1: return
            if node.val != V[ans[0]]: ans[0] = -1
            else:
                ans[0] += 1
                if node.left and node.left.val != V[ans[0]]:
                    ans.append(node.val)
                    dfs(node.right, V, ans)
                    dfs(node.left, V, ans)
                else:
                    dfs(node.left, V, ans)
                    dfs(node.right, V, ans)
        dfs(root, V, ans)
        return ans[:1] if ans[0] == -1 else ans[1:]
```

---

#### ***Java Code:***

The best result for the code below is **0ms / 38.8MB** (beats 100% / 73%).
```java
class Solution {
    int vix = 0;
    List<Integer> ans = new ArrayList<>();
    private void dfs(TreeNode node, int[] V) {
        if (node == null || (ans.size() != 0 && ans.get(0) == -1)) return;
        if (node.val != V[vix++])
            ans = new ArrayList<Integer>(Arrays.asList(-1));
        else if (node.left != null && node.left.val != V[vix]) {
            ans.add(node.val);
            dfs(node.right, V);
            dfs(node.left, V);
        } else {
            dfs(node.left, V);
            dfs(node.right, V);
        }
    }
    public List<Integer> flipMatchVoyage(TreeNode root, int[] V) {
        dfs(root, V);
        return ans;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 13.9MB** (beats 100% / 37%).
```c++
class Solution {
    int vix = 0;
    vector<int> ans;
    void dfs(TreeNode* node, vector<int>& V) {
        if (!node || (ans.size() && ans[0] == -1)) return;
        if (node->val != V[vix++]) ans = {-1};
        else if (node->left && node->left->val != V[vix]) {
            ans.push_back(node->val);
            dfs(node->right, V);
            dfs(node->left, V);
        } else {
            dfs(node->left, V);
            dfs(node->right, V);
        }
    }
public:
    vector<int> flipMatchVoyage(TreeNode* root, vector<int>& V) {
        dfs(root, V);
        return ans;
    }
};
```