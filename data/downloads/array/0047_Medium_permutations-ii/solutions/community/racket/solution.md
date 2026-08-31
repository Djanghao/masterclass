# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/4446255/](https://leetcode.com/problems/permutations-ii/solutions/4446255/)

---

# Code
```
(define/contract (permute-unique nums)
  (-> (listof exact-integer?) (listof (listof exact-integer?)))
    (let ([sorted (sort nums <)])
  (cond [(empty? sorted) (list empty)]
        [else
         (let-values ([(a b)
         (for/fold ([prev -1000] [l empty])([i sorted])
                (if (= prev i)
                    (values i l)
                (values i
    (append (map (lambda (lst) (cons i lst)) (permute-unique (remove i sorted))) l)))
    )])
           b)])
      )
)
```