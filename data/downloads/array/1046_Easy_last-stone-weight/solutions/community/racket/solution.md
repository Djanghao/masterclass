# [Racket] Heap-based solution

**Author:** lvsz
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-stone-weight/solutions/3448994/](https://leetcode.com/problems/last-stone-weight/solutions/3448994/)

---

# Intuition

Smash rock.

# Approach

1. Make heap of rock.
2. Smash heap of rock.


# Code
```racket []
(require data/heap)
(define (heap-pop! h)
  (let ((x (heap-min h)))
    (heap-remove-min! h)
    x))

(define/contract (last-stone-weight stones)
  (-> (listof exact-integer?) exact-integer?)
  (if (null? (cdr stones))
    (car stones)
    (let ((h (make-heap >=)))
      (heap-add-all! h stones)
      (do ((x (heap-pop! h) (heap-pop! h))
           (y (heap-pop! h) (heap-pop! h)))
        ((zero? (heap-count h)) (- x y))
        (when (or (> x y) (= 1 (heap-count h)))
          (heap-add! h (- x y)))))))
```

# Complexity
- Time complexity: $$O(n\\ log(n))$$

- Space complexity: $$O(n)$$