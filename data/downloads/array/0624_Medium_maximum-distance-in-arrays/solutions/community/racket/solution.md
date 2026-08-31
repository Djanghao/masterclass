# Linear pass with Racket

**Author:** tifv
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5643202/](https://leetcode.com/problems/maximum-distance-in-arrays/solutions/5643202/)

---

We need to find the largest and the smallest values over all the numbers, `max1` and `min1`. We also need to find the second-largest and the second-smallest values, `max2` and `min2`, where \u201Csecond-largest\u201D means the largest value that does not belong to the same array that `max1` belongs to. We will also need to know which array each value belongs to. (For the latter purpose we could use indices, but since in Racket a list is an object, we can use the arrays themselves as identifiers and compare them with `eq?`.)

All of this can be done by a straightforward linear pass. For each array we take its largest and smallest numbers and compare them to the values that we have found insofar.

When we are done scanning, if `max1` and `min1` belong to different arrays, we take their difference. Otherwise, we take the largest of `max1 - min2` or `max2 - min1`.

(Here the word \u201Carray\u201D is used as a synonym for \u201Clist\u201D since this is how values are passed to the function.)

```racket
(define (max-distance arrays)
    (define (absorb-max max1 max2 lt? new-max id)
        (cond
            [(or (null? max1) (lt? (car max1) new-max)) (values (cons new-max id) max1)]
            [(or (null? max2) (lt? (car max2) new-max)) (values max1 (cons new-max id))]
            [else (values max1 max2)]))
    (let make-answer ([min1 null] [min2 null] [max1 null] [max2 null] [arrays arrays])
        (match arrays
            [(cons array arrays) (let-values (
                [(min1 min2) (absorb-max min1 min2 > (first array) array)]
                [(max1 max2) (absorb-max max1 max2 < (last array) array)])
                (make-answer min1 min2 max1 max2 arrays))]
            [_ (cond
                [(not (eq? (cdr max1) (cdr min1))) (- (car max1) (car min1))]
                [else (max (- (car max1) (car min2)) (- (car max2) (car min1)))])])))
```