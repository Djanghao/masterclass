# Elegant Racket Solution

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/1930162/](https://leetcode.com/problems/find-smallest-letter-greater-than-target/solutions/1930162/)

---

findf finds the first element in a list which conforms to the given predicate

```
(define (next-greatest-letter letters target)
  (if (char<=? (last letters) target)
      (first letters)
      (findf (\u03BB (l) (char<? target l)) letters)))
```