# racket 260ms, bfs

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solutions/6008291/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/solutions/6008291/)

---

# Code
```racket []
(define (min-time-to-reach moveTime)
  (let* ([G (for/vector ([x moveTime]) (list->vector x))]
         [RR (vector-length G)]
         [CC (vector-length (vector-ref G 0))]
         [ans 0]
         [seen (for/vector ([x RR]) (make-vector CC #f))]
         [pq (make-heap (lambda (a b) (< (car a) (car b))))]
         [getv (lambda (grid r c) (vector-ref (vector-ref grid r) c))]
         [setv! (lambda (grid r c val) (vector-set! (vector-ref grid r) c val))])
    (heap-add! pq (list 0 0 0))
    (setv! seen 0 0 #t)
    (for ([level (in-naturals)] #:break (zero? (heap-count pq)))
      (match-let ([(list t r c) (heap-min pq)])
        (heap-remove-min! pq)
        (if (and (= r (sub1 RR)) (= c (sub1 CC)))
            (begin
              (set! ans (max (add1 (getv G r c)) t))
              (set! pq (make-heap <)))
            (begin
              (for ([n (nei G r c)])
                (let ([nr (first n)] [nc (second n)])
                  (unless (getv seen nr nc)
                    (begin
                      (setv! seen nr nc #t)
                      (heap-add! pq (list (max (+ 1 t) (add1 (getv G nr nc)))
                                          nr nc))))))))))
    ans))


(define (nei G r c)
  (filter (lambda (y)
            (and (<= 0 (car y) (sub1 (vector-length G)))
                 (<= 0 (second y) (sub1 (vector-length (vector-ref G 0))))))
          (for/list ([x '((0 1) (0 -1) (1 0) (-1 0))])
            (map + (list r c) x))))
```