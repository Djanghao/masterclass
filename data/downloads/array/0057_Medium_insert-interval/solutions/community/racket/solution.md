# Racket elegant recursion + pattern matching

**Author:** nizhnik
**Votes:** 4
**Link:** [https://leetcode.com/problems/insert-interval/solutions/3058182/](https://leetcode.com/problems/insert-interval/solutions/3058182/)

---

# Approach
We consider following cases in the recursion
- intervals is empty `((? null? ) _)` - we return the singleton list of new interval `(list newInterval)`
- intervals are non-empty, consider their head (leftmost interval) and the current one `((cons (and hd (list hs he)) tail) (list ns ne))`.  . we have following subcases:
    - new interval lies left of the head `(> hd-start new-end)`, we insert left of the list `(cons newInterval intervals)`
    - new interval lies right of the head `(> new-start hd-end)`, we leave head as the head of the resulting list and insert the interval to the rest of the intervals `(cons hd (insert tail newInterval))`
    - otherwise (`else`) new interval interval intersects the head interval somehow, we find the union and insert it to the rest of the list `(insert tail (list (min ns hs) (max ne he))))`

# Complexity
- Time complexity:
$$O(n)$$
- Space complexity:
$$O(n)$$
# Code
```
(define/match (insert intervals newInterval)
    (((? null?) _) (list newInterval))
    (((cons (and hd (list hs he)) tail) (list ns ne)) (cond
        ((> hs ne) (cons newInterval intervals))
        ((> ns he) (cons hd (insert tail newInterval)))
        (else  (insert tail (list (min ns hs) (max ne he)))))))
```