# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solutions/5154226/](https://leetcode.com/problems/increasing-triplet-subsequence/solutions/5154226/)

---

# Code
```racket
(define/contract (increasing-triplet nums)
  (-> (listof exact-integer?) boolean?)
  (let recur ([nums nums][n0 #x7fffffff][n1 #x7fffffff])
    (cond
        [(empty? nums) #f]
        [(> (first nums) n1) #t]
        [(> (first nums) n0) (recur (rest nums) n0 (first nums))]
        [else (recur (rest nums) (first nums) n1)])))
```