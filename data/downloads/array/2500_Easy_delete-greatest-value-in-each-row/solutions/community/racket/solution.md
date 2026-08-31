# Sort rows, transpose, find max, sum.

**Author:** czrpb
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/6031763/](https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/6031763/)

---

Stolen from https://leetcode.com/u/sdarnadeem/: https://leetcode.com/problems/delete-greatest-value-in-each-row/solutions/5348204/simple-typescript-solution/

Nice and simple and blazing fast since its running pretty much all in the interpreter/compiler due to using builtins.

# Code
```racket []
(define/contract (delete-greatest-value grid)
  (-> (listof (listof exact-integer?)) exact-integer?)

  (define grid2 (map (curryr sort <) grid))
  (define grid3 (apply map list grid2))
  (define result (apply + (map (curry apply max) grid3)))
  result
  )

```