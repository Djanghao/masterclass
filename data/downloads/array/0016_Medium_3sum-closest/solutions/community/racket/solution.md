# Racket beats 100% )))

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/4662257/](https://leetcode.com/problems/3sum-closest/solutions/4662257/)

---


# Code
```
(define (three-sums items target)
  (let ([len (vector-length items)])
    (for/list ([i (range (- len 2))])
      (let trace ([left (add1 i)]
                  [right (sub1 len)])
        (if (< left right)
            (let ([sum (+ (vector-ref items left)
                          (vector-ref items i)
                          (vector-ref items right))])
              (cond [(eq? sum target) (list sum)]
                    [(> sum target) (append (list sum) (trace left (sub1 right)))]
                    [else (append (list sum) (trace (add1 left) right))]))
            '())))))

(define (three-sum-closest nums target)
  (let* ([items (vector-sort (list->vector nums) <)]
        [closest (+ (vector-ref items 0)
                    (vector-ref items 1)
                    (vector-ref items 2))])
  (foldl (lambda (a b)
           (if (< (abs (- a target)) (abs (- b target)))
               a b))
         closest
         (flatten (three-sums items target)))))
```