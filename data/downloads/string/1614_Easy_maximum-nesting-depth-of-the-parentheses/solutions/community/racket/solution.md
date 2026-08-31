# Racket ( fold ) solution

**Author:** dedmonds
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4969819/](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4969819/)

---

Use a fold and keep track of both the current level of depth and the maximum depth observed so far as a cons cell. Return the maximum from the cons cell after the fold.
```
(define/contract (max-depth s)
  (-> string? exact-integer?)
  (cdr (foldl
        (lambda (a acc)
          (let* ((level (car acc))
                 (max-so-far (cdr acc))
                 (current-level (cond ((equal? a #\\() (add1 level))
                                      ((equal? a #\\)) (sub1 level))
                                      (else level))))
            (cons current-level
                  (if (> current-level max-so-far)
                      current-level ; update max
                      max-so-far))))
        '(0 . 0) ; (level . max-so-far)
        (string->list s))))
```