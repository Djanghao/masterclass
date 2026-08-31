# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/subsets/solutions/4532952/](https://leetcode.com/problems/subsets/solutions/4532952/)

---

# Code
```racket
(define/contract (subset-recur nums ans)
  (-> (listof exact-integer?) (listof (listof exact-integer?)) (listof (listof exact-integer?)))
   (cond [(empty? nums) ans]
         [else (let ([curr (map (lambda (x) (cons (first nums) x)) ans)])
    (subset-recur (rest nums) (append ans curr)))]))

(define/contract (subsets nums)
  (-> (listof exact-integer?) (listof (listof exact-integer?)))
  (subset-recur nums (list empty)))
```