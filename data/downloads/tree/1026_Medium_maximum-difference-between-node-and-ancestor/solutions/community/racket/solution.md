# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4543570/](https://leetcode.com/problems/maximum-difference-between-node-and-ancestor/solutions/4543570/)

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

(define/contract (traverse root minVal maxVal)
(-> (or/c tree-node? #f) exact-integer? exact-integer? exact-integer?)
(cond 
    [(not (tree-node? root)) (- maxVal minVal)]
    [else 
        (let ([minV (min minVal (tree-node-val root))] [maxV (max maxVal (tree-node-val root))]) 
            (max (traverse (tree-node-left root) minV maxV) (traverse (tree-node-right root) minV maxV)))]))

(define/contract (max-ancestor-diff root)
  (-> (or/c tree-node? #f) exact-integer?)
  (traverse root (tree-node-val root) (tree-node-val root)))
```