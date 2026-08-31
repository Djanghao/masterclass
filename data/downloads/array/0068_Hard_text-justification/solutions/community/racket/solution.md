# Fastest Racket Solution | Pattern Matching

**Author:** jrciii
**Votes:** 0
**Link:** [https://leetcode.com/problems/text-justification/solutions/1481523/](https://leetcode.com/problems/text-justification/solutions/1481523/)

---

I really like how matching with "..." "..k" is greedy. Makes this really easy to solve.
```scheme
(require racket/match)

(define (full-justify words maxWidth)
  (justify words maxWidth))

(define (pad words maxWidth)
  (let ((spaces (- maxWidth (foldl + 0 (map string-length words)))))
    (cond
     [(null? words) null]
     [(= 1 (length words)) (string-append (car words) (make-string (- maxWidth (string-length (car words))) #\\space))]
     [else
      (let*-values (((words-to-pad) (length (cdr words)))
		    ((lspace-len) (quotient spaces words-to-pad))
		    ((lspace) (make-string lspace-len #\\space))
		    ((bspace-len) (ceiling (/ spaces words-to-pad)))
		    ((bspace) (make-string bspace-len #\\space))
		    ((btimes) (- spaces (* words-to-pad lspace-len)))
		    ((bw lw) (split-at words (add1 btimes))))
	(string-append
	 (string-join bw bspace)
	 (if (null? lw) "" (string-join lw lspace #:before-first lspace))))])))

(define (pad-last words maxWidth)
  (let ((trail-space (- maxWidth (+ (sub1 (length words)) (foldl + 0 (map string-length words))))))
    (string-join words " " #:after-last (make-string trail-space #\\space))))

(define (justify words maxWidth)
  (match words
    ['() ""]
    [(list a ...)
     #:when (<= (+ (sub1 (length a)) (foldl + 0 (map string-length a))) maxWidth)
     (list (pad-last a maxWidth))]
    [(list a ..1 b ..1)
     #:when (<= (+ (sub1 (length a)) (foldl + 0 (map string-length a))) maxWidth)
     (cons (pad a maxWidth) (justify b maxWidth))]))
```