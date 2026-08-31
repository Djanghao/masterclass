# Neighbors on neighbors on neighbors ....

**Author:** czrpb
**Votes:** 0
**Link:** [https://leetcode.com/problems/flood-fill/solutions/6017565/](https://leetcode.com/problems/flood-fill/solutions/6017565/)

---

So, basically starting with the given cell, find its neighbors that meet the requirements, set those neighbors' new `color` and recurse on the neighbors' neighbors until there are no more neighbors to check and possibly update.

# Code
```racket []
(define/contract (flood-fill image sr sc color)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer? exact-integer? (listof (listof exact-integer?)))

  (define result (list->vector (map list->vector image)))

  (define (valid-cell? color r c)
    (let* (
           (row (list-ref image r))
           (rc-color (list-ref row c))
           (valid (= color rc-color))
           )
      valid))

  (define [between l h v]
    (and (<= l v) (<= v h)))

  (define valid-row? (curry between 0 (sub1 (length image))))
  (define valid-col? (curry between 0 (sub1 (length (first image)))))

  (define [build-neighbors r c]
    ; return the 4 neighbors of the given cell (r, c) given an nxm matrix

    (for/list ((row '(-1 0 1 0))
               (col '(0 -1 0 1))
               #:when (and (valid-row? (+ r row)) (valid-col? (+ c col))))
      (list (+ r row) (+ c col))
      ))

  (let loop [
             (cells (list (list sr sc)))
             (visited (set))
             (valid-cell? (curry valid-cell? (list-ref (list-ref image sr) sc)))
             ]
    (if (null? cells)
        'done
        (let* (
               (cell (first cells))
               (rest-cells (cdr cells))
               (visited-updated (set-add visited cell))
               (neighbors (filter (curry (negate set-member?) visited-updated) (apply build-neighbors cell)))
               (similar-neighbors (filter (curry apply valid-cell?) neighbors))
               )
          (vector-set! (vector-ref result (first cell)) (second cell) color)
          (loop (append rest-cells similar-neighbors) visited-updated valid-cell?)
          )))

  (vector->list (vector-map vector->list result))

  )

```