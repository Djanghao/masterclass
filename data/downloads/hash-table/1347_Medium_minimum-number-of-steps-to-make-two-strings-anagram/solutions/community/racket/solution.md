# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4555680/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4555680/)

---

# Code
```racket
(define/contract (char->ord char)
  (-> char? exact-integer?)
  (- (char->integer char) 97))
                  
(define/contract (min-steps s t)
  (-> string? string? exact-integer?)
  (let ([count (make-vector 26 0)])
    (for ([c s])
      (let ([ind (char->ord c)])
      (vector-set! count ind (add1 (vector-ref count ind)))))

    (for ([c t])
      (let* ([ind (char->ord c)] [val (vector-ref count ind)])
        (vector-set! count ind (if (zero? val) val (sub1 val)))))

    (for/sum ([i count]) i)))
```