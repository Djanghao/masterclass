# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4449267/](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4449267/)

---

# Code
```
(define/contract (int->char b)
  (-> exact-integer? char?)
  (if (= 1 b) #\\1 #\\0))

(define/contract (min-operations s)
  (-> string? exact-integer?)
  (let-values ([(a b)
            (for/fold ([len 0][count 0])([char s])
              (values (add1 len)
                      (cond [(char=? char (int->char (remainder len 2))) (add1 count)]
                            [else count]))
               )])
            (min (- a b) b)
  ))
```