# [Racket] O(N) with Prefix Sum

**Author:** benkwokcy
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/1089404/](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/solutions/1089404/)

---

**Solution 1:**

We iterate through the string from left-to-right, counting up the number of moves needed to move everything from the left to the current position. We do the same for right-to-left. Then we sum up the two results.

Complexity: O(N) time, O(N) space
```scheme
(define (count-moves boxes start end step)
  (define total 0)
  (define left 0)
  (for/list ([i (in-range start end step)])
    (set! total (+ total left))
    (when (equal? (string-ref boxes i) #\\1)
      (set! left (add1 left)))
    total))
    
(define (min-operations boxes)
  (define n (string-length boxes))
  (for/list ([i (count-moves boxes 0 n 1)]
             [j (reverse (count-moves boxes (sub1 n) -1 -1))])
    (+ i j)))
```

**Solution 2**

For each '1' character, we count the moves needed to move it to each index.

Complexity: O(N^2) time, O(N) space
```scheme
(define (min-operations boxes)
  (define n (string-length boxes))
  (define result (make-vector n 0))
  (for* ([i n]
         [j n])
    (when (equal? (string-ref boxes i) #\\1)
      (vector-set! result j (+ (abs (- i j)) (vector-ref result j)))))
  (vector->list result))
  ```