# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4432809/](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/solutions/4432809/)

---

# Code
```
(define/contract (diff points maxDiff)
(-> (listof (listof exact-integer?)) exact-integer? exact-integer?)
  (cond
    [(empty? (rest points)) maxDiff]
    [else
     (let ([f (first (first points))][s (first (second points))])
       (diff (rest points) (max maxDiff (- s f))))
     ]
  ))

(define/contract (max-width-of-vertical-area points)
  (-> (listof (listof exact-integer?)) exact-integer?)
  (let ([l (sort points < #:key first)])
    (diff l 0)
    )
  )
```