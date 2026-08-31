# Racket ( fold ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5989693/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5989693/)

---

```racket []
(define/contract (find-permutation-difference s t)
  (-> string? string? exact-integer?)
  (let ((s-chars (string->list s))
        (t-chars (string->list t)))
    (foldl
     (lambda (c acc)
       (+ acc
          (abs (- (index-of s-chars c)
                  (index-of t-chars c)))))
     0
     s-chars)))
```