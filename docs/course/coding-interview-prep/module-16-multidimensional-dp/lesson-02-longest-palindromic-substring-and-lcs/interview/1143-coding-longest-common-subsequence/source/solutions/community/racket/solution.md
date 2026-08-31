# my racket solution beats 100%

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-common-subsequence/solutions/4626481/](https://leetcode.com/problems/longest-common-subsequence/solutions/4626481/)

---


# Code
```
(define (dp-ref dp i j)
  (vector-ref (vector-ref dp i) j))
(define (dp-set! dp i j val)
  (vector-set! (vector-ref dp i) j val))

(define (longest-common-subsequence text1 text2)
  (begin
    (define dp (make-vector (+ (string-length text1) 1)))
    (for ([i (+ (string-length text1) 1)])
      (vector-set! dp i (make-vector (+ (string-length text2) 1))))
    (for ([s1 text1]
          [i (string-length text1)])
      (for ([s2 text2]
            [j (string-length text2)])
        (if (eq? s1 s2)
            (dp-set! dp (add1 i) (add1 j) (add1 (dp-ref dp i j)))
            (dp-set! dp (add1 i) (add1 j) (max (dp-ref dp (add1 i) j) (dp-ref dp i (add1 j)))))))
    (dp-ref dp (string-length text1) (string-length text2))))
```