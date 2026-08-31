# Racket, 100%/100% (by default)

**Author:** ctd
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3010362/](https://leetcode.com/problems/maximum-ice-cream-bars/solutions/3010362/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The kid can maximize the number of candy bars by buying the cheapest ones first.
# Approach
<!-- Describe your approach to solving the problem. -->
So let's sort the list of costs in ascending order, and compare the number of coins against the cheapest bar. If we can buy it, subtract the cost of that cheapest bar and compare against the next item. This works well with the lispy pattern of recursively calling the function against (cdr list).

Note: a histogram-based approach should take O(n) time and space, exercise left to the reader.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The sort requires n log n time. The comparisons are O(n), but this drops out as n increases.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Making a sorted copy requires O(n) space.

# Code
```
(define (can-remove coins sorted-costs)
    (if (or (empty? sorted-costs) (< coins (car sorted-costs))) 0
        (add1 (can-remove (- coins (car sorted-costs)) (cdr sorted-costs)))))

(define/contract (max-ice-cream costs coins)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
    (let ((sorted-costs (sort costs <)))
        (can-remove coins sorted-costs)
    )
  )
```