# Racket DP

**Author:** nizhnik
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-great-partitions/solutions/3036501/](https://leetcode.com/problems/number-of-great-partitions/solutions/3036501/)

---

# Complexity
- Time complexity:
$$O(k \\cdot n)$$
- Space complexity:
$$O(k)$$

# Code
```
(define M-O-D 1000000007)
(define (mod+ x y) (remainder (+ x y) M-O-D))
(define (parts nums k)
  (define vals (make-vector k 0))
  (vector-set! vals 0 1)
  (define (val i) (vector*-ref vals i))
  (for* ((num nums) (x (in-range (- k num 1) -1 -1)))
    (vector-set! vals (+ x num) (mod+ (val x) (val (+ x num)))))
  (define too-small (mod+ 0 (for/sum ((v vals)) v)))
  (define all (foldl (lambda (_ x) (mod+ x x)) 1 nums))
  (mod+ all (- M-O-D (mod+ too-small  too-small))))

(define/contract (count-partitions nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  (if (> (* 2 k) (apply + nums)) 0 (parts nums k)))
```