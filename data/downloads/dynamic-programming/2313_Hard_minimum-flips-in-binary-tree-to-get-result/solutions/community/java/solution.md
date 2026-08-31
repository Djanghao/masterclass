# easy readable java code.

**Author:** murmur76
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/5819036/](https://leetcode.com/problems/minimum-flips-in-binary-tree-to-get-result/solutions/5819036/)

---

# Code
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
class Solution {
    boolean[][] pairs = {
        { true, true },
        { true, false },
        { false, true },
        { false, false }
    };
    List<BiFunction<Boolean, Boolean, Boolean>> funcs = List.of(
        (a, b) -> a || b,
        (a, b) -> a && b,
        (a, b) -> a ^ b
    );

    public int minimumFlips(TreeNode root, boolean result) {
        return solve(root).get(result);
    }

    private Map<Boolean, Integer> solve(TreeNode root) {
        if (root == null) return Map.of(false, 0, true, 0);
        if (root.left == null && root.right == null) return Map.of(
            false, root.val == 0 ? 0 : 1,
            true, root.val == 1 ? 0 : 1
        );
        var left = solve(root.left);
        var right = solve(root.right);
        if (root.val == 5) return Map.of(
            false, left.get(true) + right.get(true),
            true, left.get(false) + right.get(false)
        );
        var ans = new HashMap<Boolean, Integer>();
        ans.put(false, Integer.MAX_VALUE);
        ans.put(true, Integer.MAX_VALUE);
        var func = funcs.get(root.val - 2);
        for (var pair : pairs) {
            var result = func.apply(pair[0], pair[1]);
            ans.put(result, Math.min(ans.get(result), left.get(pair[0]) + right.get(pair[1])));
        }
        return ans;
    }
}
```