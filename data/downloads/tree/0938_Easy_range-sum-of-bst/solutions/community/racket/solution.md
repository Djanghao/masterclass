# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/range-sum-of-bst/solutions/4525654/](https://leetcode.com/problems/range-sum-of-bst/solutions/4525654/)

---

# Code
```racket
; Definition for a binary tree node.
#|

; val : integer?
; left : (or/c tree-node? #f)
; right : (or/c tree-node? #f)
(struct tree-node
  (val left right) #:mutable #:transparent)

; constructor
(define (make-tree-node [val 0])
  (tree-node val #f #f))

|#

(define/contract (range-sum-bst root low high)
  (-> (or/c tree-node? #f) exact-integer? exact-integer? exact-integer?)
  (cond
    [(boolean? root) 0]
    [else (+ (range-sum-bst (tree-node-left root) low high) (range-sum-bst (tree-node-right root) low high)
             (if (and (<= low (tree-node-val root)) (<= (tree-node-val root) high)) (tree-node-val root) 0))]))
```