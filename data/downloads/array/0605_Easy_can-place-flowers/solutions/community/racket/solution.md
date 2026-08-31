# Expressive O(n) Racket solution with pattern matching

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-place-flowers/solutions/4489227/](https://leetcode.com/problems/can-place-flowers/solutions/4489227/)

---

# Intuition
Look at windows of 3 elements at a time. 

If all 3 elements are "0", then you can plant. 

You then have to account for the end-of-list cases for the base case. 

# Code
```
(define (can-place-flowers flowerbed n)
    (let loop ([lst (cons 0 flowerbed)] [k n])
        (match lst
            ; base cases
            ['() (= k 0)]
            [(list 0) (<= k 1)]
            [(list 0 0) (<= k 1)]
            [(list x1) (= k 0)]
            [(list x1 x2) (= k 0)]
            [(list 0 0 0 xs ...) #:when (<= k 1) #t]
            ; recursive cases
            [(list 0 0 0 xs ...) (loop (append '(1 0) xs) (sub1 k))]
            [(cons x xs) (loop xs k)])))
```