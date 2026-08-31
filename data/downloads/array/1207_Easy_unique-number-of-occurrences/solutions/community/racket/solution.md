# Mutable hash-tables in racket

**Author:** nizhnik
**Votes:** 1
**Link:** [https://leetcode.com/problems/unique-number-of-occurrences/solutions/2862443/](https://leetcode.com/problems/unique-number-of-occurrences/solutions/2862443/)

---

# Approach
1. Compute all the elements counts using hash. 
1. Create another hash (set), collecting all the counts\\
1. Compare sizes of the first and second map

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(n)
# Code
```racket
(define (unique-occurrences arr)
    (define counts (make-hash))
    (for ((x arr)) (hash-update! counts x add1 0))
    (eq? 
        (hash-count (for/hash (((_ cnt) (in-hash counts))) (values cnt null)))
        (hash-count counts)))
```