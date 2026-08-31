# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/4415894/](https://leetcode.com/problems/count-nodes-equal-to-average-of-subtree/solutions/4415894/)

---

# Code
```
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

(struct t (n s a) #:transparent)

(define (make-t n s a) (t n s a))

(define/contract (recur root)
  (-> (or/c tree-node? #f) (struct/c t exact-integer? exact-integer? exact-integer?))
  (if (tree-node? root)
      (let* ([l (recur (tree-node-left root))]
             [r (recur (tree-node-right root))]
             [num (+ (t-n l) (t-n r) 1)]
             [sum (+ (t-s l) (t-s r) (tree-node-val root))]
             [add (if (= (quotient sum num) (tree-node-val root)) 1 0)])
        (make-t num sum (+ (t-a l) (t-a r) add)))
      (make-t 0 0 0)
  ))

(define/contract (average-of-subtree root)
  (-> (or/c tree-node? #f) exact-integer?)
  (t-a (recur root))
)
```