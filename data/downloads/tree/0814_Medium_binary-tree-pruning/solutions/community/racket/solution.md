# racket recursive solution

**Author:** esehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-pruning/solutions/1276646/](https://leetcode.com/problems/binary-tree-pruning/solutions/1276646/)

---

```scheme
(define (refresh-tree root)
  (if 
   (not root) #f
   (let ([left (refresh-tree (tree-node-left root))]
         [right (refresh-tree (tree-node-right root))])
       (if (and (= 0 (tree-node-val root)) (not left) (not right))
           #f (tree-node (tree-node-val root) left right)))))

(define/contract (prune-tree root)
  (-> (or/c tree-node? #f) (or/c tree-node? #f))
    (refresh-tree root))
```