# Racket foldl

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-common-prefix/solutions/5813809/](https://leetcode.com/problems/longest-common-prefix/solutions/5813809/)

---



# Code
```racket []
(define (common-pre a b)
  "Find the longest prefix common to A and B."
  (let* ([mn  (min (string-length a) (string-length b))]
         [end (let loop ([i 0])
                (if (or (>= i mn)
                        (not (char=? (string-ref a i) (string-ref b i))))
                    i
                    (loop (add1 i))))])
    (substring a 0 end) ))

(define (longest-common-prefix strs)
  (foldl common-pre (car strs) strs))

```