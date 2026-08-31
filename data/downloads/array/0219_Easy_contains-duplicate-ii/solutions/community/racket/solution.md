# Racket with alist hash map, combination streams

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/4346423/](https://leetcode.com/problems/contains-duplicate-ii/solutions/4346423/)

---

# Approach

1. first we make an alist hash map of indices and values. As an example, `'(1 2 3 1 2 3)` -> `'#hash((1 . ((3 . 1) ((0 . 1)))) (2 . ((4 . 2) ((1 . 2)))) (3 . ((5 . 3) ((2 . 3)))))`. This will allow us to easily check index pairs where nums[i] == nums[j]
2. filter down to those numbers where there is more than 1 instance of the number occurring in the list.
3. for each set of index pairs, check the combinations to see if we can find one where abs(i - j) <= k. This is done using a stream with `in-combinations` and stops early if any are found. The `#final` keyword gives us a final iteration after a successful match is found. We append whether a combination is good or not and take the `or` of the list, so we only have either `#f` if every element is not a good pair or `#t` if there exists at least 1 good pair.

# Code
```scheme
(define (alist-hash ls)
  (let ([store (make-hash)])
    (for ([idx (in-range (length ls))]
          [i (in-list ls)])
      (if (hash-has-key? store i)
          (hash-set! store i (cons (cons idx i) (hash-ref store i)))
          (hash-set! store i (list (cons idx i)))))
    store))

(define (val-filter ht predicate)
  (for/hash ([(k v) (in-hash ht)] #:when (predicate v)) (values k v)))

(define (contains-nearby-duplicate nums k)

  (define (check-combinations indices)
    (define (close-indices? a b k)
      (<= (abs (- a b)) k))
    (for/or ([i (in-combinations indices 2)]
             #:final (close-indices? (first i) (second i) k))
      (close-indices? (first i) (second i) k)))

  (define get-indices (curry map car))

  (let ([store (alist-hash nums)])
    (ormap (compose check-combinations get-indices)
           (hash-values (val-filter store (compose (curry < 1) length))))))

```