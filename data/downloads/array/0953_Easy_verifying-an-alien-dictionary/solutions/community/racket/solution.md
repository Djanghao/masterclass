# Elegent functional solution in Racket (without explanation)

**Author:** yoshissac6
**Votes:** 0
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3130722/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3130722/)

---

# Code
```
(define/contract (is-alien-sorted words order)
  (-> (listof string?) string? boolean?)
  (define order-ht
    (let lp ((order-lst (string->list order)) (i 1) (ht (make-immutable-hash)))
      (if (null? order-lst)
	  ht
	  (lp (cdr order-lst) (add1 i) (hash-set ht (car order-lst) i)))))

  (define (alian-char<? c1 c2)
    (< (hash-ref order-ht c1)
       (hash-ref order-ht c2)))

  (define (alian-char>? c1 c2)
    (> (hash-ref order-ht c1)
       (hash-ref order-ht c2)))

  (define (alian-string<? str1 str2)
    (let ((l1 (string-length str1)) (l2 (string-length str2)))
      (let lp ((i 0))
	(cond ((and (>= i l1) (< i l2)) #t)
	      ((or (>= i l1)  (>= i l2)) #f)
	      ((alian-char<? (string-ref str1 i) (string-ref str2 i)) #t)
	      ((alian-char>? (string-ref str1 i) (string-ref str2 i)) #f)
	      (else (lp (add1 i)))))))

  (equal? words (sort words alian-string<?))

  )
```