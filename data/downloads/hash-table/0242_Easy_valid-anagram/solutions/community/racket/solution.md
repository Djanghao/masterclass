# naive equality of sorted char lists

**Author:** booniepepper
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-anagram/solutions/6121301/](https://leetcode.com/problems/valid-anagram/solutions/6121301/)

---


# Code
```racket []
(define/contract (is-anagram a b)
  (-> string? string? boolean?)
  (equal?
    (sort (string->list a) char<?)
    (sort (string->list b) char<?)))
```