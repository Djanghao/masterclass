# racket 0ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6105737/](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6105737/)

---


# Code
```racket []
(define (is-prefix-of-word sentence searchWord)
  (let loop ([L (string-split sentence)] [i 1])
    (cond ((null? L) -1)
          ((string-prefix? (car L) searchWord) i)
          (else (loop (cdr L) (add1 i))))))
```