# Racket solution

**Author:** ctd
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-an-array/solutions/2860861/](https://leetcode.com/problems/apply-operations-to-an-array/solutions/2860861/)

---

```
(define (apply-operation nums)
  (cond ((or (empty? nums) (empty? (cdr nums))) nums)
       ;; If cur and next are equal, construct list with 2*cur, 0, and this function applied to everything after the first 2 elements
        ((= (car nums) (cadr nums)) (cons (* 2 (car nums)) (cons 0 (apply-operation (cddr nums)))))
        (else (cons (car nums) (apply-operation (cdr nums))))))

(define/contract (apply-operations nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  ;; The comparison lambda is a no-op for non-0 elements, so they stay in order
    (sort (apply-operation nums) (lambda (x y) (= y 0)))
  )
  ```