# Racket - depth first search (DFS) solution

**Author:** esehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/combinations/solutions/1251222/](https://leetcode.com/problems/combinations/solutions/1251222/)

---

```scheme
(define (make-task-rec elem lst result)
  (if (= (length lst) 0) result
      (make-task-rec elem (cdr lst)
                 (append result
                         (list (list (append elem
                                       (list (car lst))) (cdr lst)))))))

(define (make-task elem lst) (make-task-rec elem lst (list)))

(define (dfs task result len)
  (if (= (length task) 0) result
      (let ([work (car task)]
            [task (cdr task)])
        (cond [(< len (length (car work)))
               (dfs task result len)]
              [(= len (length (car work)))
               (dfs task
                    (append result (list (car work))) len)]
              [else (dfs
                     (append (make-task (car work) (cadr work)) task)
                     result len)]))))

(define/contract (combine n k)
  (-> exact-integer? exact-integer? (listof (listof exact-integer?)))
    (dfs (make-task (list) (range 1 (+ n 1))) (list) k))
```