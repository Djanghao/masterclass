# racket recursive solution

**Author:** esehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-two-binary-trees/solutions/1276602/](https://leetcode.com/problems/merge-two-binary-trees/solutions/1276602/)

---

```scheme
(define (merge-tree-node-val root1 root2)
  (cond [(not root1) (tree-node-val root2)]
        [(not root2) (tree-node-val root1)]
        [else (+ (tree-node-val root1) (tree-node-val root2))]))

(define (merge-tree-help root1 root2)
  (cond [(and (not root1) (not root2)) #f]
        [(not root1) root2]
        [(not root2) root1]
        [else (tree-node (merge-tree-node-val root1 root2)
                         (merge-tree-help (tree-node-left root1)
                                          (tree-node-left root2))
                         (merge-tree-help (tree-node-right root1)
                                          (tree-node-right root2)))]))

(define/contract (merge-trees root1 root2)
  (-> (or/c tree-node? #f) (or/c tree-node? #f) (or/c tree-node? #f))
  (merge-tree-help root1 root2))
```