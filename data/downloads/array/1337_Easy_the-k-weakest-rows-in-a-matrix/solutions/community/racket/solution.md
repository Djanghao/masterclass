# Straightforward Racket Solution

**Author:** rymaju
**Votes:** 2
**Link:** [https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/1067417/](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/1067417/)

---

Identical to the Python one liner solution, but more functional and fun!

We basically map over all rows in the matrix to a list of pairs (index, sum of row), sort by the sums, then take the first `k` and map again to only keep the indicies!

The only tricky part here is remembering that `map` can take multiple arguments and that the sort function can take a key accessor function.

```scheme
(define/contract (k-weakest-rows mat k)
  (-> (listof (listof exact-integer?)) exact-integer? (listof exact-integer?))
  (map car
       (take (sort
              (map (lambda (i x) `(,i . ,(apply + x)))
                   (range (length mat)) mat)
              < #:key cdr )
             k)))
```