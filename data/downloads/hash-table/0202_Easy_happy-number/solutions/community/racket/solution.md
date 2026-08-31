# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/happy-number/solutions/4717983/](https://leetcode.com/problems/happy-number/solutions/4717983/)

---

# Code
```racket
(define/contract (happy n)
    (-> exact-integer? exact-integer?)
    (if (zero? n) 0
    (let-values ([(q r) (quotient/remainder n 10)])
    (+ (* r r) (happy q)))))

(define/contract (is-happy-recur n seen)
    (-> exact-integer? vector? boolean?)
    (cond [(equal? n 1) true]
          [(vector-ref seen n) false]
          [else 
            (vector-set! seen n #t)
            (is-happy-recur (happy n) seen)]))

(define/contract (is-happy n)
  (-> exact-integer? boolean?)
    (if (equal? n 1) #t (is-happy-recur (happy n) (make-vector 733 #f))))
```