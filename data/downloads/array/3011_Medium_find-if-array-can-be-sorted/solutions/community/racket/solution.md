# Racket 11ms (just followed hints)

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6017136/](https://leetcode.com/problems/find-if-array-can-be-sorted/solutions/6017136/)

---

# Intuition
Couldn't have done this without the hints.

# Code
```racket []
(define (can-sort-array nums)
  (let ([segments
         (let loop ([L nums] [cur '()])
           (if (null? L)
               (list cur)
               (if (or (null? cur) (= (bitcount (car L)) (bitcount (car cur))))
                   (loop (cdr L) (cons (car L) cur))
                   (cons cur (loop (cdr L) (list (car L)))))))])
    (let loop ([L segments] [prevmx -inf.0])
      (if (null? L)
          #t
          (and (> (apply min (car L)) prevmx)
               (loop (cdr L) (apply max (car L))))))))

(define (bitcount n)
  "Number of 1s in the binary representation of decimal number N."
  (if (zero? n)
      0
      (+ (remainder n 2) (bitcount (quotient n 2)))))
```