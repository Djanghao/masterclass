# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/symmetric-tree/solutions/4695500/](https://leetcode.com/problems/symmetric-tree/solutions/4695500/)

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

(define/contract (tree-symm? left right)
  (-> (or/c tree-node? #f) (or/c tree-node? #f) boolean?)
  (cond [(and (tree-node? left) (tree-node? right))
              (and (equal? (tree-node-val left) (tree-node-val right))
              (tree-symm? (tree-node-left left) (tree-node-right right))
              (tree-symm? (tree-node-right left) (tree-node-left right)))]
        [else (equal? left right)]))

(define/contract (is-symmetric root)
  (-> (or/c tree-node? #f) boolean?)
  (tree-symm? (tree-node-left root) (tree-node-right root)))
```