# Racket solution

**Author:** Yogaflre
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-time-difference/solutions/2142020/](https://leetcode.com/problems/minimum-time-difference/solutions/2142020/)

---

```scheme
(define/contract (find-min-difference timePoints)
  (-> (listof string?) exact-integer?)
  (let ([ts (sort (convert-list timePoints) >)])
    (let ([a (minimum 1440 ts)]
          [b (- (+ 1440 (last ts)) (car ts))])
      (if (< a b) a b)))
  )

(define (minimum tmp ts)
  (cond [(= 1 (length ts)) tmp]
        [else (let ([sub (- (car ts) (cadr ts))]
                    [next (cdr ts)])
                (cond [(< sub tmp) (minimum sub next)]
                      [else (minimum tmp next)]))]))

(define (convert-list ts)
  (cond [(null? ts) ts]
        [else (cons (convert-time (car ts))
                    (convert-list (cdr ts)))]))

(define (convert-time s)
  (let ([p (string-split s ":")])
    (+ (* 60 (string->number (car p)))
       (string->number (cadr p)))))

```