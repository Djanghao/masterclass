# Recursive matches with Racket

**Author:** hunkyjimpjorps
**Votes:** 0
**Link:** [https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/1178445/](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/1178445/)

---

Algorithm:
* if the first bit is `0` and there's at least one bit afterwards, drop it and continue
* if the first bit is `1` and there's at least two bits afterwards, drop the first two bits and continue
* if the first bit is `0` and there are no more bits afterwards, return true
* otherwise, return false, because:
	* invalid bit: the first bit is `1` with no remaining bits
	* invalid tail: the first two bits are `10` or `11` with no remaining bits
	* empty bitstring: there are no bits to process

```
#lang racket

(define/contract (is-one-bit-character bits)
  (-> (listof exact-integer?) boolean?)
  (define/match (check-next-character x . xs)
    [(0 '())          #true]
    [(1 (list _ ..2)) (apply check-next-character (cdr xs))]
    [(0 (list _ ..1)) (apply check-next-character xs)]
    [(_ _)            #false])
  (apply check-next-character bits))
```