# Solution in Racket using streams

**Author:** tail-call
**Votes:** 2
**Link:** [https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/2928188/](https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/2928188/)

---

# Intuition
The primary challenge for a Lisp program would be that indexing a list and getting a list's length are $$O(n)$$ operations. On the other hand it definitely felt like the problem could be solved in a single pass over both lists, if only I were to sprinkle in a little bit of lazy evaluation.

# Approach
After fiddling around with various approaches I remembered Scheme has streams specifically tailored for computations like this one. After I designed procedures for lazily joining two lists and computing a middle position of a stream, the task of computing a result value became trivial.

`middle-of-a-stream` is the most interesting part of the program. The approach of locating a stream's middle cons boils down to moving two scanners across the list, second one being moved whever first one moves twice. When first scanner hits the end of the list, second scanner points to the stream's middle cons.

# Complexity
- Time complexity:
$$O(m+n)$$

- Space complexity:
$$O(m+n)$$

# Code
```
(require math/flonum)

(define (sorted-lists->stream list-1 list-2)
  (cond ((empty? list-1) list-2)
        ((empty? list-2) list-1)
        ((< (car list-1)
            (car list-2))
         (stream-cons (car list-1)
                      (sorted-lists->stream (cdr list-1) list-2)))
        (else
         (stream-cons (car list-2)
                      (sorted-lists->stream list-1 (cdr list-2))))))

(define (middle-of-a-stream stream)
  (let loop ([scanner stream]
             [middle #f]
             [is-odd #f])
    (cond ((stream-empty? scanner)
           (values middle is-odd))
          ((not middle)
           (loop (stream-rest scanner)
                 scanner
                 (not is-odd)))
          ((not is-odd)
           (loop (stream-rest scanner)
                 (stream-rest middle)
                 (not is-odd)))
          (else
           (loop (stream-rest scanner)
                 middle
                 (not is-odd))))))
          
(define (average a b)
  (/ (+ a b) 2))

(define (stream-second stream)
  (stream-first (stream-rest stream)))

(define/contract (find-median-sorted-arrays nums1 nums2)
  (-> (listof exact-integer?) (listof exact-integer?) flonum?)
  (let-values ([(middle is-odd)
                (middle-of-a-stream (sorted-lists->stream nums1 nums2))])
    (fl (if is-odd
            (stream-first middle)
            (average (stream-first middle)
                     (stream-second middle))))))
```