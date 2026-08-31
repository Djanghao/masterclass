# Racket

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/1690088/](https://leetcode.com/problems/binary-tree-postorder-traversal/solutions/1690088/)

---

```
(define (postorder-traversal root)
  (if (not (tree-node? root))
      '()
      (append (postorder-traversal (tree-node-left root))
              (postorder-traversal (tree-node-right root))
              (list (tree-node-val root)))))
```