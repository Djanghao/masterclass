# Racket recursive dfs

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/generate-parentheses/solutions/5806625/](https://leetcode.com/problems/generate-parentheses/solutions/5806625/)

---


# Code
```racket []
(define (generate-parenthesis n)
  (let ([res '()])
    (let loop ([opening 0] [closing 0] [path ""])
      (cond ((and (= opening n) (= closing n))
             (set! res (cons path res)))
          (else
            (when (< opening n)
              (loop (add1 opening) closing (string-append path "(")))
            (when (< closing opening)
              (loop opening (add1 closing) (string-append path ")")))))
      res)))
```