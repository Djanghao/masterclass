# Purely functional recursive Racket

**Author:** user9605y
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/2392753/](https://leetcode.com/problems/binary-tree-level-order-traversal/solutions/2392753/)

---

```
(define (make-level-table table level node)
  (if node
      (let* ([table (hash-update table level
                                 (lambda (lst) (cons (tree-node-val node) lst))
                                 '())]
             [table (make-level-table table (add1 level) (tree-node-right node))])
        (make-level-table table (add1 level) (tree-node-left node)))
      table))

(define/contract (level-order root)
  (-> (or/c tree-node? #f) (listof (listof exact-integer?)))
  (let ([table (make-level-table (hasheqv) 0 root)])
    (for/list ([level (in-range (hash-count table))])
              (hash-ref table level))))
```

Faster and less memory usage than 66.67% of other Racket solutions, so I'm guessing there's only been three others and one was faster/smaller?