# Racket Solution

**Author:** nerasnow
**Votes:** 1
**Link:** [https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5172585/](https://leetcode.com/problems/distribute-coins-in-binary-tree/solutions/5172585/)

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

(define/contract (distribute-coins root)
  (-> (or/c tree-node? #f) exact-integer?)
  (cdr (let recur ([root root])
    (if (boolean? root) (cons 0 0)
      (let* ([l (recur (tree-node-left root))]
             [r (recur (tree-node-right root))]
             [p (+ (car l) (car r) (tree-node-val root) -1)])
      (cons p (+ (cdr l) (cdr r) (abs p))))))))
```