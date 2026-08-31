# Is it possible for Racket to pass the tests?

**Author:** bearxy39
**Votes:** 1
**Link:** [https://leetcode.com/problems/3sum/solutions/1774348/](https://leetcode.com/problems/3sum/solutions/1774348/)

---

I've already implemented the recommended algorithm and it still gets timout. Then, I tested the failure case on my powerful local machine, which took 20+ seconds. I feel it is impossible to pass the test cases in Racket with pure functional style. 

Here is my implementation
```
(define (find-sum v l rl len rst)
  (cond
    [(< len 2) rst]
    [else
     (let* ([vl (car l)]
            [vr (car rl)]
            [sum (+ v vl vr)])
       (cond
         [(> sum 0)
          (let* ([newr (dropf rl (curry = vr))] [dropLenr (- (length rl) (length newr))])
            (find-sum v l newr (- len dropLenr) rst))]
         [(< sum 0)
          (let* ([newl (dropf l (curry = vl))] [dropLenl (- (length l) (length newl))])
            (find-sum v newl rl (- len dropLenl) rst))]
         [else
          (let* ([newl (dropf l (curry = vl))]
                 [newr (dropf rl (curry = vr))]
                 [dropLenl (- (length l) (length newl))]
                 [dropLenr (- (length rl) (length newr))])
             (find-sum v newl newr (- len dropLenl dropLenr) (cons (list v vl vr) rst)))]))]))

(define (find-all-sum l rst)
  (match l
    [(list h t ...)
     (find-all-sum (dropf t (curry = h))
                   (find-sum h t (reverse t) (length t) rst))]
    [_ rst]))

(define (three-sum nums)
  (find-all-sum (sort nums <) '()))
```