# DFS with Racket

**Author:** nverno
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/3747542/](https://leetcode.com/problems/minimum-depth-of-binary-tree/solutions/3747542/)

---

# Approach
DFS

# Code
```
#|
; Definition for a binary tree node.

; val : integer?
; left : (or/c tree-node? #f)
; right : (or/c tree-node? #f)
(struct tree-node
  (val left right) #:mutable #:transparent)

; constructor
(define (make-tree-node [val 0])
  (tree-node val #f #f))
|#

(define/contract (min-depth root)
  (-> (or/c tree-node? #f) exact-integer?)
  (if (false? (tree-node? root)) 0
      (let ([l (min-depth (tree-node-left root))]
            [r (min-depth (tree-node-right root))])
        (add1 (apply (if (or (zero? l) (zero? r)) max min) (list l r))))))


```