# Racket, 100/100 (by default, too few submissions)

**Author:** ctd
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4394431/](https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/solutions/4394431/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We could sort and take the greatest 2 values in n log n time, but that would mean a lot of extra work sorting smaller values. So let's just recursively search the list, carrying along our two greatest values.

# Approach
<!-- Describe your approach to solving the problem. -->
We use a helper function to search and carry along max1 and max2. Fortunately, we're guaranteed at least two values in the array, and an array of positive values, so we can initialize max1 and max2 to 0. We compare the head of the list to max1 and max2.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
n. We do at most two comparisons per element.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
I believe the calls to max-numbers in this runtime will be [tail-call optimized](https://beautifulracket.com/explainer/recursion.html), so this is also O(n). Please correct me if this is wrong!

# Code
```
(define (max-numbers nums max1 max2)
    (cond ((empty? nums) (list max1 max2))
          ((> (car nums) max1) (max-numbers (cdr nums) (car nums) max1))
          ((> (car nums) max2) (max-numbers (cdr nums) max1 (car nums)))
          (#t (max-numbers (cdr nums) max1 max2)))
)

(define/contract (max-product nums)
  (-> (listof exact-integer?) exact-integer?)
    (let ((l (max-numbers nums 0 0)))
        (* (- (car l) 1) (- (cadr l) 1)))
  )
```