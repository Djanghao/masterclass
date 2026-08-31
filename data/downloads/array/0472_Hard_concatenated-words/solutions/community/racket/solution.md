# Racket solution (without explanation)

**Author:** yoshissac6
**Votes:** 0
**Link:** [https://leetcode.com/problems/concatenated-words/solutions/3120964/](https://leetcode.com/problems/concatenated-words/solutions/3120964/)

---

# Code
```
(define/contract (find-all-concatenated-words-in-a-dict words)
  (-> (listof string?) (listof string?))
   (define search-for-concatenated-words
    (lambda (words)
      (let ((s (list->set words))
	    (ress '()))
	(let lp-words ((words words))
	  (when (not (null? words))
	      (let* ((w (car words))
		     (n (string-length w))
		     (dp (make-vector (add1 n))))
		(vector-set! dp 0 1)
		(call/cc (lambda (break)
			   (let lp-left-cursor ((i 0))
			     (call/cc (lambda (continue)
					(if (< i n)
					    (begin
					      (when (= 0 (vector-ref dp i))
						(continue))
					      (let lp-right-cursor ((j (add1 i)))
						(when (<= j n)
						  (when (and (< (- j i) n)
							     (set-member? s (substring w i j)))
						    (vector-set! dp j 1))
						  (lp-right-cursor (add1 j)))))
					    (break))))
			     (when (= 1 (vector-ref dp n))
			       (set! ress (cons w ress))
			       (break))
			     (lp-left-cursor (add1 i)))))
		(lp-words (cdr words)))))
	ress)))
    (search-for-concatenated-words words)
  )
```