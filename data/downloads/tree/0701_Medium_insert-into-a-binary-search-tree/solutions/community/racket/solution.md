# Racket simple solution

**Author:** esehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/1277864/](https://leetcode.com/problems/insert-into-a-binary-search-tree/solutions/1277864/)

---

```scheme
(define (insert-tree tree x)
  (if (not tree) (tree-node x #f #f)
      (let ([val (tree-node-val tree)]
            [left (tree-node-left tree)]
            [right (tree-node-right tree)])
        (cond [(> val x) (tree-node val (insert-tree left x) right)]
              [(< val x) (tree-node val left (insert-tree right x))]))))

(define/contract (insert-into-bst root val)
  (-> (or/c tree-node? #f) exact-integer? (or/c tree-node? #f))
  (insert-tree root val))
```