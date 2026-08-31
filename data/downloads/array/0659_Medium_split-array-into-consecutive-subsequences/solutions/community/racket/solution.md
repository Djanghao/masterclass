# Racket solution and proof

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2451411/](https://leetcode.com/problems/split-array-into-consecutive-subsequences/solutions/2451411/)

---

Assume `nums` can make our program returns true and we already split it into multiple
consecutive increasing subsequences.

We use subsequence to refer to consecutive increasing subsequences below.

For two subsequences in `nums`: `x, ..., x+a` and `x+a+1, ..., x+b`, we can always merge them into a new subsequence.

After these operations, for any two subsequences in `nums`: `x,...,x+a` and `y,...,y+b`, we have
`y != x+a+1` and `x != y+b+1`.
That means, for each `v` in nums,

1. it don't start a new subsequence if there are a subsequence ends with `v-1`.
2. it have to start a new subsequence if there are no subseqence ends with `v-1`.

We can iterate `nums` once to greedy construct the subsequences, and
restrict the length of each subsequence.

```scheme
(define/contract (is-possible nums)
  (-> (listof exact-integer?) boolean?)

  (let ([has1 (make-hash)]
        [has2 (make-hash)]
        [has3+ (make-hash)])
    (for ([v nums])
      (let ([v-1 (sub1 v)])
        (cond [(positive? (hash-ref has1 v-1 0)) (hash-update! has1 v-1 sub1)
                                                  (when (= (hash-ref has1 v-1) 0)
                                                    (hash-remove! has1 v-1))
                                                  (hash-update! has2 v add1 0)]
              [(positive? (hash-ref has2 v-1 0)) (hash-update! has2 v-1 sub1)
                                                  (when (= (hash-ref has2 v-1) 0)
                                                    (hash-remove! has2 v-1))
                                                  (hash-update! has3+ v add1 0)]
              [(positive? (hash-ref has3+ v-1 0)) (hash-update! has3+ v-1 sub1)
                                                  (hash-update! has3+ v add1 0)]
              [else (hash-update! has1 v add1 0)])))
    (and (hash-empty? has1) (hash-empty? has2))))
```