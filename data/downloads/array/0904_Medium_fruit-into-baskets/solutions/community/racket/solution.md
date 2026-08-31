# Racket, beats 100/100 (by default, too few solutions)

**Author:** ctd
**Votes:** 0
**Link:** [https://leetcode.com/problems/fruit-into-baskets/solutions/3158101/](https://leetcode.com/problems/fruit-into-baskets/solutions/3158101/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We should be able to do this in O(n) time by keeping track of the previous value, any other value preceding that, the current length of a run, and the max length.
# Approach
<!-- Describe your approach to solving the problem. -->
We toss some initial values into a helper function which carries these values forward. Once our list is empty, return the max value.

As always, please comment if you have something slicker.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) - we must check each value.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1) - we only keep a few scalars.
# Code
```

           
(define (running-len prev prevrun other runlen maxrun l)
    (if (empty? l) maxrun
        (cond ((= (car l) prev) 
                (let ((newrunlen (add1 runlen)))
                    (running-len prev (add1 prevrun) other newrunlen (max maxrun newrunlen) (cdr l))))
              ((= (car l) other) 
                (let ((newrunlen (add1 runlen)))
                    (running-len other 1 prev newrunlen (max maxrun newrunlen) (cdr l))))
              (else 
                (let ((newprevrun (add1 prevrun)))
                    (running-len (car l) 1 prev newprevrun (max newprevrun maxrun) (cdr l)))))
    )
)

(define/contract (total-fruit fruits)
  (-> (listof exact-integer?) exact-integer?)
    (running-len -1 0 -1 0 0 fruits)
  )
```