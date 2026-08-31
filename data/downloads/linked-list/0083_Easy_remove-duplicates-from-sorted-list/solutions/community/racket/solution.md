# Racket Solution

**Author:** funk443
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/3389532/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/3389532/)

---

If someone can come up with a way to convert list in Lisp into the list LeetCode defined in a tail recursive way, please leave a comment.

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

(define/contract (delete-duplicates head)
  (-> (or/c list-node? #f) (or/c list-node? #f))
  (list->leet-list (reverse (car (foldl (lambda (x storage)
                                        (match storage
                                          ((cons result checker)
                                           (if (= x checker)
                                               (cons result checker)
                                               (cons (cons x result) x)))))
                                      '(() . -101)
                                      (leet-list->list head)))))
  )

(define (leet-list->list head)
  (let recur ((head head) (result '()))
    (match head
      (#f result)
      ((list-node val #f) (reverse (cons val result)))
      ((list-node val next) (recur next (cons val result))))))

(define (list->leet-list llist)
  (match llist
    ('() #f)
    ((cons x xs) (list-node x (list->leet-list xs)))))
```