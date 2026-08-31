# racket recursive solution

**Author:** esehara
**Votes:** 1
**Link:** [https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/1276621/](https://leetcode.com/problems/search-in-a-binary-search-tree/solutions/1276621/)

---

```scheme
(define (search-bst-helper root val)
  (cond [(not root) #f]
        [(= (tree-node-val root) val) root]
        [else (let ([search-left (search-bst-helper (tree-node-left root) val)])
           (if search-left search-left
               (search-bst-helper (tree-node-right root) val)))]))

(define/contract (search-bst root val)
  (-> (or/c tree-node? #f) exact-integer? (or/c tree-node? #f))
    (search-bst-helper root val))
```