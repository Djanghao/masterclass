# Racker binary search with comments

**Author:** nizhnik
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3035686/](https://leetcode.com/problems/maximize-the-minimum-powered-city/solutions/3035686/)

---

# Approach
We can check, how many additional stations we have to build if we asked to reach certain minimum city power.

We can go through the cities keeping track of the current power for each city, whenever it's lower than required minimum we can build the station at the right-most border, so it would power as many next cities as possible (the **Greedy** part)

We can track of the current amount of station powering the city, simply adding stations at the right-most reach border, and removing at the left-most reach-border (the **Sliding Window** part)

Using that we can execute binary search checking greatest minimum city power reachable with no more than k additional stations built.

# Complexity
- Time complexity:
$$O(n \\cdot log(m))$$
- Space complexity:
$$O(n \\cdot log(m))$$

Where $$n$$ - is the size of array stations and $$m$$ - is upper bound for the search currently ``sum(stations) + r``
# Code
```
(define (max-power stations r k)
  (define init (apply vector stations)) ; converting to vector
  (define n* (sub1 (vector*-length init))) ; index of the last element
  (define (can-provide u) ; the function that be called during binary search
    (define vs (vector-copy init)) ; mutable array instead of queue with modified stations
    (define (getv i) (if (<= 0 i n*) (vector*-ref vs i) 0)) ; get current power of the city stations
    (define (addv i x) (when (> x 0) ; build additional stations at the city
                         (define i* (max 0 (min i n*))) ; next 
                         (define cur (vector*-ref vs i*))
                         (vector*-set! vs i* (+ cur x))))
    (define zero-power (for/sum ((i (in-range (add1 r)))) (getv i))) ; power at city 0
    (let go ((cur 0) (i 0) (power zero-power)) ; loop through the cities can exit early
      (define (step) ; analyze current and go to the next city
        (define lack (max 0 (- u power))) ; lack of power due to requirement
        (define cur* (+ cur lack)) ; updated added stations
        (addv (+ i r) lack)        ; building stations due to lack at the rightmost edge
        (define power* (+          ; power of the next city, including
                        power      ; ... current power
                        lack       ; ... additional stations
                        (getv (+ i r 1)) ; ... stations at the next right-border city
                        (- (getv (- i r))))) ; excluding stations at the previous left-border city
        (go cur* (add1 i) power*)) ; go to the next city

      (cond ((> cur k) false)      ; we've built too many additional stations? exit with fail
            ((> i n*)  true)       ; reached the end of the array - exit with success
            (else      (step)))))  ; go to the next city
  (define init-high (+ k (apply + stations) 1)) ; maximum unreachable power
  (let bin-search ((low 0) (high init-high)) ; binary search loop
    (define m (quotient (+ high low) 2))     ; middle
    (cond  
      ((<= (- high low) 1) low)                  ; end of the search
      ((can-provide m)     (bin-search m high))  ; if middle value successfully veridfied, try greater
      (else                (bin-search low m))))) ; if failed try lower

```