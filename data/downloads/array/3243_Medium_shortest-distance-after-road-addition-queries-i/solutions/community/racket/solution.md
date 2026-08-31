# racket 319ms using BFS

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6090142/](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/solutions/6090142/)

---

# Code
```racket []
(define (shortest-distance-after-queries n queries)
  (letrec ([jumps (list->vector (map list (range 1 (add1 n))))]
           [ans 1000]
           [bfs
            (lambda ()
              (let ([q (make-queue)]
                    [seen (make-vector n #f)])
                (enqueue! q (list 0 0))
                (for ([i (in-naturals)]
                      #:break (queue-empty? q))
                  (match-let ([(list node steps) (dequeue! q)])
                    (vector-set! seen node #t)
                    (if (= node (sub1 n))
                        (begin
                          (set! ans steps)
                          (set! q (make-queue)))
                        (for ([x (vector-ref jumps node)])
                          (unless (vector-ref seen x)
                            (enqueue! q (list x (add1 steps))))))))))])
    (for/list ([q queries])
      (vector-set! jumps (first q) (cons (second q)
                                         (vector-ref jumps (first q))))
      (bfs)
      ans)))
```