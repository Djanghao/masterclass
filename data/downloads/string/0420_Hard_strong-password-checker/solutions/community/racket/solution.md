# Fastest Racket solution | 208 ms | 99.2 MB

**Author:** jrciii
**Votes:** 0
**Link:** [https://leetcode.com/problems/strong-password-checker/solutions/1479183/](https://leetcode.com/problems/strong-password-checker/solutions/1479183/)

---

```scheme
(require rnrs/arithmetic/bitwise-6)
(define/contract (strong-password-checker password)
  (-> string? exact-integer?)
  (strengthen #:remaining (string->list password))
  )

(define HAS_LOWER 1)
(define HAS_UPPER 2)
(define HAS_DIGIT 4)
(define MAX_FLAGS (+ HAS_LOWER HAS_UPPER HAS_DIGIT))

(define (maybe-add-flag flags char)
  (bitwise-ior
   flags
   (cond
    [(char-lower-case? char) HAS_LOWER]
    [(char-upper-case? char) HAS_UPPER]
    [(char-numeric? char) HAS_DIGIT]
    [else 0])))

(define (strengthen
	 #:pos (pos 0)
	 #:remaining (remaining '())
	 #:last-char (last-char '())
	 #:rep (rep 1)
	 #:flags (flags 0)
	 #:chunks (chunks 0)
	 #:g0 (g0 0)
	 #:g1 (g1 0))
  (let ((chars-left (max 0 (- 6 pos)))
	(curr-length (+ pos (length remaining)))
	(spc-chr-left (- 3 (bitwise-bit-count flags))))
    (cond
     [(null? remaining)
      (let* ((chars-over (max 0 (- pos 20))))
	(cond [(< curr-length 6)
	       (+ (max chars-left chunks spc-chr-left))]
	      [(<= curr-length 20) (max chunks spc-chr-left)]
	      [else
	       (let* ((to-del chars-over)
		      (new-g0 (if (and (> rep 2) (= 0 (modulo rep 3))) (add1 g0) g0))
		      (new-g1 (if (and (> rep 2) (= 1 (modulo rep 3))) (add1 g1) g1))
		      (del-g0 (min to-del new-g0))
		      (dels-after-g0 (max 0 (- to-del del-g0)))
		      (del-g1 (min (quotient dels-after-g0 2) new-g1))
		      (dels-after-g1 (max 0 (- dels-after-g0 (* 2 del-g1))))
		      (del-rest (min (quotient dels-after-g1 3) (- chunks del-g1 del-g0))))
		 (+ to-del (max (- chunks del-g0 del-g1 del-rest) spc-chr-left)))]))]
     [else
      (let* ((curr-char (car remaining))
	     (same-char (eq? last-char curr-char))
	     (new-rep (if same-char (add1 rep) 1))
	     (new-chunks (if (= 0 (modulo new-rep 3)) (add1 chunks) chunks)))
	(strengthen
	 #:pos (add1 pos)
	 #:remaining (cdr remaining)
	 #:last-char curr-char
	 #:rep new-rep
	 #:flags (maybe-add-flag flags curr-char)
	 #:chunks new-chunks
	 #:g0 (if (and (> rep 2) (not same-char) (= 0 (modulo rep 3))) (add1 g0) g0)
	 #:g1 (if (and (> rep 2) (not same-char) (= 1 (modulo rep 3))) (add1 g1) g1)))])))
```