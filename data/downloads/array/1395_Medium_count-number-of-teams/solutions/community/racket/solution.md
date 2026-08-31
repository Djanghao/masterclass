# Racket 115ms O(n^2) solution

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-teams/solutions/5990900/](https://leetcode.com/problems/count-number-of-teams/solutions/5990900/)

---

# Intuition
For each index except first and last, assume it is the middle soldier. Count those to the left that are less than and multiply by those on the right that are greater than the index. Then vice versa.

# Code
```racket []

(define (num-teams rating)
  (let ([L (list->vector rating)])
    (for/sum ([x L] [i (in-naturals)])
      (if (or (zero? i) (= i (sub1 (vector-length L))))
          0
          (let ([prev (vector-ref L i)])
            (+ (* (ct L prev (sub1 i) -1 <) (ct L prev (add1 i) 1 >))
               (* (ct L prev (sub1 i) -1 >) (ct L prev (add1 i) 1 <))))))))

(define (ct L prev i dir op)
  (let ([end #f])
    (cond ((eq? dir -1)
           (set! end -1))
          ((eq? dir 1)
           (set! end (vector-length L))))
    (for/sum ([x (in-range i end dir)])
      (if (op (vector-ref L x) prev) 1 0))))

```