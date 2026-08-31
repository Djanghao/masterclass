# racket 3ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/sliding-puzzle/solutions/6082474/](https://leetcode.com/problems/sliding-puzzle/solutions/6082474/)

---

# Intuition
Convert the input into a string. Hard-code the rules for swapping. Run BFS.

# Code
```racket []
(define (sliding-puzzle board)
  (let* ([b (string-join (map number->string (apply append board)) "")]
         [ans -1]
         [q (let ([temp (make-queue)])
              (enqueue! temp (list b 0))
              temp)]
         [seen (make-hash)])
    (for ([_ (in-naturals)]
          #:break (queue-empty? q))
      (match-let* ([(list board level) (dequeue! q)])
        (cond ((string=? "123450" board)
               (set! ans level)
               (set! q (make-queue)))
              ((not (hash-ref seen board #f))
               (hash-set! seen board #t)
               (for ([x (swap-list board)])
                 (enqueue! q (list x (add1 level))))))))
    ans))

(define (swap-list boardstr)
  (let ([i (for/or ([i (string-length boardstr)])
             (and (char=? #\\0 (string-ref boardstr i))
                  i))]
        [swap (lambda (i j)
                (let* ([ns (string-copy boardstr)]
                       [tmp (string-ref ns i)])
                  (string-set! ns i (string-ref ns j))
                  (string-set! ns j tmp)
                  ns))])
    (match i
      (0 (list (swap 0 1) (swap 0 3)))
      (1 (list (swap 0 1) (swap 1 2) (swap 1 4)))
      (2 (list (swap 1 2) (swap 2 5)))
      (3 (list (swap 3 0) (swap 3 4)))
      (4 (list (swap 3 4) (swap 4 5) (swap 4 1)))
      (5 (list (swap 4 5) (swap 5 2))))))
```