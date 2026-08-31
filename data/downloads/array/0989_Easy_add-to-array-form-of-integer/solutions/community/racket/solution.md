# Racket solution

**Author:** yoshissac6
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-to-array-form-of-integer/solutions/3188122/](https://leetcode.com/problems/add-to-array-form-of-integer/solutions/3188122/)

---

# Code
```
(define/contract (add-to-array-form num k)
  (-> (listof exact-integer?) exact-integer? (listof exact-integer?))
(define (array-form->number arr)
  (let ((scale 1/10))
    (foldr (lambda (el sum)
	     (set! scale (* scale 10))
	     (+ sum (* el scale)))
	   0 arr)))

(define (number->array-form number)
  (let lp ((number number) (res '()))
    (if (= number 0)
	res
	(lp (floor (/ number 10)) (cons (modulo number 10) res)))))

(define (add-to-arry-form num k)
  (number->array-form (+ (array-form->number num) k)))
    (add-to-arry-form num k)
  )
```