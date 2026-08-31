# Immutable recursive solution

**Author:** rhall
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-two-sorted-lists/solutions/5676493/](https://leetcode.com/problems/merge-two-sorted-lists/solutions/5676493/)

---

# Intuition
I didnt know how to do a setter on a racket struct so i just made a new one.

# Code
```racket []
; Definition for singly-linked list:
#|

; val : integer?
; next : (or/c list-node? #f)
(struct list-node
  (val next) #:mutable #:transparent)

; constructor
(define (make-list-node [val 0])
  (list-node val #f))

|#

(define/contract (merge-two-lists list1 list2)
  (-> (or/c list-node? #f) (or/c list-node? #f) (or/c list-node? #f))
  (cond 
    [(not list1) list2]
    [(not list2) list1]
    [(< (list-node-val list1) (list-node-val list2)) (list-node (list-node-val list1) (merge-two-lists (list-node-next list1) list2))]
    [else (list-node (list-node-val list2) (merge-two-lists (list-node-next list2) list1))]
  )
  )
```