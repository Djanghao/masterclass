# racket with accumulate

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-highest-altitude/solutions/4003168/](https://leetcode.com/problems/find-the-highest-altitude/solutions/4003168/)

---

# Approach
first we build an accumulation list that applies the + function to each pair in the list, e.g.

```
(1 2 3 4 5) -> (3 6 10 15)
```

Then we prepend 0 to our accumulation since we start at 0 and take the max

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code

```
(define (accumulate proc ls)
  (foldl (\u03BB (val acc)
           (cons (proc (car acc) val)
                 acc))
         (list (car ls))
         (rest ls)))

(define (largest-altitude gain)
  (apply max (accumulate + (cons 0 gain))))

```