# racket 200ms using a descending range

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/6083641/](https://leetcode.com/problems/latest-time-you-can-obtain-after-replacing-characters/solutions/6083641/)

---

# Intuition
Use a descending range to find the first match. Starting at 11 for hours and 59 for minutes.

# Code
```racket []

(define (find-latest-time s)
  (let* ([a (substring s 0 2)]
         [b (substring s 3)]
         [hms
          (lambda (hmm rng)
            (for/or ([x rng])
              (let ([x (format "~a" (~r x #:min-width 2 #:pad-string "0"))]
                    [na (string-copy hmm)])
                (when (char=? #\\? (string-ref na 0))
                  (string-set! na 0 (string-ref x 0)))
                (when (char=? #\\? (string-ref na 1))
                  (string-set! na 1 (string-ref x 1)))
                (and (string=? na x) x))))])
    (string-append (hms a (in-range 11 -1 -1)) ":"
                   (hms b (in-range 59 -1 -1)))))
```