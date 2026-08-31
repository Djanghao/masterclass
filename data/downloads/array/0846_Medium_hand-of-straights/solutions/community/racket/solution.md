# racket 91ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/hand-of-straights/solutions/5984613/](https://leetcode.com/problems/hand-of-straights/solutions/5984613/)

---

# Intuition
Get a count of all the elements in the form of (cons element count). Then sort them by element.

# Code
```racket []
(define (is-n-straight-hand hand group-size)
  (if (positive? (remainder (length hand) group-size))
      #f
      (let ([c (make-hash)])
        (for ([n hand])
          (hash-set! c n (add1 (hash-ref c n 0))))
        (let ([L (sort (for/list ([x (hash-keys c)]) (cons x (hash-ref c x)))
                       (lambda (a b) (< (car a) (car b))))])
          (for/and ([i (floor (/ (length hand) group-size))])
            (set! L (make-hand L group-size (caar L)))
            (and L #t))))))


(define (make-hand L size cur)
  (let* ([valid #t]
         [newL (let loop ([L L] [size size] [cur (caar L)] [flag #t])
                 (cond ((or (not flag) (zero? size))
                        L)
                       ((null? L)
                        (when (positive? size)
                          (set! valid #f))
                        '())
                       ((not (= cur (caar L)))
                        (set! valid #f)
                        (loop (cdr L) size cur #f))
                       (else
                        (if (> (cdar L) 1)
                            (cons (cons (caar L) (sub1 (cdar L)))
                                  (loop (cdr L) (sub1 size) (add1 cur) flag))
                            (loop (cdr L) (sub1 size) (add1 cur) flag)))))])
    (if valid newL #f)))

```