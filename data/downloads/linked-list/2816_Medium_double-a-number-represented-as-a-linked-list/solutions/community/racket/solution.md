# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5126957/](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5126957/)

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

(define/contract (recur head)
    (-> (or/c list-node? #f) (cons/c exact-integer? (or/c list-node? #f)))
    (if (boolean? head) (cons 0 #f)
        (let ([c (recur (list-node-next head))] [v (list-node-val head)])
              (define-values (q r) (quotient/remainder (+ (car c) (* 2 v)) 10))
              (cons q (list-node r (cdr c))))))

(define/contract (double-it head)
  (-> (or/c list-node? #f) (or/c list-node? #f))
    (let ([v (recur head)])
      (if (zero? (car v)) (cdr v) (list-node (car v) (cdr v)))))
```