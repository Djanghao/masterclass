# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/4498794/](https://leetcode.com/problems/number-of-laser-beams-in-a-bank/solutions/4498794/)

---

# Code
```
(define/contract (popcount s)
  (-> string? exact-integer?)
(foldl (lambda (x acc) (+ acc (if (char=? x #\\1) 1 0))) 0 (string->list s)))

(define/contract (recur bank prev acc)
  (-> (listof string?) exact-integer? exact-integer? exact-integer?)
(cond
  [(empty? bank) acc]
  [else
    (let ([curr (popcount (first bank))])
      (cond
        [(= 0 curr) (recur (rest bank) prev acc)]
        [else (recur (rest bank) curr (+ acc (* prev curr)))]))
   ]
  ))
(define/contract (number-of-beams bank)
  (-> (listof string?) exact-integer?)
  (recur bank 0 0))
```