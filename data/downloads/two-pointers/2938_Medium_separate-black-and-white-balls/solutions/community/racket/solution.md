# 299ms just followed the hint

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/separate-black-and-white-balls/solutions/5917601/](https://leetcode.com/problems/separate-black-and-white-balls/solutions/5917601/)

---

# Code
```racket []
(define (minimum-steps s)
  (let loop ([i (sub1 (string-length s))] [res 0] [c 0])
    (if (negative? i)
        res
        (if (char=? #\\0 (string-ref s i))
            (loop (sub1 i) res (add1 c))
            (loop (sub1 i) (+ res c) c)))))
```