# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-after-splitting-a-string/solutions/4438558/](https://leetcode.com/problems/maximum-score-after-splitting-a-string/solutions/4438558/)

---

# Code
```
(define/contract (max-score s)
  (-> string? exact-integer?)
  (let* ([l (string->list s)]
         [leftC (if (char=? (first l) #\\0) 1 0)]
         [rightC (for/sum ([c (rest l)]) (if (char=? c #\\0) 0 1))])
    (recur (rest l) (+ leftC rightC) (+ leftC rightC))
  ))

(define/contract (recur l curr ans)
  (-> (listof char?) exact-integer? exact-integer? exact-integer?)
  (cond
    [(empty? (rest l)) ans]
    [(char=? (first l) #\\0) (recur (rest l) (add1 curr) (max ans (add1 curr)))]
    [else (recur (rest l) (sub1 curr) ans)]
    )
  )
```