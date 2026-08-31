# Java easy with 95%

**Author:** khaitq
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/4318789/](https://leetcode.com/problems/binary-search-tree-iterator-ii/solutions/4318789/)

---

```
class BSTIterator {
    
    private int i=-1;
    private List<Integer> l = new ArrayList<>();
    public BSTIterator(TreeNode root) {
        build(root);
    }
    private void build(TreeNode n) {
        if(n == null) return;
        if (n.left != null) build(n.left);
        l.add(n.val);
        if (n.right != null) build(n.right);
    }
    public boolean hasNext() {
        return i < l.size()-1;
    }
    public int next() {
        i++;
        return l.get(i);
    }
    public boolean hasPrev() {
        return i > 0;
    }
    public int prev() {
        i--;
        return l.get(i);
    }
}
```