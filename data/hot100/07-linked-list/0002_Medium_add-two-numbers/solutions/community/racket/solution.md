# RACKET

**Author:** idanmaman2
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-two-numbers/solutions/3372392/](https://leetcode.com/problems/add-two-numbers/solutions/3372392/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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

(define/contract (add-two-numbers l1 l2)
                 (-> (or/c list-node? #f) (or/c list-node? #f) (or/c list-node? #f))
                 (define ou (make-list-node))
                 (define (sumup l1 l2 addup)
                   (let* ([f1 (list-node? l1)]
                          [f2 (list-node? l2)]
                          [v1 (if f1 (list-node-val l1) 0)]
                          [v2 (if f2 (list-node-val l2) 0)]
                          [n1 (if f1 (list-node-next l1) #f)]
                          [n2 (if f2 (list-node-next l2) #f)]
                          [cur (make-list-node)]
                          [s (+ addup v1 v2)]
                          [q (quotient s 10)]
                          [r (remainder s 10)])
                     (cond
                       [(or f1 f2)

                        (set-list-node-val! cur r)
                        (set-list-node-next! cur (sumup n1 n2 q))
                        cur]

                       [else
                        (if (= addup 0)
                            #f
                            (let ([cur (make-list-node)])
                              (set-list-node-val! cur addup)

                              cur))])))
                 (display (list-node-next ou))
                 (sumup l1 l2 0))
```