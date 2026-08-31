# Racket Solution

**Author:** jrciii
**Votes:** 2
**Link:** [https://leetcode.com/problems/build-array-from-permutation/solutions/1482038/](https://leetcode.com/problems/build-array-from-permutation/solutions/1482038/)

---

```scheme
(define (build-array nums)
   (map (lambda (x) (list-ref nums x)) nums))
```