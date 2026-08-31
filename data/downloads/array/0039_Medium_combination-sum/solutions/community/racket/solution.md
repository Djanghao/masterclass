# subsets with repetitions and pruning 190ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/combination-sum/solutions/5840428/](https://leetcode.com/problems/combination-sum/solutions/5840428/)

---

# Code
```racket []
(define (combination-sum candidates target)
  (let ([res '()])
    (let loop ([cands candidates] [cur 0] [path '()])
      (cond ((empty? cands)
             0)
            ((= cur target)
             (set! res (cons (sort path <) res)))
           ((< cur target)
            (loop (cdr cands) cur path)
            (loop cands (+ cur (car cands)) (cons (car cands) path)))))
    (remove-duplicates res)))
```