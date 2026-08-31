# racket inorder + list-ref

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/4505718/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/4505718/)

---

# Code

```scheme
(define (inorder-traversal tree)
  (if (not tree)
      '()
      (append (inorder-traversal (tree-node-left tree))
              (list (tree-node-val tree))
              (inorder-traversal (tree-node-right tree)))))

(define (kth-smallest root k)
  (let ([inorder (inorder-traversal root)])
    (list-ref inorder (sub1 k))))
```