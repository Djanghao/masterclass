# Racket (linear + log)

**Author:** dr-neptune
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/1934310/](https://leetcode.com/problems/kth-missing-positive-number/solutions/1934310/)

---

traverse the list alongside a point digit a
if a != first ls, then remove a value from k
if k = 1 and a != first ls, return a as the kth missing positive number
if a == first ls, add1 a and rest ls

```
(define (find-kth-positive arr k)
  (let rc ([a 1] [arr arr] [k k])
    (cond [(empty? arr) (+ (sub1 a) k)]
          [(= a (first arr)) (rc (add1 a) (rest arr) k)]
          [(= k 1) a]
          [else (rc (add1 a) arr (sub1 k))])))
```

with binary search

```
(define (find-kth-positive arr k)
  (define (ptr-narrow left right)
    (let* ([pivot (quotient (+ left right) 2)]
           [p-val (list-ref arr pivot)])
      (cond [(> left right) (+ k left)]
            [(< (sub1 (- p-val pivot)) k) (ptr-narrow (add1 pivot) right)]
            [else (ptr-narrow left (sub1 pivot))])))
  (ptr-narrow 0 (sub1 (length arr))))
```