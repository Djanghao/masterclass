# binary search right and left

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/5840136/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/5840136/)

---


# Code
```racket []
(define (search-range nums target)
  (if (empty? nums)
      (list -1 -1)
      (let* ([L (list->vector nums)]
             [start (bsearch L target 'left)]
             [end   (sub1 (bsearch L target 'right))])
        (if (and (<= 0 start end (sub1 (vector-length L)))
                 (= target (vector-ref L start) (vector-ref L end)))
            (list start end)
            (list -1 -1)))))

(define (bsearch L target dir)
  (let ([op (if (eq? dir 'left) <= <)])
    (let loop ([left 0] [right (vector-length L)])
      (if (= left right)
          left
          (let ([mid (floor (/ (+ left right) 2))])
            (if (op target (vector-ref L mid))
                (loop left mid)
                (loop (add1 mid) right)))))))
```