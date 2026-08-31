# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/4730635/](https://leetcode.com/problems/binary-tree-preorder-traversal/solutions/4730635/)

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

(define/contract (preorder-traversal root)
  (-> (or/c tree-node? #f) (listof exact-integer?))
  (if (equal? root #f) empty (cons (tree-node-val root) (append (preorder-traversal (tree-node-left root))  
  (preorder-traversal (tree-node-right root))))))
```