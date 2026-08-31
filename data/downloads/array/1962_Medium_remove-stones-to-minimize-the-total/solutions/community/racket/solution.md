# Racket recursion + append-map + sorting

**Author:** nizhnik
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2962505/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/2962505/)

---

# Intuition
Take-out the juiciest part of the number every time we allowed

# Approach
Since we don't have priority-queues in the built-in racket library we can precalculate all the possible pieces to take, then cut-off $$k$$ of them

# Complexity
- Time complexity:
$$O(n  \	imes log\\space  n)$$
- Space complexity:
$$O(n  \	imes log\\space  n)$$
# Code
```
(define (min-stone-sum piles k)
    (define (removes p) (if (<= p 1) null 
        (let ((t (quotient p 2))) (cons t (removes (- p t))))))
    (define removing (sort (append-map removes piles) >))
    (- (apply + piles) (apply + (take removing (min k (length removing))))))
```