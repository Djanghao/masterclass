# ~70ms Racket

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-transform-of-an-array/solutions/5949252/](https://leetcode.com/problems/rank-transform-of-an-array/solutions/5949252/)

---

# Code
```racket []
(define (array-rank-transform arr)
  (let ([memo (for/hash ([x (sort (remove-duplicates arr) <)]
                         [i (in-naturals)])
                (values x (add1 i)))])
    (for/list ([x arr])
      (hash-ref memo x))))
```