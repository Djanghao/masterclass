# racket dfs

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-provinces/solutions/4049545/](https://leetcode.com/problems/number-of-provinces/solutions/4049545/)

---

# Approach
for the depth first search, we want to create a tally that shows whether we have seen the node or not. Then we can map that over the list


# Code
```
(define (find-circle-num isConnected)
  (let* ([nodes isConnected])
    (define (dfs node)
      (let ([seen (make-vector (length node) 0)])
        (let loop ([fnode node])
          (for/list ([val fnode]
                     [i (in-range (length fnode))])
            ;; check if seen
            (match val
              [1 (if (zero? (vector-ref seen i))
                     (begin
                       (vector-set! seen i 1)
                       (loop (list-ref nodes i)))
                     #f)]
              [_ #f])
            ))
        seen))
    (set-count (apply set (map dfs nodes)))))
```