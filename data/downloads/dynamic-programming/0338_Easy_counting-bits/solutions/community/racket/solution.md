# Counting Bits Racket Solution

**Author:** jaeyeon-jo-kr
**Votes:** 0
**Link:** [https://leetcode.com/problems/counting-bits/solutions/4480772/](https://leetcode.com/problems/counting-bits/solutions/4480772/)

---



# Code
```
(define (near-bit n i)
    (if (and (<= i n) (< n (* i 2)))
        i
        (near-bit n (* i 2))))

(define/contract (count-bits n)
  (-> exact-integer? (listof exact-integer?))
  (match n
      [0 '(0)]
      [1 '(0 1)]
      [else 
        (let* ([b (near-bit n 1)]
               [prev (count-bits (- b 1))]
               [next (map (lambda (n) (+ n 1)) prev)]) 
               (take (append prev next) (+ n 1)))]
      ))
```