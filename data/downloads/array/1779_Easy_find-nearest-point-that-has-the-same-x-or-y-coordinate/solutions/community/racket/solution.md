# Racket

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/1823115/](https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/solutions/1823115/)

---

The idea is the following:

**shared-manhattan** checks if the x or y coordinate matches. If a coordinate matches, the manhattan distance is simplified to |z_2 - z_1| where z is the non-matching coordinate. If there is no match, shared-manhatten returns the pair and a -1. This is meant to be used with map to do the following transformation:

'((a b) (c d)) -> '(((a b) d1) ((c d) d2)) where d1, d2 are the manhattan distances from the "origin"

**last-min** gets the minimum value of our distances in the data structure above with '((a b) d_n)

**nearest-point** does the following:
1. Map shared manhattan over the points to get an intermediate data structure with distances (O(n))
2. Get the smallest distance (O(n))
3. Get the index of the *first* pair which has a distance equal to the minimum distance (O(n))
4. If there are no minimal values (either none exist or all of them are -1) then index-where returns false, which triggers the function to return -1

```
(define (shared-manhattan inp comp)
  (cond [(= (first inp) (first comp))
         (list comp (abs (- (second comp) (second inp))))]
        [(= (second inp) (second comp))
         (list comp (abs (- (first comp) (first inp))))]
        [else (list comp -1)]))

(define (last-min p [min-val +inf.0])
  (if (empty? p)
      min-val
      (let ([fdist (cadar p)])
        (if (and (< fdist min-val) (not (= fdist -1)))
            (last-min (rest p) fdist)
            (last-min (rest p) min-val)))))

(define (nearest-valid-point x y points)
  (let* ([pt-distances (map (curry shared-manhattan (list x y)) points)]
         [min-val (last-min pt-distances)]
         [min-distance-location (index-where pt-distances (\u03BB (l) (= (last l) min-val)))])
    (if min-distance-location
        min-distance-location
        -1)))
```