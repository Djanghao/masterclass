# Racket Solution using for

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/destination-city/solutions/4410123/](https://leetcode.com/problems/destination-city/solutions/4410123/)

---

# Code
```
(define/contract (dest-city paths)
  (-> (listof (listof string?)) string?)
  (let ([m (for/set ([s paths]) (first s))])
    (for/first ([s paths]#:when (not (set-member? m (second s)))) (second s))))
```