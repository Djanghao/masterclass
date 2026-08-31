# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutations/solutions/4443922/](https://leetcode.com/problems/permutations/solutions/4443922/)

---

# Code
```
(define/contract (permute nums)
  (-> (listof exact-integer?) (listof (listof exact-integer?)))
  (cond [(empty? nums) (list empty)]
        [else (for/fold ([l empty])([i nums])
    (append (map (lambda (lst) (cons i lst)) (permute (remove i nums))) l)
    )
  ]))
```