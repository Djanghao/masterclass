# Racket 123ms, LIS patience sort w/o binary search

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solutions/5988269/](https://leetcode.com/problems/minimum-number-of-removals-to-make-mountain-array/solutions/5988269/)

---

# Intuition
Find length of longest increasing subsequence ending at each index of input NUMS. Then reverse NUMS and do it again. Then account for places where it's impossible to put the peak of the mountain. Ensure the length of the LIS at any index is greater than the index itself.

# Code
```racket []

(define (minimum-mountain-removals nums)
  (let* ([a (adjust (lis nums))]
         [b (adjust (lis (reverse nums)))]
         [c (map + a (reverse b))])
    (let loop ([x (cdr c)] [best 1001])
      (if (null? (cdr x))
          best
          (loop (cdr x) (min best (car x)))))))

(define (adjust nums [i 0])
  (if (null? nums)
      '()
      (if (>= (car nums) i)
          (cons 1001 (adjust (cdr nums) (add1 i)))
          (cons (car nums) (adjust (cdr nums) (add1 i))))))

(define (lis L)
  "How many items do you need to remove by each index I
to accommodate the LIS?"
  (let ([piles '()])
    (for/list ([x L] [i (in-naturals)])
      (set! piles (insert-lis piles x))
      (- (add1 i) (length piles)))))

(define (insert-lis piles el)
  "Helper function for LIS."
  (if (or (null? piles) (< (last piles) el))
      (append piles (list el))
      (let loop ([L piles])
        (if (>= (car L) el)
            (cons el (cdr L))
            (cons (car L) (loop (cdr L)))))))

```