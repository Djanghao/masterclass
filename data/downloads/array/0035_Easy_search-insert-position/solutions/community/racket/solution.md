# Racket Solution with Binary Search

**Author:** dr-neptune
**Votes:** 1
**Link:** [https://leetcode.com/problems/search-insert-position/solutions/1660615/](https://leetcode.com/problems/search-insert-position/solutions/1660615/)

---

```
  (define (search-insert nums target [low 0] [high (sub1 (length nums))])
  (if (< high low)
      low
      (let ([mid (floor (/ (+ low high) 2))])
        (if (>= (list-ref nums mid) target)
            (search-insert nums target low (sub1 mid))
            (search-insert nums target (add1 mid) high)))))
```