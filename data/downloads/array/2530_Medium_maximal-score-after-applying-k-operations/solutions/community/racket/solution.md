# max heap (865ms)

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5913498/](https://leetcode.com/problems/maximal-score-after-applying-k-operations/solutions/5913498/)

---

# Intuition
Always pop the max from the list of nums. Then add it to the running total and push the max/3 back onto the heap.

# Code
```racket []
(define (max-kelements nums k)
  (let ([pq (vector->heap > (list->vector nums))])
    (let loop ([i k] [res 0])
      (if (zero? i)
          res
          (let ([cur (heap-min pq)])
            (heap-remove-min! pq)
            (heap-add! pq (ceiling (/ cur 3)))
            (loop (sub1 i) (+ res cur)))))))
```