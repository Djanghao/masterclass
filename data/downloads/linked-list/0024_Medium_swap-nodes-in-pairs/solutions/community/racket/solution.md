# Racket solution

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/swap-nodes-in-pairs/solutions/4686491/](https://leetcode.com/problems/swap-nodes-in-pairs/solutions/4686491/)

---



# Code
```
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

(define (swap-pairs head)
  (let ([dummy (list-node 0 head)])
    (begin
        (set-list-node-next! dummy head)
        (let loop ([cur head]        
                  [prev dummy])
          (cond 
                [(or (eq? cur #f) (eq? (list-node-next cur) #f)) #f]
                [else (begin
                   (set-list-node-next! prev (list-node-next cur))
                   (set-list-node-next! cur (list-node-next (list-node-next cur)))
                   (set-list-node-next! (list-node-next prev) cur)

                   (loop (list-node-next cur) cur))]))
        (list-node-next dummy))))
```