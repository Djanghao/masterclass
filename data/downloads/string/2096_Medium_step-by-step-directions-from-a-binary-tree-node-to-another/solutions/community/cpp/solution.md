# 💯✅🔥Detailed Easy Java ,Python3 ,C++ Solution|| 19 ms ||≧◠‿◠≦✌

**Author:** suyalneeraj09
**Votes:** 108
**Link:** [https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/5483149/](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/5483149/)

---

# Intuition

The problem requires finding the path from the root of the binary tree to the given start and destination nodes, and then constructing the directions to get from the start node to the destination node.

The key idea is to use a depth-first search (DFS) approach to find the paths from the root to the start and destination nodes, and then compare the paths to find the common prefix. The remaining parts of the paths are the directions needed to get from the start node to the destination node.

---
# Approach

1. Implement a helper function `find(TreeNode n, int val, StringBuilder sb)` that performs a DFS to find the path from the root to the node with the given value `val`. The function returns `true` if the node is found, and appends the direction (either "L" or "R") to the `StringBuilder` `sb`.

2. In the `getDirections` function, call the `find` function twice - once to find the path from the root to the start node, and once to find the path from the root to the destination node. Store the paths in `StringBuilder` objects `s` and `d`, respectively.

3. Find the common prefix between the two paths by iterating from the end of the paths and stopping when the characters at the corresponding positions are different.

4. Construct the final directions by prepending "U" (for "up") to the remaining part of the start path, and appending the remaining part of the destination path (in reverse order) to the common prefix.

---
# Time and Space Complexity

**Time Complexity:**
- The `find` function is called twice, each time performing a DFS traversal of the binary tree. The time complexity of the DFS is O(n), where n is the number of nodes in the tree.
- The comparison of the paths and construction of the final directions take O(min(m, n)) time, where m and n are the lengths of the start and destination paths, respectively.
- Therefore, the overall time complexity of the `getDirections` function is O(n).

---
**Space Complexity:**
- The `find` function uses a `StringBuilder` to store the path, which takes O(m) space, where m is the length of the path.
- The `getDirections` function uses two `StringBuilder` objects to store the start and destination paths, which takes O(m + n) space.
- Therefore, the overall space complexity of the `getDirections` function is O(m + n).
- 
---
# Step By Step Explanation

1. **The `getDirections` function is called with the root node of the binary tree, the start value (1), and the destination value (4).**

2. **Two `StringBuilder` objects are created to store the paths from the root to the start node and the destination node, respectively: `s` and `d`.**

3. **The `find` function is called with the root node (5), the start value (1), and the `StringBuilder` `s`.**
   - The root node's value (5) is compared with the start value (1). Since they don't match, the function returns `false`.
   - The `find` function is then recursively called with the left child of the root node (1) and the start value (1).

4. **The `find` function is called with the left child of the root node (1), the start value (1), and the `StringBuilder` `s`.**
   - The left child's value (1) is compared with the start value (1). Since they match, the function appends `"L"` to the `StringBuilder` `s` and returns `true`.

5. **The `find` function is called with the root node (5), the destination value (4), and the `StringBuilder` `d`.**
   - The root node's value (5) is compared with the destination value (4). Since they don't match, the function returns `false`.
   - The `find` function is then recursively called with the left child of the root node (1) and the destination value (4).

6. **The `find` function is called with the left child of the root node (1), the destination value (4), and the `StringBuilder` `d`.**
   - The left child's value (1) is compared with the destination value (4). Since they don't match, the function returns `false`.
   - The `find` function is then recursively called with the right child of the root node (2) and the destination value (4).

7. **The `find` function is called with the right child of the root node (2), the destination value (4), and the `StringBuilder` `d`.**
   - The right child's value (2) is compared with the destination value (4). Since they don't match, the function returns `false`.
   - The `find` function is then recursively called with the right child of the right child of the root node (4) and the destination value (4).

8. **The `find` function is called with the right child of the right child of the root node (4), the destination value (4), and the `StringBuilder` `d`.**
   - The right child's value (4) is compared with the destination value (4). Since they match, the function appends `"RR"` to the `StringBuilder` `d` and returns `true`.

9. **The paths from the root to the start node and the destination node have been found: `s = "L"` and `d = "RR"`.**

10. **The common prefix between the two paths is found by iterating from the end of the paths and stopping when the characters at the corresponding positions are different. In this case, the common prefix is empty, so `i = 0`.**

11. **The final directions are constructed by prepending `"U"` to the remaining part of the start path (`"L"`), and appending the remaining part of the destination path (`"RR"`) to the common prefix. The final directions are `"URR"`.**

12. **The `getDirections` function returns the final directions: `"URR"`.**

Here's the table summarizing the step-by-step execution:

| Step | Function Call | Node Value | Path | Return Value |
|------|---------------|------------|-------|--------------|
| 1 | `find(root, 1, s)` | 5 | - | `false` |
| 2 | `find(root.left, 1, s)` | 1 | `"L"` | `true` |
| 3 | `find(root, 4, d)` | 5 | - | `false` |
| 4 | `find(root.left, 4, d)` | 1 | `"L"` | `false` |
| 5 | `find(root.right, 4, d)` | 2 | `"R"` | `false` |
| 6 | `find(root.right.right, 4, d)` | 4 | `"RR"` | `true` |
| 7 | Comparing paths: `s = "L"`, `d = "RR"` | - | - | - |
| 8 | Finding common prefix: `i = 0` | - | - | - |
| 9 | Constructing final directions: `"U" + "RR"` | - | - | `"URR"` |

This table provides a clear and concise summary of the step-by-step execution of the code, making it easier to understand the logic and the flow of the solution.

---
```java []
class Solution {
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
}
```
```python3 []
class Solution:
    def getDirections(
        self, root: Optional[TreeNode], startValue: int, destValue: int
    ) -> str:
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
```C++ []
class Solution {
public:
    bool find(TreeNode* n, int val, string& path) {
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
};
```
```Pyhton3_optimized_code_by_datluu []
class Solution:
   def travel(self, node, target, path):
       if not node: return False
       if node.val == target: return True
       l = self.travel(node.left, target, path)
       r = self.travel(node.right, target, path)

       if l: path += ['L']
       if r: path += ['R']
       return l or r
       

   def getDirections(self, root: Optional[TreeNode], startValue: int, destValue: int) -> str:
       startPath, destPath = [], []
       self.travel(root, startValue, startPath)
       self.travel(root, destValue, destPath)

       while startPath and destPath and startPath[-1] == destPath[-1]:
           startPath.pop()
           destPath.pop()
       
       return "U" * len(startPath) + "".join(destPath[::-1])
``` 
---
![upvote.png](./images/0.png)

---

