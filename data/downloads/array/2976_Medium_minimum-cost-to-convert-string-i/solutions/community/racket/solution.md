# 3000ms Floyd Marshall

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5955108/](https://leetcode.com/problems/minimum-cost-to-convert-string-i/solutions/5955108/)

---


# Code
```racket []
(define (minimum-cost source target original changed cost)
  (let* ([letters (map string (string->list "abcdefghijklmnopqrstuvwxyz"))]
         [dists (for/hash ([ch (in-list letters)])
                  (values ch (make-hash)))]
         ;; more convenient getters and setters for dists dictionary
         ;; I don't know wny string checks are necessary on leetcode. Works on my machine without them.
         [dists-ref
          (lambda (a b) (hash-ref (hash-ref dists (if (string? a) a (string a))) (if (string? b) b (string b)) +inf.0))]
         [dists-set!
          (lambda (a b val) (hash-set! (hash-ref dists (if (string? a) a (string a))) (if (string? b) b (string b)) val))])
    (for ([a (in-list original)]
          [b (in-list changed)]
          [c (in-list cost)])
      (dists-set! a b (min (dists-ref a b) c)))
    (for ([ch letters])
      (dists-set! ch ch 0))
    ;; Floyd Marshall
    (for ([k (in-list letters)])
      (for ([i (in-list letters)])
        (for ([j (in-list letters)])
          (let ([val (+ (dists-ref i k)
                        (dists-ref k j))])
            (when (> (dists-ref i j) val)
              (dists-set! i j val))))))
    (let ([val (for/sum ([a source] [b target])
                 (dists-ref (string a) (string b)))])
      (if (= val +inf.0) -1 (exact-floor val)))))

```