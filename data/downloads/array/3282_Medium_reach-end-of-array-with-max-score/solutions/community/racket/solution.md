# Racket increasing subsequence

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5814089/](https://leetcode.com/problems/reach-end-of-array-with-max-score/solutions/5814089/)

---

Relied on the hint to solve this problem. Find the longest increasing subsequence that starts at index 0, and then make sure to include the last element of the array.

# Code
```racket []
(define (find-maximum-score nums)
  (let loop ([L (cdr nums)] [j 1] [prev (cons (car nums) 0)])
    (cond ((empty? L)
           0)
          ((or (> (car L) (car prev)) (empty? (cdr L)))
           (+ (score (car prev) (cdr prev) j)
              (loop (cdr L) (add1 j) (cons (car L) j))))
          ((empty? (cdr L)))
          (else
           (loop (cdr L) (add1 j) prev)))))

(define (score prev i j)
  (* (- j i) prev))
```