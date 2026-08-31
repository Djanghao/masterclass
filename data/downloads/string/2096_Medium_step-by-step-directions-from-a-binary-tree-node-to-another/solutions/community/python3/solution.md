# 3 Steps

**Author:** votrubac
**Votes:** 896
**Link:** [https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/1612105/](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/1612105/)

---

1. Build directions for both start and destination from the root.
	- Say we get "LLRRL" and "LRR".
2. Remove common prefix path.
	- We remove "L", and now start direction is "LRRL", and destination - "RR"
3. Replace all steps in the start direction to "U" and add destination direction.
	- The result is "UUUU" + "RR".

**C++**
Here, we build path in the reverse order to avoid creating new strings.

```cpp
bool find(TreeNode* n, int val, string &path) {
    if (n->val == val)
        return true;
    if (n->left && find(n->left, val, path))
        path.push_back('L');
    else if (n->right && find(n->right, val, path))
        path.push_back('R');
    return !path.empty();
}
string getDirections(TreeNode* root, int startValue, int destValue) {
    string s_p, d_p;
    find(root, startValue, s_p);
    find(root, destValue, d_p);
    while (!s_p.empty() && !d_p.empty() && s_p.back() == d_p.back()) {
        s_p.pop_back();
        d_p.pop_back();
    }
    return string(s_p.size(), 'U') + string(rbegin(d_p), rend(d_p));
}
```
**Java**
```java
private boolean find(TreeNode n, int val, StringBuilder sb) {
    if (n.val == val) 
        return true;
    if (n.left != null && find(n.left, val, sb))
        sb.append("L");
    else if (n.right != null && find(n.right, val, sb))
        sb.append("R");
    return sb.length() > 0;
}
public String getDirections(TreeNode root, int startValue, int destValue) {
    StringBuilder s = new StringBuilder(), d = new StringBuilder();
    find(root, startValue, s);
    find(root, destValue, d);
    int i = 0, max_i = Math.min(d.length(), s.length());
    while (i < max_i && s.charAt(s.length() - i - 1) == d.charAt(d.length() - i - 1))
        ++i;
    return "U".repeat(s.length() - i) + d.reverse().toString().substring(i);
}
```
**Python 3**
Lists in Python are mutable and passed by a reference.

```python
class Solution:
    def getDirections(self, root: Optional[TreeNode], startValue: int, destValue: int) -> str:
        def find(n: TreeNode, val: int, path: List[str]) -> bool:
            if n.val == val:
                return True
            if n.left and find(n.left, val, path):
                path += "L"
            elif n.right and find(n.right, val, path):
                path += "R"
            return path
        s, d = [], []
        find(root, startValue, s)
        find(root, destValue, d)
        while len(s) and len(d) and s[-1] == d[-1]:
            s.pop()
            d.pop()
        return "".join("U" * len(s)) + "".join(reversed(d))
```