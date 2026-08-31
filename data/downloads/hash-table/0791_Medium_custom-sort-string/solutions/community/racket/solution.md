# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/custom-sort-string/solutions/4856574/](https://leetcode.com/problems/custom-sort-string/solutions/4856574/)

---

# Code
```racket
(define/contract (char->ord c) 
    (-> char? exact-integer?)
    (- (char->integer c) (char->integer #\\a))
)

(define/contract (custom-sort-string order s)
  (-> string? string? string?)
  (let ([ord (make-vector 26 255)][s-lst (string->list s)])
    (for ([c order][i (in-naturals 0)])
        (vector-set! ord (char->ord c) i)
    )
    (list->string (sort s-lst (lambda (a b) (< (vector-ref ord (char->ord a)) 
                                 (vector-ref ord (char->ord b))))))
  ))
```