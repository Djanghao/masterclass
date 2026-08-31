# Simple Racket Solution

**Author:** dr-neptune
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/1675266/](https://leetcode.com/problems/binary-tree-inorder-traversal/solutions/1675266/)

---

```
(define (inorder-traversal tree)
  (if (not tree)
      '()
      (append (inorder-traversal (tree-node-left tree))
              (list (tree-node-val tree))
              (inorder-traversal (tree-node-right tree)))))
```