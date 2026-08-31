# Racket ( recursive ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/univalued-binary-tree/solutions/4895111/](https://leetcode.com/problems/univalued-binary-tree/solutions/4895111/)

---

For each node, check it's consistency with its children and continue recursively down the binary tree.
```
(define/contract (is-unival-tree root)
  (-> (or/c tree-node? #f) boolean?)
  (letrec ((same-as-children?
             (lambda (node)
               (if (not node) true ; no node. return true.
                   (let ((left (tree-node-left node))
                         (right (tree-node-right node)))
                     (and (if (not left) true ; no left node
                              (= (tree-node-val node)
                                 (tree-node-val left)))
                          (if (not right) true ; no right node
                              (= (tree-node-val node)
                                 (tree-node-val right)))   
                          (same-as-children? left)
                          (same-as-children? right)))))))
    (same-as-children? root)))
```