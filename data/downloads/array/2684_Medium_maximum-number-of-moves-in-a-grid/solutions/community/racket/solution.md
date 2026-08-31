# racket 66ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/solutions/5984411/](https://leetcode.com/problems/maximum-number-of-moves-in-a-grid/solutions/5984411/)

---

# Intuition
What is the farthest column we can reach? Each time we reach a certain cell, we mark it visited and don't need to visit it again. 

# Code
```racket []

(define (max-moves G)
  (let* ([G (for/vector ([row G]) (list->vector row))]
         [best 0]
         [seen (for/vector ([row G]) (make-vector
                                      (vector-length (vector-ref G 0)) #f))])
    (for/list ([r (vector-length G)])
      (let loop ([r r] [c 0])
        (vector-set! (vector-ref seen r) c #t)
        (let ([neighbors (nei G r c seen)])
          (if (or (= c (sub1 (vector-length (vector-ref G 0))))
                  (null? neighbors))
              c
              (let ([ans (apply max (map (lambda (x) (loop (first x) (second x)))
                                         neighbors))])
                (set! best (max best ans))
                ans)))))
    best))

(define (nei G r c seen)
  (if (= c (sub1 (vector-length (vector-ref G 0))))
      '()
      (let ([ar (add1 r)] [sr (sub1 r)] [nc (add1 c)])
        (filter (lambda (x)
                  (and (<= 0 (first x) (sub1 (vector-length G)))
                       (> (vector-ref (vector-ref G (first x)) (second x))
                          (vector-ref (vector-ref G r) c))
                       (not (vector-ref (vector-ref seen (first x)) (second x)))))
                (list (list r nc) (list ar nc) (list sr nc))))))

```