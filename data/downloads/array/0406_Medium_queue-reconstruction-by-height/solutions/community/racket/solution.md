# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/queue-reconstruction-by-height/solutions/5325918/](https://leetcode.com/problems/queue-reconstruction-by-height/solutions/5325918/)

---

# Code
```racket
(define/contract (reconstruct-queue people)
  (-> (listof (listof exact-integer?)) (listof (listof exact-integer?)))
    (let ([pair-lst (map (lambda (lst)  (cons lst (second lst))) (sort people 
        (lambda (lst1 lst2) 
        (or 
            (< (first lst1) (first lst2)) 
            (and (= (first lst1) (first lst2))
                 (> (second lst1) (second lst2)))))))])

        (let recur ([pair-lst pair-lst])
          (if (empty? pair-lst) empty
          (let-values ([(prev next) 
            (split-at pair-lst (index-where pair-lst (lambda (pair) (zero? (cdr pair)))))])
            (cons (caar next) (recur 
              (append 
                (map (lambda (pair) (cons (car pair) (sub1 (cdr pair)))) prev)  
                (rest next)))))))))
```