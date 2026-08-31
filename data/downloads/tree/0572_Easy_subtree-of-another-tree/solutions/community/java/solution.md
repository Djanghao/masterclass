# [Java] Recursion (Node Comparison) & Preorder Sequence Comparison (StringBuilder)

**Author:** junhaowanggg
**Votes:** 61
**Link:** [https://leetcode.com/problems/subtree-of-another-tree/solutions/433199/](https://leetcode.com/problems/subtree-of-another-tree/solutions/433199/)

---

Reference: [LeetCode](https://leetcode.com/problems/subtree-of-another-tree/)
Difficulty: <span class="green">Easy</span>

## Problem

> Given two non-empty binary trees `s` and `t`, check whether tree `t` has exactly the same structure and node values with a subtree of `s`. A subtree of `s` is a tree consists of a node in `s` and all of this node's descendants. The tree `s` could also be considered as a subtree of itself.

**Example:** 

```java
//   s            t
     3            4
    / \\          / \\
   4   5        1   2
  / \\
 1   2
// True
```

```java
//   s            t
     3            4
    / \\          / \\
   4   5        1   2
  / \\
 1   2
    /
   0
// False
```


## Analysis




### Recursion (Node Comparison)


We can extract the recursive structure as follows:

`isSubtree(s, t)`:

- The base case is:
  - If `s == null && t == null`, then return `true`.
  - If `s == null || t == null`, then return `false`.
- If `isSame(s, t)` is `true`, then return `true`.
- If `isSubtree(s.left, t)` or `isSubtree(s.right, t)` is `true`, then return `true`.


```java
public boolean isSubtree(TreeNode s, TreeNode t) { // takes O(m x n)
  if (s == null) {
    return t == null;
  }
  return isSame(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
}

private boolean isSame(TreeNode t1, TreeNode t2) { // takes O(n)
  if (t1 == null && t2 == null) return true;
  if (t1 == null || t2 == null) return false;
  
  if (t1.val != t2.val) return false;
  return isSame(t1.left, t2.left) && isSame(t1.right, t2.right);
}
```



**Time:** `O(m \	imes n)`
- `O(m)`: Every node in `s` is traversed once.
- `O(n)`: Do `isSame(s, t)` for each node in `t`, which traverses at most `n` nodes in `t`.

**Space:** `O(h_s)` where `h_s` is the height of `s`.





### Preorder Sequence

We can find the preorder traversal of the tree `s` and `t`, and compare the preorder sequence. If the sequence `S_t` is a substring of `S_s`, `t` is a subtree of `s`.

Also, in order to use this method, we need to treat children of leaf nodes as `null` value, and other values should have a prior `#` character to distinguish numbers such as `3` and `23`.

Without `StringBuilder` (`13 ms`):

```java
public boolean isSubtree(TreeNode s, TreeNode t) {
  String seqS = preorder(s);
  String seqT = preorder(t);
  return seqS.indexOf(seqT) >= 0;
}

private String preorder(TreeNode t) {
  if (t == null) {
    return "null";
  }
  return "#" + t.val + preorder(t.left) + preorder(t.right); // inefficient
}
```

Use `StringBuilder` (`5 ms`):

```java
public boolean isSubtree(TreeNode s, TreeNode t) {
  // s
  StringBuilder sb = new StringBuilder();
  preorder(s, sb);
  String seqS = sb.toString();
  // t
  sb = new StringBuilder();
  preorder(t, sb);
  String seqT = sb.toString();
  
  return seqS.indexOf(seqT) >= 0;
}

private void preorder(TreeNode t, StringBuilder sb) {
  if (t == null) {
    sb.append("null");
    return;
  }
  sb.append("#" + t.val);
  preorder(t.left, sb);
  preorder(t.right, sb);
}
```

**Note:**

- `m` is the number of nodes in tree `s`; `n` is the number of nodes in tree `t`.
- `String concatenation` takes `O(k)` for a k-length string. Using `StringBuilder` reduces the time complexity to `O(1)`.

**Time:** `Original`: `O(m^2 + n^2 + m \	imes n)`; `Use StringBuilder`: `O(m + n)`
- `indexOf` takes `O(m \	imes n)`, or `O(m + n)` with KMP algorithm.

**Space:** `O(\\max{(m, n)})` because of strings.


