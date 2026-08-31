# Racket (stdlib and binary search)

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/1934479/](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/solutions/1934479/)

---

```
(define (boolean->int bool) (or (and bool 1) 0))

(define (count-negatives grid)
  (foldl + 0 (map (compose boolean->int negative?) (flatten grid))))
```

binary search:

```
(define (get-negative-in-row row)
  (define (ptr-narrow left right)
    (let* ([mid (quotient (+ left right) 2)]
           [mid-val (list-ref row mid)])
      (cond [(>= left right) (if (>= mid-val 0) 0
                                 (- (length row) mid))]
            [(>= mid-val 0) (ptr-narrow (add1 mid) right)]
            [else (ptr-narrow left (sub1 right))])))
  (ptr-narrow 0 (sub1 (length row))))

(define (count-negatives grid)
  (foldl + 0 (map get-negative-in-row grid)))
```