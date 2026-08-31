# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/odd-even-linked-list/solutions/5141313/](https://leetcode.com/problems/odd-even-linked-list/solutions/5141313/)

---

# Code
```racket
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

(define/contract (recur head firstAcc secondAcc first)
  (-> (or/c list-node? #f) (listof exact-integer?) (listof exact-integer?) boolean? (listof exact-integer?))
  (if (boolean? head) (foldl cons (reverse secondAcc) firstAcc)
      (cond [first (recur (list-node-next head) (cons (list-node-val head) firstAcc) secondAcc (not first))]
            [else (recur (list-node-next head) firstAcc (cons (list-node-val head) secondAcc) (not first))])))

(define/contract (odd-even-list head)
  (-> (or/c list-node? #f) (or/c list-node? #f))
  (let build-node ([lst (recur head empty empty #t)])
    (if (empty? lst) #f
    (list-node (first lst) (build-node (rest lst))))))
```