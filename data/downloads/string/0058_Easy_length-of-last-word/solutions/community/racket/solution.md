# super simple racket solution

**Author:** dr-neptune
**Votes:** 1
**Link:** [https://leetcode.com/problems/length-of-last-word/solutions/1665339/](https://leetcode.com/problems/length-of-last-word/solutions/1665339/)

---

```
(define (length-of-last-word s) (string-length (last (string-split s))))
```

As a bonus, here is what it looks like with a [threading macro](https://github.com/lexi-lambda/threading)

```
(define (length-of-last-word s)
  (~> s
      string-split
      last
      string-length))
```