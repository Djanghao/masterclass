# JAVA Easy DFS Recursive Solution

**Author:** Movsar
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent/solutions/1727361/](https://leetcode.com/problems/check-if-two-expression-trees-are-equivalent/solutions/1727361/)

---

```
class Solution {
    public boolean checkEquivalence(Node root1, Node root2) {
        int[] a = new int[26]; // a - alphabet
        
        dfs(root1, a);
        dfs(root2, a);
        
        for (int i = 0; i < a.length; i++) {
            if (a[i] % 2 != 0) return false;
        }
        
        return true;
    }
    
    private void dfs(Node root, int[] a) {
        if (root == null) return;
        
        if (root.val != '+') a[root.val - 'a']++;
        dfs(root.left, a);
        dfs(root.right, a);
    }
}
```