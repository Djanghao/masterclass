# map to (x,y,dir) coordinates

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/robot-bounded-in-circle/solutions/3924426/](https://leetcode.com/problems/robot-bounded-in-circle/solutions/3924426/)

---

# Approach
I used the hints provided, which spells out that if after 1 cycle the robot changes direction or it ends up in the same place then it is in a cycle.

This solution just maps it to 2 functions which turn the instruction into a change in the x, y, dir coordinates.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
(define (turn curr-dir op)
  (if (eq? op #\\G)
      curr-dir
      (match (list curr-dir op)
        [(list #\\N #\\L) #\\W]
        [(list #\\N #\\R) #\\E]
        [(list #\\S #\\L) #\\E]
        [(list #\\S #\\R) #\\W]
        [(list #\\E #\\L) #\\N]
        [(list #\\E #\\R) #\\S]
        [(list #\\W #\\L) #\\S]
        [(list #\\W #\\R) #\\N])))

(define (move-forward curr-dir)
  (match curr-dir
    [#\\N (values 0 1)]
    [#\\S (values 0 -1)]
    [#\\E (values 1 0)]
    [#\\W (values -1 0)]))

(define (is-robot-bounded instructions)
  (let loop ([ins (string->list instructions)]
             [x 0] [y 0] [dir #\\N])
    (if (null? ins)
        (or (and (zero? x) (zero? y))
            (not (equal? dir #\\N)))
        (match (first ins)
          [#\\G (let-values ([(x+ y+) (move-forward dir)])
                 (loop (rest ins) (+ x x+) (+ y y+) dir))]
          [new-dir (loop (rest ins) x y (turn dir new-dir))]))))

```