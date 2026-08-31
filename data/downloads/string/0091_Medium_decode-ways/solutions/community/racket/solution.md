# Racket DP Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-ways/solutions/4454217/](https://leetcode.com/problems/decode-ways/solutions/4454217/)

---

# Code
```racket
(define/contract (f charM2 charM1)
  (-> char? char? boolean?)
  (or (char=? charM2 #\\1)
      (and (char=? charM2 #\\2)
           (char<=? #\\0 charM1)
           (char<=? charM1 #\\6))))

(define/contract (num-decodings s)
  (-> string? exact-integer?)
  (let ([lst (string->list s)])
  (if (empty? (rest lst)) (if (char=? (first lst) #\\0) 0 1)
  (let-values ([(dp0 dp1 charM2 charM1)
     (for/fold ([dp0 1]
                [dp1 (if (char=? (first lst) #\\0) 0 1)]
                [charM2 (first lst)]
                [charM1 (second lst)])
               ([char (cddr lst)])
       (values dp1
               (+ (if (char=? charM1 #\\0) 0 dp1)
                  (if (f charM2 charM1) dp0 0))
               charM1
               char))])
    (+ (if (char=? charM1 #\\0) 0 dp1)
                  (if (f charM2 charM1) dp0 0))))))
```