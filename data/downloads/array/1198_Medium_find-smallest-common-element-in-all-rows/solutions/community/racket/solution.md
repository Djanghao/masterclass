# racket hash intersection

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/4543265/](https://leetcode.com/problems/find-smallest-common-element-in-all-rows/solutions/4543265/)

---

# Code

```scheme
(require racket/hash)

(define (smallest-common-element mat)
  (let ([intersection
         ((compose hash-keys
                   (\u03BB (ls) (apply hash-intersect ls #:combine +)))
          (map (\u03BB (ls) (for/hash ([v ls]) (values v 0))) mat))])
    (if (empty? intersection)
        -1
        (apply min intersection))))
```