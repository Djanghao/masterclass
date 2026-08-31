# Evaluate + DFS

**Author:** votrubac
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/2186580/](https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/2186580/)

---

We will start with a simple DFS solution, and then improve it by adding an evaluation step.

We traverse the tree, and count how many operations it takes for a node to evalue to `res`. At some point, we realize that `XOR` operation is problematic. It causes branching, as we need to traverse each subtree twice (for true and false).

With a spark of intuition, we observe that it takes zero operations for a node to evaluate to true (or false), and non-zero - to false (or true). This observation beats TLE.

#### Simple Solution
**C++**
```cpp
int minimumFlips(TreeNode* n, bool res) {
    if (n->val < 2)
        return res != n->val;
    if (n->val == 5) // NOT
        return n->left != nullptr ? minimumFlips(n->left, !res) : minimumFlips(n->right, !res);
    if (n->val == 2) // OR
        return res ? min(minimumFlips(n->left, true), minimumFlips(n->right, true)) :
            minimumFlips(n->left, false) + minimumFlips(n->right, false);
    if (n->val == 3) // AND
        return res ? minimumFlips(n->left, true) + minimumFlips(n->right, true) :
            min(minimumFlips(n->left, false), minimumFlips(n->right, false));
    int lt = minimumFlips(n->left, true), lf = lt ? 0 : minimumFlips(n->left, false);
    int rt = minimumFlips(n->right, true), rf = rt ? 0 : minimumFlips(n->right, false);            
    return res ? min(lt + rf, lf + rt) : min(lt + rt, lf + rf);
} 
```
#### Adding Evaluation
The solution above is not O(n), as we still have branching: if, after evaluating a child for `true` the result is `zero`, we need to evaluate it for `false` again.

What we can do is to first evalute values of each node assuming no flips. When doing DFS, we can return zero if `res` equals to the "no-flips" node value.

With this approach, we evaluate the tree two times, and the C++ runtime goes down to 266 ms.

**C++**
```cpp
bool eval(TreeNode* n) {
    if (n == nullptr)
        return false;
    bool val = n->val, ev_l = eval(n->left), ev_r = eval(n->right);
    if (n->val > 1) // OR || AND || XOR || NOT
        val = n->val == 2 ? ev_l || ev_r : n->val == 3 ? ev_l && ev_r : 
            n->val == 4 ? ev_l ^ ev_r : n->left != nullptr ? !ev_l : !ev_r;
    n->val += val << 4;
    return val;
}
int dfs(TreeNode* n, bool res) {
    if (n == nullptr || res == (n->val >> 4)) // "no-flip" value from eval.
        return 0;
    int lt = dfs(n->left, true), lf = dfs(n->left, false);
    int rt = dfs(n->right, true), rf = dfs(n->right, false);
    switch(n->val & 7) {
        case 0:
        case 1:
            return 1;
        case 2: // OR
            return res ? min(lt, rt) : lf + rf;
        case 3: // AND
            return res ? lt + rt : min(lf, rf);
        case 4: // XOR
            return res ? min(lt + rf, lf + rt) : min(lt + rt, lf + rf);
        default: // NOT
            return n->left != nullptr ? (res ? lf : lt) : (res ? rf : rt);
    }
}
int minimumFlips(TreeNode* n, bool res) {
    eval(n);
    return dfs(n, res);
}
```