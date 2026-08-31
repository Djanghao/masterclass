# 🔥 BEATS 100% | DFS | ✅ [ C++ / Java / Py / JS / GO / C / C# ]

**Author:** Neoni_77
**Votes:** 11
**Link:** [https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5173334/](https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5173334/)

---


```C++ []
class Solution {
private:
    int traverse (TreeNode* root, int& ans) {
        if(root==NULL) return 0;
        int coins = root->val + traverse (root->left, ans) + traverse (root->right, ans);
        coins--;
        ans += abs(coins);
        return coins;
    }
public:
    int distributeCoins(TreeNode* root) {
        int ans = 0;
        traverse (root, ans);
        return ans;
    }
};
```

```python []
class Solution:
    def distributeCoins(self, root: TreeNode) -> int:
        def traverse(node: TreeNode) -> int:
            if not node:
                return 0
            left_excess = traverse(node.left)
            right_excess = traverse(node.right)
            total_excess = node.val + left_excess + right_excess - 1
            self.moves += abs(total_excess)
            return total_excess

        self.moves = 0
        traverse(root)
        return self.moves
```
```Java []
class Solution {
    private int moves;

    private int traverse(TreeNode node) {
        if (node == null) return 0;
        int leftExcess = traverse(node.left);
        int rightExcess = traverse(node.right);
        int totalExcess = node.val + leftExcess + rightExcess - 1;
        moves += Math.abs(totalExcess);
        return totalExcess;
    }

    public int distributeCoins(TreeNode root) {
        moves = 0;
        traverse(root);
        return moves;
    }
}

```
```C []
int traverse(struct TreeNode* root, int* ans) {
    if (root == NULL) return 0;
    int leftExcess = traverse(root->left, ans);
    int rightExcess = traverse(root->right, ans);
    int totalExcess = root->val + leftExcess + rightExcess - 1;
    *ans += abs(totalExcess);
    return totalExcess;
}

int distributeCoins(struct TreeNode* root) {
    int ans = 0;
    traverse(root, &ans);
    return ans;
}

```
```C# []
public class Solution {
    private int moves;

    private int Traverse(TreeNode node) {
        if (node == null) return 0;
        int leftExcess = Traverse(node.left);
        int rightExcess = Traverse(node.right);
        int totalExcess = node.val + leftExcess + rightExcess - 1;
        moves += Math.Abs(totalExcess);
        return totalExcess;
    }

    public int DistributeCoins(TreeNode root) {
        moves = 0;
        Traverse(root);
        return moves;
    }
}

```
```Javascript []
var distributeCoins = function(root) {
    let moves = 0;

    function traverse(node) {
        if (node === null) return 0;
        let leftExcess = traverse(node.left);
        let rightExcess = traverse(node.right);
        let totalExcess = node.val + leftExcess + rightExcess - 1;
        moves += Math.abs(totalExcess);
        return totalExcess;
    }

    traverse(root);
    return moves;
};
```
```Go []
func distributeCoins(root *TreeNode) int {
    var moves int

    var traverse func(node *TreeNode) int
    traverse = func(node *TreeNode) int {
        if node == nil {
            return 0
        }
        leftExcess := traverse(node.Left)
        rightExcess := traverse(node.Right)
        totalExcess := node.Val + leftExcess + rightExcess - 1
        moves += abs(totalExcess)
        return totalExcess
    }

    traverse(root)
    return moves
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}
```
**NOTE: THE FOLLOWING IMPLEMENTATION BEATS 100% IN C++ .. DON'T KNOW ABOUT OTHER CODES** 
```
UPVOTE\u2B06\uFE0F IF IT HELPED\uD83D\uDE0A
```
