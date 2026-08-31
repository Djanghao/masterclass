# O(n) solution using monotonic stack

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-element-i/solutions/4494765/](https://leetcode.com/problems/next-greater-element-i/solutions/4494765/)

---

# Intuition
We use a monotonic stack and transfer it at certain cutoff points.

This allows for a single pass through nums2. 

# Code
```
(define (next-greater-element nums1 nums2)
    (define (put ht mon cutoff)
        (match mon
            ['() (values (cons cutoff mon) ht)]
            [(cons x xs) #:when (>= x cutoff) (values (cons cutoff mon) ht)]
            [(cons x xs) (put (hash-set ht x cutoff) xs cutoff)]))

    (define greaters 
        (let loop ([lst nums2] [mon '()] [res (hash)])
            (match lst
                ['() res]
                [(cons x xs) #:when (empty? mon) (loop xs (cons x mon) res)]
                [(cons x xs) #:when (<= x (car mon)) (loop xs (cons x mon) res)]
                [(cons x xs) (call-with-values (lambda () (put res mon x)) (curry loop xs))])))
  (map (lambda (x) (hash-ref greaters x -1)) nums1))
```