# Racket solution | 344 ms | 126.8 mb

**Author:** jrciii
**Votes:** 1
**Link:** [https://leetcode.com/problems/product-of-array-except-self/solutions/1479431/](https://leetcode.com/problems/product-of-array-except-self/solutions/1479431/)

---

(What's up with the Racket runtimes and memory being so high for simple algorithms?)

First find the product of all numbers, then go through and divide this product by each element. If there was a single 0 in the list, replace the 0 with the product of the other numbers, and replace other numbers with 0. If there are more than one zero in the list, everything is zero.

```scheme
(define/contract (product-except-self nums)
  (-> (listof exact-integer?) (listof exact-integer?))
  (let* ((first-pass (foldl mult-w-track-zero '(1 0) nums))
	 (prod (car first-pass))
	 (zero-count (second first-pass)))
    (map (lambda (x)
	   (cond
	    [(zero? zero-count)
	     (/ prod x)]
	    [(= 1 zero-count)
	     (if (zero? x) prod 0)]
	    [else 0])) nums)))

(define (mult-w-track-zero x acc)
  (let* ((prod (car acc))
	(zero-count (second acc))
	(new-count (if (zero? x) (add1 zero-count) zero-count)))
    (list (if (= 0 x) prod (* prod x))
	  new-count)))
```