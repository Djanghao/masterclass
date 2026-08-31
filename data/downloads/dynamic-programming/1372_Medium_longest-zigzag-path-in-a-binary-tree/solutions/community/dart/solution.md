# fastest Dart solution, iterative instead of recursive DFS using a stack

**Author:** Dartist
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/5014301/](https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/solutions/5014301/)

---

# Approach
A recursive solution would have worked perfect but with Dart I got a stack overflow. So I had to convert the simple recursive solution to an interative one by using a simple stack. I used the new Dart 3 records feature and destructuring. This also allows the type of the 3 parameters (TreeNode, bool, int) to stay static instead of dynamic.

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
class Solution {
  int zigZagCount = 0;
  static const left = false, right = true;
  int longestZigZag(TreeNode? root) {
    List<(TreeNode?, bool, int)> stack = [];

    stack.add((root?.right, right, 1));
    stack.add((root?.left, left, 1));

    while (stack.isNotEmpty) {
      var (node, direction, count) = stack.removeLast();
      if (node == null) continue;
      zigZagCount = max(zigZagCount, count);
      stack.add((node.left, left, direction == left ? 1 : count + 1));
      stack.add((node.right, right, direction == left ? count + 1 : 1));
    }
    return zigZagCount;
  }
}
```