# Simple solution using filter

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-items-matching-a-rule/solutions/3367143/](https://leetcode.com/problems/count-items-matching-a-rule/solutions/3367143/)

---

# Code
```
(define/contract (count-matches items key val)
  (-> (listof (listof string?)) string? string? exact-integer?)
    (length
      (filter
        (lambda (i)
          (xor
            (and
              (string=? key "type") (string=? val (first i))
              (not (string=? key "color"))
              (not (string=? key "name")))
            (xor
              (and
                (string=? key "color") (string=? val (second i))
                (not (string=? key  "type"))
                (not (string=? key "name")))
              (and
                (string=? key  "name") (string=? val (third i))
                (not (string=? key "color"))
                (not (string=? key  "type"))))))
        items)))
```