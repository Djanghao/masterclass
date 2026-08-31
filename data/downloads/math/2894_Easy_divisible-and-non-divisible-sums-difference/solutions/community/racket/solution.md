# Racket ( fold ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4885166/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/4885166/)

---

```
(define/contract (difference-of-sums n m)
  (-> exact-integer? exact-integer? exact-integer?)
  (foldl
   (lambda (a acc)
     (+ acc
        (if (= 0 (modulo a m))
            (- a)
            a)))
   0
   (range 1 (+ 1 n))))
```