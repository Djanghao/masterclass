# 647ms just followed hints: sorted by arrival time and kept a vector of occupied times

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5900934/](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/5900934/)

---

# Code
```racket []
(define (smallest-chair times target)
  (let* ([times (for/list ([x times] [i (in-naturals)])
                  (cons i x))]
         [tm (sort times (lambda (a b) (< (second a) (second b))))]
         [chairs (make-vector (length times) 0)])
    (for/or ([x tm])
      (let ([newpos (first-one chairs (second x))])
        (vector-set! chairs newpos (third x))
        (and (= (car x) target)
             newpos)))))

(define (first-one chairs tm)
  (for/first ([x (in-vector chairs)]
              [i (in-naturals)]
              #:when (<= x tm))
    i))

```